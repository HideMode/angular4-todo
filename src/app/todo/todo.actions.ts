import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { Todo } from "./todo.interface";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const FETCH_FROM_API = 'FETCH_FROM_API';

export class VisibilityFilters {
    static readonly SHOW_ALL = 'ALL';
    static readonly SHOW_COMPLETED = 'COMPLETED';
    static readonly SHOW_ACTIVE = 'ACTIVE';
}

@Injectable()
export class TodoActions {
    
    @dispatch()
    fetchTodo = (payload: Todo[]) => ({
        type: FETCH_FROM_API,
        payload
    })

    @dispatch()
    addTodo = (payload: Todo) => ({
        type: ADD_TODO,
        payload
    })

    @dispatch()
    removeTodo = (payload: Todo) => ({
        type: REMOVE_TODO,
        payload
    })

    @dispatch()
    toggleTodo = (payload: Todo) => ({
        type: TOGGLE_TODO,
        payload
    })


    @dispatch()
    toglleAllTodo = (payload: Todo[]) => ({
        type: TOGGLE_ALL,
        payload
    })


    @dispatch()
    clearCompletedTodo = (payload: Todo[]) => ({
        type: CLEAR_COMPLETED,
        payload
    })

    @dispatch()
    filterActions = (filter) => ({
        type: filter
    })
}