import { Body, Controller, Post } from '@nestjs/common';
import { group } from './config/includes';
import { TextService } from './modules/text/text.service';
import { IGroupNotify } from './types/notice.type';
import { IGroupMessage } from './types/message.type';
import { ImgService } from './modules/img/img.service';

@Controller()
export class AppController {
  constructor(
    private readonly textService: TextService,
    private readonly imgService: ImgService,
  ) {}
  @Post('/')
  main(@Body() response: any) {
    if (!response.meta_event_type) {
      if (group.includes(response.group_id)) {
        switch (response.post_type) {
          case 'message':
            const message = response as IGroupMessage;
            if (message.message.includes('&#91;色图time&#93;')) {
              this.imgService.create(message);
            }
            if (message.message.includes('色图格式')) {
              this.textService.create({
                message:
                  '[色图time] 作者ID123 标签[xx，xx](作者和标签可以不带)',
                group_id: message.group_id,
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
