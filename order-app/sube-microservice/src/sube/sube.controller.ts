import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Sube } from './sube.entity';
import { SubeService } from './sube.service';


@Crud({
  model:{
    type:Sube
  }
})
@Controller('sube')
export class SubeController implements CrudController<Sube>{
constructor(public service:SubeService){}
}
