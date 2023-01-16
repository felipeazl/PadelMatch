import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { TournamentDTO } from './tournament.dto';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  async create(@Body() data: TournamentDTO) {
    return this.tournamentsService.create(data);
  }

  @Get()
  async findAll() {
    return this.tournamentsService.findAll();
  }

  @Get(':id')
  async findByID(@Param('id') id: string) {
    return this.tournamentsService.findByID(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tournamentsService.delete(id);
  }
}
