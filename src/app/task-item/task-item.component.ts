import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class TaskComponent implements  OnChanges{
    @Input('name') itemName: string;
    @Output('customEvent') customButtonClick = new EventEmitter<{category: string}>();
    @ViewChild('inputVal', {static: true}) inputRefVal: ElementRef;

    category: string = 'Coding';
    menuValue: string = 'Not Started';

    ngOnChanges() {
        console.log("Input", this.inputRefVal.nativeElement.value);
    }

    onCustomButtonClick() {
        this.customButtonClick.emit({category: this.category});
    }

    onClickMe(ele) {
        console.log("Data", ele.value);
    }

    menuSelected() {
        console.log("Selected Val", this.menuValue);
    }



    taskName:string = 'Coding Angular';
    taskId:number = 11;
    isButtonEnabled:boolean = false;
    taskItems = ['task 1', 'task 2'];
    getTaskName() {
        return this.taskName;
    }
    onButtonClick() {
        this.taskName="Working on Event Binding";
    }
    onInputChange(event) {
        this.taskName=event.target.value;
    }
    getColor() {
        return 'violet';
    }
}