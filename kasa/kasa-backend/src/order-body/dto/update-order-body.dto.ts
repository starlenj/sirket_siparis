import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderBodyDto } from './create-order-body.dto';

export class UpdateOrderBodyDto extends PartialType(CreateOrderBodyDto) {}
