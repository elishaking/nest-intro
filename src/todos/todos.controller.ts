import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  getAll() {
    return 'All Todos';
  }
}
