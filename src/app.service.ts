import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getPort(): number {
    return this.configService.get<number>("PORT");
  }
  getHello(): string {
    return "Hello World!";
  }
}

// Cách sử dụng .env trong service
// import { ConfigService } from "@nestjs/config";

// @Injectable()
// export class AppService {
//   constructor(private configService: ConfigService) {}

//   getDatabaseUrl(): string {
//     return this.configService.get<string>("DATABASE_URL"); // Lấy giá trị DATABASE_URL từ .env
//   }
// }
