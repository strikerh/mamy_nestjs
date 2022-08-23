import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WpPost } from '../../db-entities/wp-post.entity';
import { Gstatic } from '../../helpers/Gstatic';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(WpPost)
    private readonly wpPostRepo: Repository<WpPost>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll() {
    console.log('---------------------------------------------------1');
    const posts = await this.wpPostRepo.find({
      take: 5,
      where: { post_type: 'post' },
      relations: { wpPostMeta: true, wpUser: { wpUserMeta: true } },
    });
    console.log('---------------------------------------------------2');
    for (const p of posts) {
      // wpPostMetaObj
      p['postMeta'] = Gstatic.remapArrToObj(p.wpPostMeta);
      delete p.wpPostMeta;

      // Uses Meta
      p['wpUser']['wpUserMetaObj'] = Gstatic.remapArrToObj(p.wpUser.wpUserMeta);
      delete p.wpUser.wpUserMeta;

      // get thumbnail
      const thumbnail_id = Object.entries(p['postMeta']).find((e) => e[0] === '_thumbnail_id');
      if (thumbnail_id && Number(thumbnail_id[1]) !== 0 && !isNaN(Number(thumbnail_id[1]))) {
        const imgUrl = await this.wpPostRepo.findOne({
          select: { guid: true },
          where: { ID: Number(thumbnail_id[1]) },
        });
        p['image'] = imgUrl?.guid;
      }
    }
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
