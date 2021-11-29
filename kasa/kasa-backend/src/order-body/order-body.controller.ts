import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderBodyService } from './order-body.service';
import { CreateOrderBodyDto } from './dto/create-order-body.dto';
import { UpdateOrderBodyDto } from './dto/update-order-body.dto';

@Controller('order-body')
export class OrderBodyController {
  constructor(private readonly orderBodyService: OrderBodyService) {}

  @Post()
  create(@Body() createOrderBodyDto: CreateOrderBodyDto) {
    return this.orderBodyService.create(createOrderBodyDto);
  }

  @Get()
  findAll() {
    return this.orderBodyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderBodyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderBodyDto: UpdateOrderBodyDto) {
    return this.orderBodyService.update(+id, updateOrderBodyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderBodyService.remove(+id);
  }
}
