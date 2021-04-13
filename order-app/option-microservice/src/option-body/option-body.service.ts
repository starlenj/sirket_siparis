import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { OptionBody } from './option-body.entity';

@Injectable()
export class OptionBodyService extends TypeOrmCrudService<OptionBody>{
    constructor(@InjectRepository(OptionBody) repo){
        super(repo);
    }
}
