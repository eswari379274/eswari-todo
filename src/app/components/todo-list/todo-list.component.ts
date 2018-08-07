import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/classes/task';
import { TaskItem } from 'src/app/classes/task-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  tasks: Task[];
  showModal = false;
  selectedTask: Task;
  selectedItem: TaskItem;
  isAdd=false;
  isEdit=false;
  isAddTask=false;

  constructor(public taskService : TaskService) { }

  ngOnInit() {
    this.getTaks();
  }

  trackByFn(index, item) {
    return item.id ;
  }

  getTaks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task,item) {
    this.tasks.forEach((taskItem)=> {
      if(taskItem.id=== task.id ) {
        taskItem.items = taskItem.items.filter((values)=>{
            return (item.id !== values.id);
          });
      }    
    });    
  }

  onCloseAddTask(task) {
    this.showModal =false;     
    this.selectedTask=task;    
      
    if(this.isAddTask) {
      if(task.status) {
          task.id = this.tasks.length + 1;
          task.iems = [];
          this.tasks.push(task);
      }        
    }
  }

  oncloseModal(item) {
    this.showModal =false;     
    this.selectedItem=item;
    
    if(this.isAdd) {
      this.selectedTask.items =  this.selectedTask.items ? this.selectedTask.items: [];
      if(this.selectedItem.desc) {
        this.selectedItem.id = Math.random();
        this.selectedTask.items.push(this.selectedItem);
      }      
    }
   

  }

  addTaskList() {
    this.showModal =true;
    this.selectedTask= new Task();
    this.selectedItem=new TaskItem();
  }

  addTask(task, item) {
    this.showModal =true;
    this.selectedTask=task;
    this.selectedItem=new TaskItem();
  }

  editTask(task, item) {
    this.showModal =true;
    this.selectedTask=task;
    this.selectedItem=item;
  }
  
  onItemDrop(e, task) {
  // Get the dropped data here  
    this.tasks.forEach((taskItem)=> {
      if(taskItem.id=== task.id ) { 
         taskItem.items =  taskItem.items ? taskItem.items: [];     
         taskItem.items.push(e.dragData);      
      }
    }); 
  }

  onItemDrag(e, task, item) {
    this.deleteTask(task, item);
  }
}
