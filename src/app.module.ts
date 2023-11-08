import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SorterService } from './sorter.service';
import { SorterController } from './sorter.controller';

@Module({
  imports: [],
  controllers: [AppController, SorterController],
  providers: [AppService, SorterService],
})
export class AppModule {}
