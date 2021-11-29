import { Injectable } from '@nestjs/common';
import { CreateOrderHeaderDto } from './dto/create-order-header.dto';
import { UpdateOrderHeaderDto } from './dto/update-order-header.dto';

@Injectable()
export class OrderHeaderService {
  create(createOrderHeaderDto: CreateOrderHeaderDto) {
    return 'This action adds a new orderHeader';
  }

  findAll() {
    return `This action returns all orderHeader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderHeader`;
  }

  update(id: number, updateOrderHeaderDto: UpdateOrderHeaderDto) {
    return `This action updates a #${id} orderHeader`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderHeader`;
  }
}
