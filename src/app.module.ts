import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorService } from './generator/generator.service';
import { CreatorModule } from './creator/creator.module';

@Module({
  imports: [CreatorModule],
  controllers: [AppController],
  providers: [AppService, GeneratorService],
})
export class AppModule {}
