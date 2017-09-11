import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss']
})
export class TodoComponent {

    todos: Observable<Todo[]>;

    constructor(
        private service: TodoService,
        private route: ActivatedRoute,
        // private store$: Store<AppState>
    ) {
        // const fetchData$ = this.service.getTodos()
        //     .flatMap(todos => {
        //         this.store$.dispatch({ type: FETCH_FROM_API, payload: todos });
        //         return this.store$.select('todos')
        //     })
        //     .startWith([]);
        // const filterData$ = this.route.params.pluck('filter')
        //     .do(value => {
        //         const filter = value as string;
        //         this.store$.dispatch({ type: filter });
        //     })
        //     .flatMap(_ => this.store$.select('todoFilter'));
        // this.todos = Observable.combineLatest(
        //     fetchData$,
        //     filterData$,
        //     (todos: Todo[], filter: any) => todos.filter(filter)
        // )
    }
    addTodo(desc: string) {
        // this.service.addTodo(desc);
    }
    toggleTodo(todo: Todo) {
        // this.service.toggleTodo(todo);
    }
    removeTodo(todo: Todo) {
        // this.service.removeTodo(todo);
    }
    toggleAll() {
        // this.service.toggleAll();
    }
    clearCompleted() {
        // this.service.clearCompleted();
    }
}
