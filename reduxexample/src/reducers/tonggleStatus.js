let intinialState = false;

let myReducer = (state = intinialState, {type}) => {
  if(type === "TONGGLE_STATUS"){
    state = !state
  }
  return state
}

export default myReducer;