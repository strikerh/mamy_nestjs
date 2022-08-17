import { Injectable } from '@nestjs/common';
import { CreateWpUserDto } from './dto/create-wp-user.dto';
import { UpdateWpUserDto } from './dto/update-wp-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WpUser } from '../../type-orm/wp-user.entity';

@Injectable()
export class WpUserService {
  constructor(
    @InjectRepository(WpUser)
    private readonly wpUserRepo: Repository<WpUser>,
  ) {}

  create(createWpUserDto: CreateWpUserDto) {
    return 'This action adds a new wpUser';
  }

  async findAll(): Promise<WpUser[]> {
    const wpUsers = await this.wpUserRepo.find({
      relations: {
        wpUserMeta: true,
      },
    });
    return wpUsers;
  }

  findOne(id: number) {
    return `This action returns a1 #${id} wpUser`;
  }

  update(id: number, updateWpUserDto: UpdateWpUserDto) {
    return `This action updates a #${id} wpUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} wpUser`;
  }
}
