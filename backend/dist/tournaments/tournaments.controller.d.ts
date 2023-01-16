import { TournamentDTO } from './tournament.dto';
import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    create(data: TournamentDTO): Promise<import(".prisma/client").Tournament>;
    findAll(): Promise<import(".prisma/client").Tournament[]>;
    findByID(id: string): Promise<import(".prisma/client").Tournament>;
    delete(id: string): Promise<import(".prisma/client").Tournament>;
}
