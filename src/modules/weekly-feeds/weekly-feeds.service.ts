import { Injectable } from '@nestjs/common';
import { CreateWeeklyFeedDto } from './dto/create-weekly-feed.dto';
import { UpdateWeeklyFeedDto } from './dto/update-weekly-feed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeeklyFeed } from '../../db-entities/weekly-feed.entity';

@Injectable()
export class WeeklyFeedsService {
  constructor(
    @InjectRepository(WeeklyFeed)
    private readonly weeklyFeedRepository: Repository<WeeklyFeed>,
  ) {}

  create(createWeeklyFeedDto: CreateWeeklyFeedDto) {
    const weeklyFeed = new WeeklyFeed();
    weeklyFeed.user_id = createWeeklyFeedDto.user_id;
    weeklyFeed.feeds = createWeeklyFeedDto.feeds;
    weeklyFeed.week_no = createWeeklyFeedDto.week_no;
    weeklyFeed.start_date = createWeeklyFeedDto.start_date;

    return this.weeklyFeedRepository.save(weeklyFeed);
  }

  findAll() {
    return `This action returns all weeklyFeeds`;
  }

  findOne(id: number) {
    return this.weeklyFeedRepository.findOneBy({ week_no: 8, user_id: 1 });
  }
  findOneByWeek(userId: number, weekNo: number) {
    return this.weeklyFeedRepository.findOneBy({ week_no: weekNo, user_id: userId });
  }

  update(id: number, updateWeeklyFeedDto: UpdateWeeklyFeedDto) {
    return `This action updates a #${id} weeklyFeed`;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyFeed`;
  }
}
