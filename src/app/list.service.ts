import { Injectable } from '@angular/core';
import { listClass } from './listClass';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list: listClass[] = [
    {
      id: 1,
      name: 'Task 1',
      description: 'This is the first task',
      status: 'done',
      dueDate: '2021-09-01'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'This is the second task',
      status: 'to do',
      dueDate: '2021-09-02'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'This is the third task',
      status: 'in progress',
      dueDate: '2021-09-03'
    }
  ];
  
}
