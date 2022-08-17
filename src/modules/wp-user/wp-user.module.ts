import { Module } from '@nestjs/common';
import { WpUserService } from './wp-user.service';
import { WpUserController } from './wp-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpUser } from '../../type-orm/wp-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WpUser])],
  controllers: [WpUserController],
  providers: [WpUserService],
})
export class WpUserModule {}
