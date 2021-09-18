import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OptionHeader } from './option-header.entity';
import { OptionHeaderService } from './option-header.service';


@Crud({
  model:{
  type:OptionHeader
  }
})
@Controller('option-header')
export class OptionHeaderController  implements CrudController<OptionHeader>{
  constructor(public service :OptionHeaderService){}

}
