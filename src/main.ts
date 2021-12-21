import { NestFactory } from '@nestjs/core';
const cors = require('cors')
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(3000);
}
bootstrap();
