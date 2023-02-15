import { Injectable } from '@nestjs/common';
import axios from 'axios';
import getLoliconApi, { LoliconApi } from 'src/utils/loliconApi';
import { CreateLoliconImgDto } from './dto/create-img.dto';
import { GroupEnum } from '../../types/enum.type';

@Injectable()
export class ImgService {
  async createGroupForwardImg(createLoliconImgDto: CreateLoliconImgDto) {
    const res = await getLoliconApi(createLoliconImgDto);
    if (res.data.length != 0) {
      const nodeList = res.data.map((item) => {
        return {
          type: 'node',
          data: {
            name: '咕咕咕',
            uin: '1037768230',
            content: `[CQ:image,file=${item.urls.original}]`,
          },
        };
      });
      const { data } = await axios.post(
        `${process.env.BASE_URL}${GroupEnum.SendGroupForwardMsg}`,
        {
          group_id: createLoliconImgDto.group_id,
          messages: nodeList,
        },
      );
      if (data.status == 'failed') {
        const nodeList = res.data.map((item) => {
          return {
            type: 'node',
            data: {
              name: '咕咕咕',
              uin: '1037768230',
              content: item.urls.original,
            },
          };
        });
        await axios.post(
          `${process.env.BASE_URL}${GroupEnum.SendGroupForwardMsg}`,
          {
            group_id: createLoliconImgDto.group_id,
            messages: nodeList,
          },
        );
      }
    } else {
      await axios.post(`${process.env.BASE_URL}${GroupEnum.SendGroupMsg}`, {
        group_id: createLoliconImgDto.group_id,
        message: '没有找到相关图片',
      });
    }
    return 'ok';
  }

  async createGroupImg(createLoliconImgDto: CreateLoliconImgDto) {
    const res = await getLoliconApi(createLoliconImgDto);
    const { data } = await axios.post(
      `${process.env.BASE_URL}${GroupEnum.SendGroupMsg}`,
      {
        group_id: createLoliconImgDto.group_id,
        message:
          res.data.length !== 0
            ? `[CQ:image,file=${res.data[0].urls.original}]`
            : '没有找到相关图片',
      },
    );
    if (data.status == 'failed') {
      await axios.post(`${process.env.BASE_URL}${GroupEnum.SendGroupMsg}`, {
        group_id: createLoliconImgDto.group_id,
        message:
          res.data.length !== 0
            ? `该图片已被tx吃掉，请访问${res.data[0].urls.original}`
            : '没有找到相关图片',
      });
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} img`;
  }

  remove(id: number) {
    return `This action removes a #${id} img`;
  }
}
