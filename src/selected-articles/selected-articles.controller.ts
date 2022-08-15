import { Controller, Get } from '@nestjs/common';
import { SelectedArticlesService } from './selected-articles.service';

@Controller('selected-articles')
export class SelectedArticlesController {
  constructor(
    private readonly selectedArticlesService: SelectedArticlesService,
  ) {}

  @Get('')
  get() {
    return this.selectedArticlesService.getArticles();
  }
}
