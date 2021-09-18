import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer-address.service';
import { CustomerAddressController } from './customer-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddress } from './cutomer-address.entity';

@Module({
  imports :[TypeOrmModule.forFeature([CustomerAddress])],
  providers: [CustomerAddressService],
  controllers: [CustomerAddressController]
})
export class CustomerAddressModule {}
