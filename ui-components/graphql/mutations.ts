/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $condition: ModelNoteConditionInput
    $input: CreateNoteInput!
  ) {
    createNote(condition: $condition, input: $input) {
      createdAt
      description
      id
      image
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $condition: ModelNoteConditionInput
    $input: DeleteNoteInput!
  ) {
    deleteNote(condition: $condition, input: $input) {
      createdAt
      description
      id
      image
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $condition: ModelNoteConditionInput
    $input: UpdateNoteInput!
  ) {
    updateNote(condition: $condition, input: $input) {
      createdAt
      description
      id
      image
      name
      owner
      updatedAt
      __typename
    }
  }
`;
