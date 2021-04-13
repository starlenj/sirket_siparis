import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';


@Crud({
  model:{
  type:Customer
  }
})
@Controller('customer')
export class CustomerController  implements CrudController<Customer>{
  constructor(public service :CustomerService){}

}
