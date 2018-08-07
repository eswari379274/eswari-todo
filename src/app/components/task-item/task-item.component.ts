import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {TaskItem} from 'src/app/classes/task-item';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() task : Task;
  @Input() item : TaskItem;
  @Input() show = false;
  @Input() isAddTask = false;
  @Output() onCloseAdd = new EventEmitter<Task>();
  @Output() onclose = new EventEmitter<TaskItem>();
  isValid= false;

  constructor() { }   

  ngOnInit() {

  }
  
  onSubmit() { 
	 this.show=false;
	 if(this.isAddTask)   {
	 	this.onCloseAdd.emit(this.task);
	 } else {
	 	this.onclose.emit(this.item);
	 }	 
  }
  
  closeModal() {
  	this.show=false;
  	this.onclose.emit(this.item);
  }

  enableSubmit(value) {
  	if(value) {
  		this.isValid=true;
  	}
  }

}
