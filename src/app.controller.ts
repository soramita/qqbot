import { Body, Controller, Post } from '@nestjs/common';
import { group } from './config/includes';
import { TextService } from './modules/text/text.service';
import { MessageType } from '../dist/modules/message/message.type';
import { PostNoticeType } from './types/data.type';
import { IGroupNotify } from './types/notice.type';
import { IGroupMessage } from './types/message.type';

@Controller()
export class AppController {
  constructor(private readonly textService: TextService) {}
  @Post('/')
  main(@Body() response: any) {
    if (!response.meta_event_type) {
      if (group.includes(response.group_id)) {
        switch (response.post_type) {
          case 'message':
            const message = response as IGroupMessage;
            if (message.message === '嘤嘤嘤') {
              this.textService.create({
                group_id: message.group_id,
                message: '咕咕咕',
              });
            }
            return;
          case 'notice':
            const notice = response as IGroupNotify;
            console.log(notice);
            return;
        }
      }
    }

    return {
      msg: 'ok',
      code: 200,
    };
  }
}
