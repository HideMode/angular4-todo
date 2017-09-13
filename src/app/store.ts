import { IAppState } from './store';
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { Todo } from "./todo/todo.interface";
import { combineReducers, Reducer } from 'redux';
import { todoReducer, todoFilterReducer  } from "./todo/todo.reducer";

/**
 * 定义store结构 (This interface determines the shape of our store)
 * This interface will determine what properties we're going to have in our store
 */
export interface IAppState {
    todos?: Todo[];
    todoFilter?: string;
}


/**
 * 随着项目变大，我们可以把reduer函数拆分成一个个小的便于维护的reducer(使他们的职责更统一)， 最后组装起来。
 * 
 * @export
 */
export const rootReducer: Reducer<IAppState> = combineReducers({
    todos: todoReducer,
    todoFilter: todoFilterReducer
}) 


