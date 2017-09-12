import { NgRedux } from '@angular-redux/store';
import { Todo } from './todo.interface';
import { 
  ADD_TODO, 
  REMOVE_TODO, 
  TOGGLE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  FETCH_FROM_API,
  VisibilityFilters
} from './todo.actions';

export const todoReducer = (state: Todo[] =[], {type, payload}) => {
  switch (type) {
    case ADD_TODO:
      return [
          ...state,
          payload
          ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id !== payload.id){
          return todo;
        }
        return Object.assign({}, todo, {completed: !todo.completed});
      });
    case TOGGLE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, {completed: !todo.completed});
      });
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case FETCH_FROM_API:
      return [
        ...payload
      ];
    default:
      return state;
  }
}

export const todoFilterReducer = (state = (todo: Todo) => todo, {type, action}) => {
  switch (type) {
    case VisibilityFilters.SHOW_ALL:
      return todo => todo;
    case VisibilityFilters.SHOW_ACTIVE:
      return todo => !todo.completed;
    case VisibilityFilters.SHOW_COMPLETED:
      return todo => todo.completed;
    default:
      return state;
  }
}