import { PrismaService } from 'src/database/prisma.service';
import { PairDTO } from './pair.dto';
export declare class PairsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: PairDTO): Promise<import(".prisma/client").Pair>;
    findAll(): Promise<import(".prisma/client").Pair[]>;
}
