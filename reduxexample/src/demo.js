import {createStore} from "redux";
import {tonggleStatus, sort} from './actions/index'
import myReducer from './reducers/index'


const store = createStore(myReducer);
console.log("Default: ", store.getState());


store.dispatch(sort({by: "name", value: -1}));
console.log("After sort: ", store.getState());

store.dispatch(tonggleStatus());
console.log("After tonggle: ", store.getState());