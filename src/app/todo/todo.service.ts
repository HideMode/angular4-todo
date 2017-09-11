import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Todo } from './todo.interface';

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  FETCH_FROM_API
} from './todo.action';

@Injectable()
export class TodoService {

  private api_url = 'http://localhost:4200';
  private headers = new Headers({'Content-Type': 'application/json'});
  private auth$: Observable<number>;

  constructor(
    private http: Http,
    private router: Router,
    // private store$: Store<AppState>
    ) {
    // this.auth$ = this.store$.select(appState => appState.auth)
    //   .filter(auth => auth.user !== null)
    //   .map(auth => auth.user.id);
  }
  uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  // POST /todos
  addTodo(desc: string): void {
      const todoToAdd: Todo = {
        id: this.uuid(),
        desc: desc,
        completed: false
      };
      Observable.interval(300)
      .take(5)
      .subscribe(() => {
        // this.store$.dispatch({type: ADD_TODO, payload: todoToAdd});
      });
  }
  // It was PUT /todos/:id before
  // But we will use PATCH /todos/:id instead
  // Because we don't want to waste the bytes those don't change
  toggleTodo(todo: Todo): void {
    const updatedTodo: Todo = Object.assign({}, todo, {completed: !todo.completed});
    Observable.interval(300)
    .take(5)
    .subscribe(() => {
      // this.store$.dispatch({
      //         type: TOGGLE_TODO, 
      //         payload: updatedTodo
      //       });
    });
  }
  // DELETE /todos/:id
  removeTodo(todo: Todo): void {
    Observable.interval(300)
    .take(5)
    .subscribe(() => {
     //     this.store$.dispatch({
    //       type: REMOVE_TODO,
    //       payload: todo
    //     });
    });
  }
  // GET /todos
  getTodos(): Observable<Todo[]> {
    return this.http.get(`${this.api_url}/data.json`)
            .map(res => res.json() as Todo[]);
  }
  
  toggleAll(): void{
  
    // this.getTodos()
    //   .flatMap(todos => Observable.from(todos))
    //   .flatMap(todo=> { 
    //     const url = `${this.api_url}/${todo.id}`;
    //     let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    //     return this.http
    //       .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
    //   })
    //   .subscribe(()=>{
    //     this.store$.dispatch({
    //       type: TOGGLE_ALL
    //     });
    //   })
  }
  
  clearCompleted(): void {
    // this.getTodos()
    //   .flatMap(todos => Observable.from(todo.filter(t => t.completed)))
    //   .flatMap(todo=> {
    //     const url = `${this.api_url}/${todo.id}`;
    //     return this.http
    //       .delete(url, {headers: this.headers})
    //   })
    //   .subscribe(()=>{
    //     this.store$.dispatch({
    //       type: CLEAR_COMPLETED
    //     });
    //   });
  }
}