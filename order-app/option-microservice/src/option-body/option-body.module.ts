import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionBodyController } from './option-body.controller';
import { OptionBody } from './option-body.entity';
import { OptionBodyService } from './option-body.service';

@Module({
  imports :[TypeOrmModule.forFeature([OptionBody])],
  controllers: [OptionBodyController],
  providers: [OptionBodyService]
})
export class OptionBodyModule {}
