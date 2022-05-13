import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Res() res, @Body() createUserDto: CreateUserDto) {
    if(createUserDto.email !== undefined) {
      return res.status(HttpStatus.CONFLICT).json({"message": "Email já cadastrado"});
    } else {
    return res.status(HttpStatus.OK).json(this.usersService.create(createUserDto), {"message": "Usurário criado"});
    }
  }

  @Get()
  findAll(@Res() res ) {
    return res.status(HttpStatus.OK).json(this.usersService.findAll());
  }

  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return res.status(HttpStatus.OK).json(this.usersService.findOne(+id));
  }

  @Patch(':id')
  update(@Res() res, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return res.status(HttpStatus.OK).json(this.usersService.update(+id, updateUserDto), {"message": "Usuário atualizado"});
  }

  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return res.status(HttpStatus.OK).json(this.usersService.remove(+id), {"message": "Usuário removido"});
  }
}
