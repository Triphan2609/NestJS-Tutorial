import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //   @Get()
  //   getHello(): string {
  //     return this.appService.getHello();
  //   }

  @Get()
  @Render("home")
  root() {
    const message = this.appService.getHello();
    const port = this.appService.getPort();
    return { message, port };
  }
}

import { ConfigService } from "@nestjs/config";

// Cách sử dụng .env trong controller
// @Controller()
// export class AppController {
//   constructor(private readonly configService: ConfigService) {}

//   @Get("config")
//   getConfig() {
//     return {
//       port: this.configService.get<number>("PORT"),
//       dbUrl: this.configService.get<string>("DATABASE_URL"),
//       secretKey: this.configService.get<string>("SECRET_KEY"),
//     };
//   }
// }
