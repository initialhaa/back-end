import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CobaController } from './controller/coba.controller';
import { CobaService } from './service/coba.service';

@Module({
  imports: [],
  controllers: [AppController, CobaController],
  providers: [AppService, CobaService],
})
export class AppModule {}
