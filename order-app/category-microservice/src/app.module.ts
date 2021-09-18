import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { utilities, WinstonModule } from 'nest-winston';
import { CategoryModule } from './category/category.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import  * as winston from "winston";
@Module({
  imports: [CategoryModule ,
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
          filename : "Category.log",
        format :winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike()
        )
        })
      ]
    })
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
