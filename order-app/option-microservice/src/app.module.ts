import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { utilities, WinstonModule } from 'nest-winston';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { OptionHeaderModule } from './option-header/option-header.module';
import { OptionBodyModule } from './option-body/option-body.module';
import { OptionProductModule } from './option-product/option-product.module';
import { OptionOrderModule } from './option-order/option-order.module';
import  * as winston from "winston";
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "postgres",
		url: process.env.DATABASE_URL,
    autoLoadEntities :true,
    synchronize: true,
    logging: true 
  }),
  WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename : "Options.log",
        format :winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike()
        )
        })
      ]
    }),
  OptionHeaderModule,
  OptionBodyModule,
  OptionProductModule,
  OptionOrderModule
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
