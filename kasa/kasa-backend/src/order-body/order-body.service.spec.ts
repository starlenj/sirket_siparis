import { Test, TestingModule } from '@nestjs/testing';
import { OrderBodyService } from './order-body.service';

describe('OrderBodyService', () => {
  let service: OrderBodyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBodyService],
    }).compile();

    service = module.get<OrderBodyService>(OrderBodyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
