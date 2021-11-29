import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStokDto } from './dto/create-stok.dto';
import { UpdateStokDto } from './dto/update-stok.dto';
import { Stok } from './entities/stok.entity';

@Injectable()
export class StokService {

  constructor(@InjectRepository(Stok) private stokRepository: Repository<Stok>) { }
  async create(createStokDto: CreateStokDto) {
    const newStok = this.stokRepository.create(createStokDto);
    return this.stokRepository.save(newStok);
  }

  async findAll() {
    return this.stokRepository.find();
  }

  async findOne(id: number) {
    return this.stokRepository.findOne(id);
  }

  async update(id: number, updateStokDto: UpdateStokDto) {
    const stok = await this.findOne(id);

    stok.name = updateStokDto.name;
    stok.order = updateStokDto.order;
    stok.stok_type = updateStokDto.stok_type;
    stok.stok_group = updateStokDto.stok_group;
    return this.stokRepository.save(stok);
  }

  async remove(id: number) {
    const stok = await this.stokRepository.findOne(id);
    return this.stokRepository.delete(stok);
  }
}
