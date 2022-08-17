import { PartialType } from '@nestjs/mapped-types';
import { CreateWpUserDto } from './create-wp-user.dto';

export class UpdateWpUserDto extends PartialType(CreateWpUserDto) {}
