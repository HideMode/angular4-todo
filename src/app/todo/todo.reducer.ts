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

export const todoReducer = (state: Todo[] = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          action.payload
          ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id !== action.payload.id){
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
        ...action.payload
      ];
    default:
      return state;
  }
}

export const todoFilterReducer = (state:string="ALL", action) => {
  switch (action.type) {
    case VisibilityFilters.SHOW_ALL:
    case VisibilityFilters.SHOW_ACTIVE:
    case VisibilityFilters.SHOW_COMPLETED:
      return action.type;
    default:
      return state;
  }
}