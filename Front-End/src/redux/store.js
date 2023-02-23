import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";

// composeWithDevTools()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)));

export default store;
