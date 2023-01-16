import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: UserDTO): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    delete(cpf: string): Promise<import(".prisma/client").User>;
}
