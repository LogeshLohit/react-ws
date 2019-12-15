import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ShopReducer from './ShopReducer'

const ShopStore = createStore(ShopReducer, applyMiddleware(logger));

export default ShopStore;
