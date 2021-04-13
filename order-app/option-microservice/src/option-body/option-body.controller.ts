import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OptionBody } from './option-body.entity';
import { OptionBodyService } from './option-body.service';


@Crud({
  model:{
  type:OptionBody
  }
})
@Controller('option-body')
export class OptionBodyController  implements CrudController<OptionBody>{
  constructor(public service :OptionBodyService){}

}
