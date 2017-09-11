import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-footer',
    templateUrl: 'todo-footer.component.html',
    styleUrls: ['todo-footer.component.scss']
})
export class TodoFooterComponent {
    @Input() itemCount: number;
    @Output() onClear = new EventEmitter<boolean>();
    onClick() {
        this.onClear.emit(true);
    }
}
