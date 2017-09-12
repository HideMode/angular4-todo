import { TodoActions } from './todo.actions';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component'
import { TodoRoutingModule } from './todo-routing.module'

@NgModule({
    imports: [
        TodoRoutingModule,
        SharedModule
    ],
    providers: [TodoService, TodoActions],
    declarations: [
        TodoComponent, TodoFooterComponent, TodoHeaderComponent, TodoItemComponent, TodoListComponent
    ]
})
export class TodoModule {

}
