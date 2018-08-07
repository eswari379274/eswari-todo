import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService }  from 'src/app/services/mock-data.service';
import {TaskService} from 'src/app/services/task.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    NgbModule.forRoot(),
     NgDragDropModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(MockDataService, { dataEncapsulation: false })
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
