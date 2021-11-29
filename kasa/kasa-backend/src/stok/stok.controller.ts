import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { StokService } from './stok.service';
import { CreateStokDto } from './dto/create-stok.dto';
import { UpdateStokDto } from './dto/update-stok.dto';
import { JwtAuthGuard } from 'src/auth/guards/local.auth-guard';

@Controller('stok')
export class StokController {
  constructor(private readonly stokService: StokService) {}

  @Post()
  @UseGuards(new JwtAuthGuard())
  create(@Body() createStokDto: CreateStokDto) {
    return this.stokService.create(createStokDto);
  }

  @Get()
  @UseGuards(new JwtAuthGuard())
  findAll() {
    return this.stokService.findAll();
  }

  @Get(':id')
  @UseGuards(new JwtAuthGuard())
  findOne(@Param('id') id: string) {
    return this.stokService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(new JwtAuthGuard())
  update(@Param('id') id: string, @Body() updateStokDto: UpdateStokDto) {
    return this.stokService.update(+id, updateStokDto);
  }

  @Delete(':id')
  @UseGuards(new JwtAuthGuard())
  remove(@Param('id') id: string) {
    return this.stokService.remove(+id);
  }
}
