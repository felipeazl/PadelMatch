import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.usersService.create(data);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Delete(':cpf')
  async delete(@Param('cpf') cpf: string) {
    return this.usersService.delete(cpf);
  }
}
