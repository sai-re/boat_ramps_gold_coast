import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk, {ThunkMiddleware} from "redux-thunk";
import { AppActionTypes }  from '../../types/actions';

//global type on window to handle redux dev tools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create store and pass in reducer and middleware
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk as ThunkMiddleware<Appstate, AppActionTypes>))
);

//grab type of all reducers (type for master state)
export type Appstate = ReturnType<typeof rootReducer>;

export default store;