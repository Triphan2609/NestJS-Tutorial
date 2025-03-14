import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

// import * as dotenv from "dotenv";
// dotenv.config(); // Load biến môi trường từ file .env

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("ejs");

  const configService = app.get(ConfigService);
  const port = configService.get<number>("PORT") || 8080;

  await app.listen(port);
}
bootstrap();
