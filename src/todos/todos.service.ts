import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [
    {
      id: 'sjncjndcjs',
      title: 'Todo 1',
      description: 'More about Todo 1',
      date: Date.now(),
      done: false,
    },
    {
      id: 'whye671hqn',
      title: 'Todo 2',
      description: 'More about Todo 2',
      date: Date.now(),
      done: false,
    },
    {
      id: 'wwuywhsts8',
      title: 'Todo 3',
      description: 'More about Todo 3',
      date: Date.now(),
      done: false,
    },
  ];
}
