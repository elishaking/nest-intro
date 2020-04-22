import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  @Get()
  getAll() {
    return 'All Todos';
  }

  @Get(':id')
  getOne(@Param() param: { id: string }) {
    return `Todo ${param.id}`;
  }

  @Post()
  createTodo(@Body() todoDto: CreateTodoDto) {
    return `Created Todo with title: ${todoDto.title}`;
  }
}
