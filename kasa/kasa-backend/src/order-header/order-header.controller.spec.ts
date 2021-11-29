import { Test, TestingModule } from '@nestjs/testing';
import { OrderHeaderController } from './order-header.controller';
import { OrderHeaderService } from './order-header.service';

describe('OrderHeaderController', () => {
  let controller: OrderHeaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderHeaderController],
      providers: [OrderHeaderService],
    }).compile();

    controller = module.get<OrderHeaderController>(OrderHeaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
