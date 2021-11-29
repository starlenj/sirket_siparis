import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost): void {
    console.log("Exc", exception);
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response =ctx.getResponse();
    const status = exception.getStatus();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message || exception.message || null,
    };

    Logger.error(`${request.method} ${request.url}`, JSON.stringify(responseBody), "ExceptionFilter");

    response.status(status).json(responseBody);

  }
}

