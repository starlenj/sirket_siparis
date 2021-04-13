import { Module } from '@nestjs/common';
import { OptionHeaderService } from './option-header.service';
import { OptionHeaderController } from './option-header.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionHeader } from './option-header.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OptionHeader])],
  providers: [OptionHeaderService],
  controllers: [OptionHeaderController]
})
export class OptionHeaderModule {}
