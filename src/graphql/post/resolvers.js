const post = () => {
  return {
    id: 1,
    name: 'First Post',
    numero: 12341,
  };
};

const posts = () => {
  return [
    {
      id: 1,
      name: 'First Post',
      numero: 12341,
    },
    {
      id: 2,
      name: 'Second Post',
      numero: 46346,
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
