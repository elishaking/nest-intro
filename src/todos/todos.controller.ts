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
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.getAll();
  }

  @Get(':id')
  getOne(@Param() param: { id: string }): Todo {
    return this.todosService.getOne(param.id);
  }

  @Post()
  createTodo(@Body() todoDto: CreateTodoDto) {
    return `Created Todo with title: ${todoDto.title}`;
  }

  @Delete(':id')
  delete(@Param() param: { id: string }) {
    return `Deleted Todo ${param.id}`;
  }

  @Put(':id')
  update(@Body() todoDto: CreateTodoDto, @Param() param: { id: string }) {
    return `Updated Todo ${param.id} with title: ${todoDto.title}`;
  }
}
