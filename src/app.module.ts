import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TextController } from './modules/text/text.controller';
import { TextService } from './modules/text/text.service';
import { TextModule } from './modules/text/text.module';
import { ImgService } from './modules/img/img.service';
import { ImgModule } from './modules/img/img.module';

@Module({
  controllers: [AppController],
  providers: [TextService, ImgService],
  imports: [TextModule, ImgModule],
})
export class AppModule {}
