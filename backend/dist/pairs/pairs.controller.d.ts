import { PairDTO } from './pair.dto';
import { PairsService } from './pairs.service';
export declare class PairsController {
    private readonly pairsService;
    constructor(pairsService: PairsService);
    create(data: PairDTO): Promise<import(".prisma/client").Pair>;
    findAll(): Promise<import(".prisma/client").Pair[]>;
}
