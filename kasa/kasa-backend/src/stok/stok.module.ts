import { Module } from '@nestjs/common';
import { StokService } from './stok.service';
import { StokController } from './stok.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stok } from './entities/stok.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stok])],
  controllers: [StokController],
  providers: [StokService]
})
export class StokModule {}
