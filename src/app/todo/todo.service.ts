import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgRedux } from "@angular-redux/store";
import { Router } from '@angular/router';
import { Todo } from './todo.interface';
import { IAppState } from "../store";
import { TodoActions } from './todo.actions';

@Injectable()
export class TodoService {

  private api_url = 'http://localhost:4200';
  private headers = new Headers({'Content-Type': 'application/json'});
  private auth$: Observable<number>;

  constructor(
    private http: Http,
    private router: Router,
    private todoActions: TodoActions,
    private ngRedux: NgRedux<IAppState>
    ) {
      
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
      .take(1)
      .subscribe(() => {
        this.todoActions.addTodo(todoToAdd);
      });
  }
  fetchTodo(): void {
    this
    .getTodos()
    .subscribe((todos: Todo[]) => {
      this.todoActions.fetchTodo(todos);
    });
  }
  // It was PUT /todos/:id before
  // But we will use PATCH /todos/:id instead
  // Because we don't want to waste the bytes those don't change
  toggleTodo(todo: Todo): void {
    const updatedTodo: Todo = Object.assign({}, todo, {completed: !todo.completed});
    Observable.interval(300)
    .take(1)
    .subscribe(() => {
      this.todoActions.toggleTodo(updatedTodo);
    });
  }
  // DELETE /todos/:id
  removeTodo(todo: Todo): void {
    Observable.interval(300)
    .take(1)
    .subscribe(() => {
      this.todoActions.removeTodo(todo);
    });
  }
  // GET /todos
  getTodos(): Observable<Todo[]> {
    return this.http.get(`${this.api_url}/data.json`)
            .map(res => res.json() as Todo[]);
  }
  
  toggleAll(todos: Todo[]): void{
    Observable.interval(300)
    .take(1)
    .subscribe(() => {
      this.todoActions.toglleAllTodo(todos);
    });
  }
  
  clearCompleted(todos: Todo[]): void {
    Observable.interval(300)
    .take(1)
    .subscribe(() => {
      this.todoActions.clearCompletedTodo(todos);
    });
  }
}