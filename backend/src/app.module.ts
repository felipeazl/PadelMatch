import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PairsModule } from './pairs/pairs.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [UsersModule, PairsModule, TournamentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
