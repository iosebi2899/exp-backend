import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query()
    helloWorld(){
        return this.usersService.helloWorld();
    }
}
