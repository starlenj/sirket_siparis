import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StokModule } from './stok/stok.module';
import { OrderHeaderModule } from './order-header/order-header.module';
import { OrderBodyModule } from './order-body/order-body.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HttpErrorFilter } from './utils/http-exception.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './utils/logging.interceptor';
import { TransformInterceptor } from './utils/transform.interceptors';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "emre0209",
      database: "yonetim_db",
      synchronize: true,
      autoLoadEntities: true
    }),
    StokModule,
    OrderHeaderModule,
    OrderBodyModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide : APP_FILTER,
    useClass : HttpErrorFilter 
  },
  {
    provide : APP_INTERCEPTOR,
    useClass : LoggingInterceptor
  },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    }
  ],
})
export class AppModule { }
