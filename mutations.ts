/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNote = /* GraphQL */ `mutation CreateNote(
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
` as GeneratedMutation<
  APITypes.CreateNoteMutationVariables,
  APITypes.CreateNoteMutation
>;
export const deleteNote = /* GraphQL */ `mutation DeleteNote(
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
` as GeneratedMutation<
  APITypes.DeleteNoteMutationVariables,
  APITypes.DeleteNoteMutation
>;
export const updateNote = /* GraphQL */ `mutation UpdateNote(
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
` as GeneratedMutation<
  APITypes.UpdateNoteMutationVariables,
  APITypes.UpdateNoteMutation
>;
