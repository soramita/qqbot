import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TextService } from './text.service';
import { CreateGroupTextDto } from './dto/create-text.dto';

@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post('/send_text_message')
  create(@Body() createGroupTextDto: CreateGroupTextDto) {
    return this.textService.createGroupText(createGroupTextDto);
  }
}
