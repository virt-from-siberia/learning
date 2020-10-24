const initialState = {
  data: [
    {
      name: "Milton",
      type: "cat",
      age: 4,
    },
    {
      name: "Sammy",
      type: "dog",
      age: 2,
    },
    {
      name: "Joseph",
      type: "turtle",
      age: 34,
    },
    {
      name: "Simon",
      type: "dog",
      age: 8,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
