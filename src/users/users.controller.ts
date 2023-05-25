import {Controller, Get, Param, Post, Put, Body, Delete} from '@nestjs/common';
import { userDto } from "./userDto";
import { UsersService } from './users.service';
import {User} from "./interface/user.Interface";

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  findAll(): User[] {

    return this.UsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is specific User information Thiat is a ${id}`;
  }

  @Post()
  create(@Body() userDto: userDto) {
    return this. UsersService.create(userDto);
  }

  @Put(':id')
  update(@Param('id')id: string, @Body() userDto: userDto){
    return `Modifying user info that is ${id}`;
  }

  @Delete(':id')
  remove(@Param('id')id: string): string {
    return `This is deleted that is ${id}`
  }
}
