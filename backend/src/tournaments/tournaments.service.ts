import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TournamentDTO } from './tournament.dto';

@Injectable()
export class TournamentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: TournamentDTO) {
    const tournament = await this.prisma.tournament.create({
      data,
    });
    return tournament;
  }

  async findAll() {
    return this.prisma.tournament.findMany();
  }

  async findByID(id: string) {
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

  async delete(id: string) {
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
}
