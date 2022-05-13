import { User } from '../entities/user.entity';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto extends User {

  @IsEmail({}, { message: 'Insira um email válido' })
  email: string;
  

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Senha muito fraca' })
  password: string;

  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;
}
