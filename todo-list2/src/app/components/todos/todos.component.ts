import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todos: Todo[] = [
    {
      task: 'Fold Clothes',
      completed: false
    },
    {
      task: 'Put clothes in dresser',
      completed: false
    },
    {
      task: 'Relax',
      completed: false
    },
    {
      task: 'Try to pet cat',
      completed: false
    },
    {
      task: 'Pet Dog',
      completed: false
    },
    {
      task: 'Be Awesome',
      completed: false
    }
  ];
}
