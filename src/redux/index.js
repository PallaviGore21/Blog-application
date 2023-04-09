import { createStore, combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./reducers/adminReducer";
import { blogReducer } from "./reducers/blogReducer";
import { userReducer } from "./reducers/userReducer";

const rootreducer = combineReducers({
allUsers: userReducer,
allBlogs: blogReducer,
admin: adminReducer
})

const reduxStore = createStore(rootreducer, {}, composeWithDevTools(applyMiddleware(thunk)))



export default reduxStore