import {Controller, Get, Param, Post, Put, Body, Delete} from '@nestjs/common';
import {userDto} from "./userDto";

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'this is all users data';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is specific User information Thiat is a ${id}`;
  }

  @Post(':id')
  create(@Body() userDto: userDto) {
    return 'Creating New user';
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
