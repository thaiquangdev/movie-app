import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình cors
  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  // Áp dụng interceptor để xử lý response
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Áp dụng interceptor để log request và response
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Áp dụng filter để xử lý lỗi
  app.useGlobalFilters(new HttpExceptionFilter());

  // Áp dụng pipeline để xử lý request
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Chuyển đổi kiểu dữ liệu của request
      whitelist: true, // Loại bỏ các thuộc tính không được khai báo trong DTO
      forbidNonWhitelisted: true, // Từ chối request có thuộc tính không được khai báo trong DTO
    }),
  );

  // Config swagger
  const config = new DocumentBuilder()
    .setTitle('API Movie app')
    .setDescription('API for movie app')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
