import { Injectable } from '@nestjs/common';
import axios from 'axios';
import getLoliconApi, { LoliconApi } from 'src/utils/loliconApi';
import { CreateLoliconImgDto } from './dto/create-img.dto';

@Injectable()
export class ImgService {
  async create(createLoliconImgDto: CreateLoliconImgDto) {
    // '&#91;色图time&#93; 123 &#91;ll，gg&#93;'
    const newData = createLoliconImgDto.message
      .replace(/\&#91;|&#93;/g, '')
      .split(' ');
    let uid;
    let tag;
    newData.forEach((item) => {
      if (item.includes('作者ID')) {
        uid = item.replace(/\作者ID/g, '');
      }
      if (item.includes('标签')) {
        tag = item.replace(/\标签/g, '').split('，');
      }
    });
    const loliconInfo: LoliconApi = {
      r18: 0,
      num: 1,
      uid,
      tag,
    };

    const res = await getLoliconApi(loliconInfo);
    const { data } = await axios.post(
      `${process.env.BASE_URL}/send_group_msg`,
      {
        group_id: createLoliconImgDto.group_id,
        message:
          res.data.length !== 0
            ? `[CQ:image,file=${res.data[0].urls.original}]`
            : '没有找到相关图片',
      },
    );
    if (data.status == 'failed') {
      await axios.post(`${process.env.BASE_URL}/send_group_msg`, {
        group_id: createLoliconImgDto.group_id,
        message:
          res.data.length !== 0
            ? `该图片已被tx吃掉，请访问${res.data[0].urls.original}`
            : '没有找到相关图片',
      });
    }
    return data;
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
