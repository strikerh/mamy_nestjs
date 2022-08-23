import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeeklyFeedsService } from './weekly-feeds.service';
import { CreateWeeklyFeedDto } from './dto/create-weekly-feed.dto';
import { UpdateWeeklyFeedDto } from './dto/update-weekly-feed.dto';

@Controller('api/weekly-feeds')
export class WeeklyFeedsController {
  constructor(private readonly weeklyFeedsService: WeeklyFeedsService) {}

  @Post()
  create(@Body() createWeeklyFeedDto: CreateWeeklyFeedDto) {
    return this.weeklyFeedsService.create(createWeeklyFeedDto);
  }

  @Get()
  findAll() {
    return this.weeklyFeedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weeklyFeedsService.findOne(+id);
  }
  @Get(':id/:weekNo')
  findByWeek(@Param('id') id: number, @Param('weekNo') weekNo: number) {
    return this.weeklyFeedsService.findOneByWeek(id, weekNo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeeklyFeedDto: UpdateWeeklyFeedDto) {
    return this.weeklyFeedsService.update(+id, updateWeeklyFeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weeklyFeedsService.remove(+id);
  }
}
