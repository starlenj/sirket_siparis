import { Module } from '@nestjs/common';
import { OrderBodyService } from './order-body.service';
import { OrderBodyController } from './order-body.controller';

@Module({
  controllers: [OrderBodyController],
  providers: [OrderBodyService]
})
export class OrderBodyModule {}
