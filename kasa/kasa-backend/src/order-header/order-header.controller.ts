import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderHeaderService } from './order-header.service';
import { CreateOrderHeaderDto } from './dto/create-order-header.dto';
import { UpdateOrderHeaderDto } from './dto/update-order-header.dto';

@Controller('order-header')
export class OrderHeaderController {
  constructor(private readonly orderHeaderService: OrderHeaderService) {}

  @Post()
  create(@Body() createOrderHeaderDto: CreateOrderHeaderDto) {
    return this.orderHeaderService.create(createOrderHeaderDto);
  }

  @Get()
  findAll() {
    return this.orderHeaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderHeaderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderHeaderDto: UpdateOrderHeaderDto) {
    return this.orderHeaderService.update(+id, updateOrderHeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderHeaderService.remove(+id);
  }
}
