import { PrismaService } from 'src/database/prisma.service';
import { TournamentDTO } from './tournament.dto';
export declare class TournamentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: TournamentDTO): Promise<import(".prisma/client").Tournament>;
    findAll(): Promise<import(".prisma/client").Tournament[]>;
    findByID(id: string): Promise<import(".prisma/client").Tournament>;
    delete(id: string): Promise<import(".prisma/client").Tournament>;
}
