// store的具体代码
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducers from './reducers';

//常量
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducers)


const store=createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store)
export default store