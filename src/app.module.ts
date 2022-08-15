import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectedArticlesModule } from './selected-articles/selected-articles.module';

@Module({
  imports: [SelectedArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
