import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

import coffeeReducer from "./reducers/coffeeReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  rootCart: cartReducer,
  rootCoffee: coffeeReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
