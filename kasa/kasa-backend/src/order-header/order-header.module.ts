import { Module } from '@nestjs/common';
import { OrderHeaderService } from './order-header.service';
import { OrderHeaderController } from './order-header.controller';

@Module({
  controllers: [OrderHeaderController],
  providers: [OrderHeaderService]
})
export class OrderHeaderModule {}
