import { Test, TestingModule } from '@nestjs/testing';
import { OptionOrderController } from './option-order.controller';

describe('OptionOrderController', () => {
  let controller: OptionOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionOrderController],
    }).compile();

    controller = module.get<OptionOrderController>(OptionOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
