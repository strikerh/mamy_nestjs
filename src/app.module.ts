import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectedArticlesModule } from './selected-articles/selected-articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WpUserModule } from './modules/wp-user/wp-user.module';
import { PostsModule } from './modules/posts/posts.module';
import { WeeklyFeedsModule } from './modules/weekly-feeds/weekly-feeds.module';
import entities from './db-entities';

@Module({
  imports: [
    SelectedArticlesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mamydays_momydays',
      password: '^XMO4BcR]eye',
      database: 'mamydays_momydays',
      entities: entities,
      synchronize: false,
    }),
    UserModule,
    WpUserModule,
    PostsModule,
    WeeklyFeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
