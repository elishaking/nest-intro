import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getAll() {
    return 'All Todos';
  }
}
