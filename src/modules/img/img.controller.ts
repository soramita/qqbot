import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImgService } from './img.service';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imgService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imgService.remove(+id);
  }
}
