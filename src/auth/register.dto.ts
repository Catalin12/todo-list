import { IsEmail, IsString, MinLength, IsOptional } from "class-validator";

export class RegisterDto {

	@IsEmail()
	public email: string;

	@IsString()
	@MinLength(8)
	public password: string;

	@IsString()
	@IsOptional()
	public name?: string;
}