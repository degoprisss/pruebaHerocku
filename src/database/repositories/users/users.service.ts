import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersCars } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersCars)
        private usersRepository: Repository<UsersCars>,
      ) {}

      async getUser() {
        return await this.usersRepository.find()
      }
}
