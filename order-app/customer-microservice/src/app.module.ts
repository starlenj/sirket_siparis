import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { utilities, WinstonModule } from 'nest-winston';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer-address/customer-address.module';
import  * as winston from "winston";
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "mysql",
    host : 'localhost',
    port : 3306,
    username :'nasuh',
    password :'emre0209',
    database : 'customer-database',
    autoLoadEntities :true,
    synchronize:true
  }),
  WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename : "Customer.log",
        format :winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike()
        )
        })
      ]
    }),
  CustomerModule,
  CustomerAddressModule
  ],
  controllers: [],
  providers: [{
    provide : APP_INTERCEPTOR,
    useClass : LoggingInterceptor
  },{
  provide : APP_INTERCEPTOR,
  useClass : TransformInterceptor
    },Logger],
})
export class AppModule {}
