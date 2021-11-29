import { Test, TestingModule } from '@nestjs/testing';
import { OrderHeaderService } from './order-header.service';

describe('OrderHeaderService', () => {
  let service: OrderHeaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderHeaderService],
    }).compile();

    service = module.get<OrderHeaderService>(OrderHeaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
