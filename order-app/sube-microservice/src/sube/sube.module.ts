import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubeController } from './sube.controller';
import { Sube } from './sube.entity';
import { SubeService } from './sube.service';

@Module({
  imports:[TypeOrmModule.forFeature([Sube])],
  controllers: [SubeController],
  providers: [SubeService]
})
export class SubeModule {}
