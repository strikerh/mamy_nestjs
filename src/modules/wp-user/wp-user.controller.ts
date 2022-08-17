import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WpUserService } from './wp-user.service';
import { CreateWpUserDto } from './dto/create-wp-user.dto';
import { UpdateWpUserDto } from './dto/update-wp-user.dto';

@Controller('api/wp-user')
export class WpUserController {
  constructor(private readonly wpUserService: WpUserService) {}

  @Post()
  create(@Body() createWpUserDto: CreateWpUserDto) {
    return this.wpUserService.create(createWpUserDto);
  }

  @Get()
  async findAll() {
    return await this.wpUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wpUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWpUserDto: UpdateWpUserDto) {
    return this.wpUserService.update(+id, updateWpUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wpUserService.remove(+id);
  }
}
