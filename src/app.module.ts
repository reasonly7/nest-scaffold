import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';

@Module({
  imports: [importConfigModule()],
  controllers: [],
  providers: [],
})
export class AppModule {}
