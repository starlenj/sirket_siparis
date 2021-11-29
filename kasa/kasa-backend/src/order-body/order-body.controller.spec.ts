import { Test, TestingModule } from '@nestjs/testing';
import { OrderBodyController } from './order-body.controller';
import { OrderBodyService } from './order-body.service';

describe('OrderBodyController', () => {
  let controller: OrderBodyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderBodyController],
      providers: [OrderBodyService],
    }).compile();

    controller = module.get<OrderBodyController>(OrderBodyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
