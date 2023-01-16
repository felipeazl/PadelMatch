"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TournamentsService = class TournamentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const tournament = await this.prisma.tournament.create({
            data,
        });
        return tournament;
    }
    async findAll() {
        return this.prisma.tournament.findMany();
    }
    async findByID(id) {
        const tournamentExists = await this.prisma.tournament.findUnique({
            where: {
                id,
            },
        });
        if (!tournamentExists) {
            throw new Error('tournament does not exists!');
        }
        return tournamentExists;
    }
    async delete(id) {
        const tournamentExists = await this.prisma.tournament.findUnique({
            where: {
                id,
            },
        });
        if (!tournamentExists) {
            throw new Error('tournament does not exists!');
        }
        return await this.prisma.tournament.delete({
            where: {
                id,
            },
        });
    }
};
TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentsService);
exports.TournamentsService = TournamentsService;
//# sourceMappingURL=tournaments.service.js.map