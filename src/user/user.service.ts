import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../db-entities/UserEntity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }
}
