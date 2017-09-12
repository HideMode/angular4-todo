import { TodoService } from './../todo.service';
import { element } from 'protractor';
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'todo-header',
    templateUrl: 'todo-header.component.html',
    styleUrls: ['todo-header.component.scss']
})
export class TodoHeaderComponent {
    inputValue = "";
    @Input() placeholder:string = 'What needs to be done?';

    delay:number = 300;  // 按键间隔(ms)

    @Output() textChanges = new EventEmitter<string>();

    @Output() onEnterUp = new EventEmitter<string>();

    constructor(private elementRef: ElementRef, private todoService: TodoService){
        const event$ = Observable.fromEvent(elementRef.nativeElement, 'input')
            .map(() => this.inputValue)
            .filter(input => input.trim().length > 0)
            .debounceTime(this.delay)  // 300ms的延迟
            .distinctUntilChanged();
        
        // 监听input的变化，并触发textChanges事件
        event$.subscribe(input => this.textChanges.emit(input));
    }

    enterUp() {
        this.todoService.addTodo(this.inputValue.trim());
        this.inputValue = "";
        // if(this.inputValue.trim().length === 0) return;
        // // 触发onEnterUp事件
        // this.onEnterUp.emit(this.inputValue);
        // this.inputValue = "";
    }
}
