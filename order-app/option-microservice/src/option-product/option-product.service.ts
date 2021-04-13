import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { OptionProduct } from './option-product.entity';

@Injectable()
export class OptionProductService extends TypeOrmCrudService<OptionProduct>{
    constructor(@InjectRepository(OptionProduct) repo){
        super(repo);
    }
}
