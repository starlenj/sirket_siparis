import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionProductController } from './option-product.controller';
import { OptionProduct } from './option-product.entity';
import { OptionProductService } from './option-product.service';

@Module({
  imports:[TypeOrmModule.forFeature([OptionProduct])],
  controllers: [OptionProductController],
  providers: [OptionProductService]
})
export class OptionProductModule {}
