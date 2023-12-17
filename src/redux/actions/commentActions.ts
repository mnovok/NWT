export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (email: string, comment: string) => {
  return {
    type: ADD_COMMENT,
    payload: {
      id: Date.now(),
      body: comment,
      email,
      name: '',
      postId: 0,
    },
  };
};


export {};