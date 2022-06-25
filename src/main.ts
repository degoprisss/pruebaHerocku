import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT
  console.log(port)
  await app.listen(port || 4000);
}
bootstrap();
