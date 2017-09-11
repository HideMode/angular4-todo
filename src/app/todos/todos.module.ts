import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TodosComponent } from './todos.component';
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
    declarations: [
        TodosComponent, TodoFooterComponent, TodoHeaderComponent, TodoItemComponent, TodoListComponent
    ]
})
export class TodosModule {

}
