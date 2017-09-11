import {TodoService} from './todo.service';
import {Todo} from './todo.interface';
import {Observable} from 'rxjs/Rx';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({moduleId: module.id, templateUrl: 'todo.component.html', styleUrls: ['todo.component.scss']})
export class TodoComponent implements OnInit {

    todos: Todo[];

    constructor(private todoService: TodoService, private route: ActivatedRoute,
    // private store$: Store<AppState>
    ) {
        // const fetchData$ = this.service.getTodos()     .flatMap(todos => {
        // this.store$.dispatch({ type: FETCH_FROM_API, payload: todos });
        // return this.store$.select('todos')     })     .startWith([]); const
        // filterData$ = this.route.params.pluck('filter')     .do(value => {
        // const filter = value as string;         this.store$.dispatch({ type: filter
        // });     })     .flatMap(_ => this.store$.select('todoFilter')); this.todos =
        // Observable.combineLatest(     fetchData$,     filterData$,     (todos:
        // Todo[], filter: any) => todos.filter(filter) )
    }
    ngOnInit() {
        this
        .todoService
        .getTodos()
        .subscribe((todos: Todo[]) => {
            this.todos = todos;
        });
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
        this.todoService.toggleAll();
    }
    clearCompleted() {
        this.todoService.clearCompleted();
    }
}
