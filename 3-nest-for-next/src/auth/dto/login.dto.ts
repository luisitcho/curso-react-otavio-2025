import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsEmail({}, { message: 'O email deve ser válido' })
    email!: string;

    @IsString({ message: 'A senha deve ser uma string' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password!: string;
}