import { Observable } from 'rxjs/Rx';
import { IAppState } from './../store';
import { NgRedux, select } from '@angular-redux/store';
import {TodoService} from './todo.service';
import {Todo} from './todo.interface';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TodoActions, VisibilityFilters } from './todo.actions';

@Component({moduleId: module.id, templateUrl: 'todo.component.html', styleUrls: ['todo.component.scss']})
export class TodoComponent implements OnInit {


    @select("todos") 
    todos$: Observable<Todo[]>;

    @select("todoFilter")
    todoFilter$: Observable<string>;

    todos: Todo[];
    constructor(private todoService: TodoService, 
        private route: ActivatedRoute,
        private ngRedux: NgRedux<IAppState>,
        private todoActions: TodoActions
    ) {
        // fetch data from server
        // const filterData$ = this.route.params.pluck('filter')
        // .do(value => {
        //   const filter = value as string;
        //   this.store$.dispatch({type: filter});
        // })
        // .flatMap(_ => this.store$.select('todoFilter'));
        this.route.params.subscribe(params => {
            this.todoActions.filterActions(params["filter"]);
        })

        todoService.fetchTodo();
    }
    ngOnInit() {
        // this
        // .todoService
        // .getTodos()
        // .subscribe((todos: Todo[]) => {
        //     this.todos = todos;
        // });
        // get state from redux
        Observable.combineLatest(
            this.todos$,
            this.todoFilter$,
            (todos: Todo[], filter: string) => todos.filter(todo => {
                switch(filter){
                    case VisibilityFilters.SHOW_ALL: return true;
                    case VisibilityFilters.SHOW_ACTIVE: return !todo.completed;
                    case VisibilityFilters.SHOW_COMPLETED: return todo.completed;
                }
            })
        ).subscribe((todos: Todo[]) => {
                this.todos = todos
            })
        // this.todos$.subscribe((todos: Todo[]) => {
        //     this.todos = todos.filter(() => {

        //     })
        // })
    }

    addTodo(desc: string) {
        this.todoService.addTodo(desc);
    }
    toggleTodo(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }
    removeTodo(todo: Todo) {
        this.todoService.removeTodo(todo);
    }
    toggleAll() {
        this.todoService.toggleAll(this.todos);
    }
    clearCompleted() {
        this.todoService.clearCompleted(this.todos);
    }
}
