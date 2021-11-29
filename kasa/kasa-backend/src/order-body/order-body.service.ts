import { Injectable } from '@nestjs/common';
import { CreateOrderBodyDto } from './dto/create-order-body.dto';
import { UpdateOrderBodyDto } from './dto/update-order-body.dto';

@Injectable()
export class OrderBodyService {
  create(createOrderBodyDto: CreateOrderBodyDto) {
    return 'This action adds a new orderBody';
  }

  findAll() {
    return `This action returns all orderBody`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderBody`;
  }

  update(id: number, updateOrderBodyDto: UpdateOrderBodyDto) {
    return `This action updates a #${id} orderBody`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderBody`;
  }
}
