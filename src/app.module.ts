import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { UserModule } from './user/user.module';
import { importTypeOrmModule } from './typeorm/importTypeOrmModule';
import { importCacheModule } from './cache/importCacheModule';
import { CaptchaModule } from './captcha/captcha.module';

@Module({
  imports: [
    importConfigModule(),
    importTypeOrmModule(),
    importCacheModule(),
    CaptchaModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
