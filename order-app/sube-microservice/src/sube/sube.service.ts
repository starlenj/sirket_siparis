import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sube } from './sube.entity';

@Injectable()
export class SubeService extends TypeOrmCrudService<Sube> {
constructor(@InjectRepository(Sube) repo){
  super(repo);
  }
}
