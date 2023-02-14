import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TextService } from './modules/text/text.service';
import { TextModule } from './modules/text/text.module';
import { ImgService } from './modules/img/img.service';
import { ImgModule } from './modules/img/img.module';

@Module({
  imports: [TextModule, ImgModule],
  controllers: [AppController],
  providers: [TextService, ImgService],
})
export class AppModule {}
