import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, status: 'Done',   items: [{id: 2, desc: 'task1', started:'jul 9, 2018', completed: 'jul 10, 2018',  comments: 'ifi'}, { id : 1, desc: 'eswari-task2', started:'jul 9, 2018', completed: 'jul 10, 2018', comments: 'ifi'}]
      } ,
       { id: 12, status: 'In Progress',  
       items: [{id: 121, started:'jul 9, 2018', completed: 'jul 10, 2018', desc: 'jsfjh', comments: 'ifi'}, {id: 321, desc: 'eswari-todo2', comments: 'ifi'}] 
        },
        { id: 14, status: 'Pending',   items: [{id: 222, started:'jul 9, 2018', completed: 'jul 10, 2018', desc: 'task3', comments: 'ifi'}, { id : 111, started:'jul 9, 2018', completed: 'jul 10, 2018', desc: 'eswari-task4', comments: 'ifi'}]
      } ,
       { id: 15, status: 'On Hold',  
       items: [{id: 122, started:'jul 9, 2018', completed: 'jul 10, 2018', desc: 'task5', comments: 'ifi'}, {id: 322, started:'jul 9, 2018', completed: 'jul 10, 2018', desc: 'eswari-task6', comments: 'ifi'}] 
        }
    ];
    return {tasks};
  }
}