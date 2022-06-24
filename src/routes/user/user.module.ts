import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersModule } from 'src/database/repositories/users/users.module';
import { UsersService } from 'src/database/repositories/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersCars } from 'src/database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([
    UsersCars
  ])],
  providers: [UserService, UsersService],
  controllers: [UserController]
})
export class UserModule {}
