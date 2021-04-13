import { Test, TestingModule } from '@nestjs/testing';
import { OptionOrderService } from './option-order.service';

describe('OptionOrderService', () => {
  let service: OptionOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionOrderService],
    }).compile();

    service = module.get<OptionOrderService>(OptionOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
