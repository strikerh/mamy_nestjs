import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpPost } from '../../db-entities/wp-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WpPost])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
