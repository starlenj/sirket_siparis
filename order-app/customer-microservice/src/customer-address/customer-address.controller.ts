import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CustomerAddressService } from './customer-address.service';
import { CustomerAddress } from './cutomer-address.entity';


@Crud({
  model:{
  type:CustomerAddress
  }
})
@Controller('customer-address')
export class CustomerAddressController  implements CrudController<CustomerAddress>{
  constructor(public service :CustomerAddressService){}

}
