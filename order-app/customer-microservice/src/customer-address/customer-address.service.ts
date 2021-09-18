import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CustomerAddress } from './cutomer-address.entity';

@Injectable()
export class CustomerAddressService extends TypeOrmCrudService<CustomerAddress>{
    constructor(@InjectRepository(CustomerAddress) repo){
        super(repo);
    }
}
