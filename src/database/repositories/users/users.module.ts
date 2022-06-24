import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersCars } from 'src/database/entities';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    UsersCars
  ])],
  providers: [UsersService]
})
export class UsersModule {}
