import { Injectable } from '@nestjs/common';
import { User } from './interface/user.Interface';

@Injectable()
export class UsersService {
    private readonly user: User[] = [];

    create(user: User){
        this.user.push(user);
    }

    findAll(): User[] {
        return this.user;
    }
}

