import { NgRedux, NgReduxModule } from "@angular-redux/store";


/**
 * 定义store结构 (This interface determines the shape of our store)
 * This interface will determine what properties we're going to have in our store
 */
export interface IAppState {

}


/**
 * 随着项目变大，我们可以把reduer函数拆分成一个个小的便于维护的reducer(使他们的职责更统一)， 最后
 * 
 * @export
 */
export function rootReducer(state, action) {
    return state;
}