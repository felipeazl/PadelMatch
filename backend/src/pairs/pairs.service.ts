import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PairDTO } from './pair.dto';

@Injectable()
export class PairsService {
  constructor(private prisma: PrismaService) {}

  async create(data: PairDTO) {
    const pair = await this.prisma.pair.create({
      data,
    });
    return pair;
  }

  async findAll() {
    return this.prisma.pair.findMany();
  }
}
