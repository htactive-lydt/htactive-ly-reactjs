let intinialState = {
  by: "name",
  value: 1
};

let myReducer = (state = intinialState, { type, sort }) => {
  if (type === "SORT") {
    const {by, value} = sort;
    return {
      by,
      value
    };
  }
  return state
};

export default myReducer;
