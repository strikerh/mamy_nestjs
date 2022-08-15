import { Injectable } from '@nestjs/common';

@Injectable()
export class SelectedArticlesService {
  getArticles(): any {
    return {
      id: '112355',
      name: 'a kldsjl sha dlkjha ksd',
    };
  }
}
