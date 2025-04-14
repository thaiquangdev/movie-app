import { IsString } from 'class-validator';

export class UpdateCountryDto {
  @IsString()
  countryName: string;
}
