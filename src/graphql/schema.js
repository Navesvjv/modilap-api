import { gql } from 'apollo-server';
import { usersTypeDefs } from './users/typedefs';
import { usersResolvers } from './users/resolvers';

const rootTypeDefs = gql`
	type Query {
		_empty: Boolean
	}

	type Mutation {
		_empty: Boolean
	}
`;

const rootResolvers = {
	Query: {
		_empty: () => true,
	},
	Mutation: {
		_empty: () => true,
	},
};

export const typeDefs = [rootTypeDefs, usersTypeDefs];
export const resolvers = [rootResolvers, usersResolvers];
