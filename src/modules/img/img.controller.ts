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
import { CreateImgDto } from './dto/create-img.dto';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}

  @Post()
  create(@Body() createImgDto: CreateImgDto) {
    return this.imgService.create(createImgDto);
  }

  @Get()
  findAll() {
    return this.imgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imgService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imgService.remove(+id);
  }
}
