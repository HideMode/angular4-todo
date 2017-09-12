import { Observable } from 'rxjs/Rx';
import { IAppState } from './../store';
import { NgRedux, select } from '@angular-redux/store';
import {TodoService} from './todo.service';
import {Todo} from './todo.interface';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({moduleId: module.id, templateUrl: 'todo.component.html', styleUrls: ['todo.component.scss']})
export class TodoComponent implements OnInit {


    @select("todos") todos$: Observable<Todo[]>;
    todos: Todo[];
    constructor(private todoService: TodoService, 
        private route: ActivatedRoute,
        private ngRedux: NgRedux<IAppState>
    ) {
        todoService.fetchTodo();
    }
    ngOnInit() {
        // this
        // .todoService
        // .getTodos()
        // .subscribe((todos: Todo[]) => {
        //     this.todos = todos;
        // });
        this.todos$.subscribe((todos: Todo[]) => {
            this.todos = todos
        })
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
