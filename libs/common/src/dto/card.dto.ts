import {
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

export class CardDto {
  @IsNotEmpty()
  @IsCreditCard()
  number: string;

  @IsNotEmpty()
  @IsString()
  cvc: string;

  @IsNotEmpty()
  @IsNumber()
  exp_month: number;

  @IsNotEmpty()
  @IsNumber()
  exp_year: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  networks?: {
    preferred?: 'visa' | 'mastercard' | 'cartes_bancaires';
  };
}
