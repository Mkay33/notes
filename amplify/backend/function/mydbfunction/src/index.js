const AWS = require("aws-sdk");
const { Client } = require("pg");

// Secrets Manager client
const secrets = new AWS.SecretsManager();

exports.handler = async (event) => {
  try {
    // 1. Load the secret name from environment variables
    const secretName = process.env.DB_CONNECTION_URI;

    if (!secretName) {
      throw new Error("DB_CONNECTION_URI environment variable is not set.");
    }

    // 2. Fetch the actual secret value from Secrets Manager
    const secretValue = await secrets
      .getSecretValue({ SecretId: secretName })
      .promise();

    const connectionString = secretValue.SecretString;

    if (!connectionString) {
      throw new Error("Secret value for DB_CONNECTION_URI is empty.");
    }

    // 3. Connect to PostgreSQL database
    const client = new Client({
      connectionString,
      ssl: { rejectUnauthorized: false }, // required for RDS in most cases
    });

    await client.connect();

    // 4. Test query
    const result = await client.query("SELECT NOW()");

    await client.end();

    // 5. Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Connection successful!",
        timestamp: result.rows[0].now,
      }),
    };

  } catch (error) {
    console.error("Lambda error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};

