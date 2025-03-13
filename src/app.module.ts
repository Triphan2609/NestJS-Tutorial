import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    // Sử dụng .env cho module
    MongooseModule.forRootAsync({
      imports: [ConfigModule, UsersModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
      }),
    }),

    ConfigModule.forRoot({
      isGlobal: true, // Cho phép sử dụng biến môi trường ở mọi nơi trong app
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
