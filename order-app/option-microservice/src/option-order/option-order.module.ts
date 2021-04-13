import { Module } from '@nestjs/common';
import { OptionOrderController } from './option-order.controller';
import { OptionOrderService } from './option-order.service';

@Module({
  controllers: [OptionOrderController],
  providers: [OptionOrderService]
})
export class OptionOrderModule {}
