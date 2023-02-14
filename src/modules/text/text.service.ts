import { Injectable } from '@nestjs/common';
import { CreateGroupTextDto } from './dto/create-text.dto';
import axios from 'axios';

@Injectable()
export class TextService {
  async create(createGroupTextDto: CreateGroupTextDto) {
    const res = await axios.post(
      'http://localhost:5700/send_group_msg',
      createGroupTextDto,
    );
    return res;
  }

  findAll() {
    return `This action returns all text`;
  }

  findOne(id: number) {
    return `This action returns a #${id} text`;
  }

  remove(id: number) {
    return `This action removes a #${id} text`;
  }
}
