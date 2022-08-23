import { IsDate, IsJSON, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWeeklyFeedDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  week_no: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsJSON()
  feeds: any;

  @IsJSON()
  feeds_log: any;
}
