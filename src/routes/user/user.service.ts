import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/database/repositories/users/users.service';

@Injectable()
export class UserService {

    constructor(private usersService: UsersService) { }

    async getAllUser() {
        return this.usersService.getUser()
    }
}
