import { Module } from '@nestjs/common';
import { SelectedArticlesController } from './selected-articles.controller';
import { SelectedArticlesService } from './selected-articles.service';

@Module({
  controllers: [SelectedArticlesController],
  providers: [SelectedArticlesService],
})
export class SelectedArticlesModule {}
