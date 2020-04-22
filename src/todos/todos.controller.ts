import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  @Get()
  getAll() {
    return 'All Todos';
  }

  @Post()
  createTodo(@Body() todoDto: CreateTodoDto) {
    return `Created Todo with title: ${todoDto.title}`;
  }
}
