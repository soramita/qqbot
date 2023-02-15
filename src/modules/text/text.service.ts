import { Injectable } from '@nestjs/common';
import {
  CreateGroupForwardTextDto,
  CreateGroupTextDto,
} from './dto/create-text.dto';
import axios from 'axios';
import { GetUserInfoEnum, GroupEnum } from '../../types/enum.type';
import * as process from 'process';
import { postGroupTextApi } from '../../common/api/text.api';
import { IGroupMessage } from '../../types/message.type';

@Injectable()
export class TextService {
  async createGroupText(createGroupTextDto: CreateGroupTextDto) {
    const message: CreateGroupTextDto = {
      message:
        '[色图time] 作者ID123 标签[xx，xx] 数量1(作者,标签,数量可以不带)',
      group_id: createGroupTextDto.group_id,
    };
    await postGroupTextApi(GroupEnum.SendGroupMsg, message);
    return 'ok';
  }

  async createGroupForwardText(
    createGroupForwardText: CreateGroupForwardTextDto,
  ) {
    if (createGroupForwardText.message.includes('287720054')) {
      const message: CreateGroupForwardTextDto = {
        group_id: createGroupForwardText.group_id,
        message: '包含特殊账号，给爷爬！',
      };
      await postGroupTextApi(GroupEnum.SendGroupMsg, message);
    } else {
      const spliceText = createGroupForwardText.message
        .replace(/\&#91;|&#93;/g, '')
        .split(' ')[1]
        .split(';');
      const newList = [];
      for (const item of spliceText) {
        const res = await axios.get(
          `${process.env.BASE_URL}${GetUserInfoEnum.GetStrangerInfo}`,
          {
            params: {
              user_id: item.split('：')[0],
            },
          },
        );
        newList.push({
          type: 'node',
          data: {
            name: res.data.data.nickname,
            uin: Number(item.split('：')[0]),
            content: item.split('：')[1],
          },
        });
      }
      await axios.post(
        `http://localhost:5700${GroupEnum.SendGroupForwardMsg}`,
        {
          group_id: createGroupForwardText.group_id,
          messages: newList,
        },
      );
    }
    return 'ok';
  }

  remove(id: number) {
    return `This action removes a #${id} text`;
  }
}
