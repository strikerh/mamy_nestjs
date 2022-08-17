import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WpUser } from '../../db-entities/wp-user.entity';
import { Repository } from 'typeorm';
import { WpPost } from '../../db-entities/wp-post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(WpPost)
    private readonly wpPostRepo: Repository<WpPost>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    const posts = this.wpPostRepo.find({ relations: { wpPostMeta: true } });
    return posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
