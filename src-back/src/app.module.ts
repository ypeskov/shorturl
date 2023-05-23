import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { UrlsModule } from './urls/urls.module';
import { dataSourceOptions } from './data-source';
import { AppController } from './app.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      // autoLoadEntities: true
    }),
    UrlsModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
