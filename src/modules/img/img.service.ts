import { Injectable } from '@nestjs/common';
import { CreateImgDto } from './dto/create-img.dto';

@Injectable()
export class ImgService {
  create(createImgDto: CreateImgDto) {
    return 'This action adds a new img';
  }

  findAll() {
    return `This action returns all img`;
  }

  findOne(id: number) {
    return `This action returns a #${id} img`;
  }

  remove(id: number) {
    return `This action removes a #${id} img`;
  }
}
