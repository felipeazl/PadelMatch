import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: UserDTO): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    delete(cpf: string): Promise<import(".prisma/client").User>;
}
