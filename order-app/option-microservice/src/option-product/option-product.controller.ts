import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OptionProduct } from './option-product.entity';
import { OptionProductService } from './option-product.service';


@Crud({
  model:{
  type:OptionProduct
  }
})
@Controller('option-product')
export class OptionProductController  implements CrudController<OptionProduct>{
  constructor(public service :OptionProductService){}

}
