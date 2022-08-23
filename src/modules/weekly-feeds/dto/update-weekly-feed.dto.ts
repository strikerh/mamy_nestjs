import { PartialType } from '@nestjs/mapped-types';
import { CreateWeeklyFeedDto } from './create-weekly-feed.dto';

export class UpdateWeeklyFeedDto extends PartialType(CreateWeeklyFeedDto) {}
