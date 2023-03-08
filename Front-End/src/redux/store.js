import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

// composeWithDevTools()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)));

export default store;
