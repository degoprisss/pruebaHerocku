import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasePostgreSqlModule } from './database/database.module';
import { UsersModule } from './database/repositories/users/users.module';
import { UserModule } from './routes/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, UsersModule, DatabasePostgreSqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
