import { Controller, Post, Body, Get } from '@nestjs/common';
import { PairDTO } from './pair.dto';
import { PairsService } from './pairs.service';

@Controller('pairs')
export class PairsController {
  constructor(private readonly pairsService: PairsService) {}

  @Post()
  async create(@Body() data: PairDTO) {
    return this.pairsService.create(data);
  }

  @Get()
  async findAll() {
    return this.pairsService.findAll();
  }
}
