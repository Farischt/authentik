import { Module } from "@nestjs/common"

import { PrismaModule } from "../database/prisma.module"
import { UserModule } from "../user/user.module"
import { AuthModule } from "../auth/auth.module"
import { RedisModule } from "../cache/redis.module"
import { ConfigurationModule as ConfigModule } from "../config/config.module"
import { TokenModule } from "../token/token.module"
import { MailModule } from "../mail/mail.module"
import { AppController } from "./app.controller"

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    UserModule,
    PrismaModule,
    AuthModule,
    TokenModule,
    MailModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
