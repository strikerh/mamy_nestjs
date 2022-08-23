import { Module } from '@nestjs/common';
import { WeeklyFeedsService } from './weekly-feeds.service';
import { WeeklyFeedsController } from './weekly-feeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeeklyFeed } from '../../db-entities/weekly-feed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeeklyFeed])],
  controllers: [WeeklyFeedsController],
  providers: [WeeklyFeedsService],
})
export class WeeklyFeedsModule {}
