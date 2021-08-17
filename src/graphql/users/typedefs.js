import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
	extend type Query {
		user(id: Int!): User!
		users(limit: Int, offset: Int): [User!]!
	}

	extend type Mutation {
		createUser(name: String!, email: String!): User
	}

	type User {
		id: Int!
		name: String!
		email: String!
		created_at: String
		updated_at: String
	}
`;
