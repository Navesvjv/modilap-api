import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
	extend type Query {
		user(id: String!): User!
		users(limit: Int, offset: Int): [User!]!
	}

	extend type Mutation {
		createUser(name: String!, email: String!): User!
		updateUser(id: String!, name: String, email: String): User!
		deleteUser(id: String!): String
	}

	type User {
		increments: Int!
		id: String!
		name: String!
		email: String!
		created_at: String
		updated_at: String
	}
`;
