import { Module } from '@nestjs/common';
import { PairsService } from './pairs.service';
import { PairsController } from './pairs.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [PairsController],
  providers: [PairsService, PrismaService],
})
export class PairsModule {}
