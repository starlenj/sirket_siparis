import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { OptionHeader } from './option-header.entity';

@Injectable()
export class OptionHeaderService extends TypeOrmCrudService<OptionHeader>{
    constructor(@InjectRepository(OptionHeader) repo){
        super(repo);
    }
}
