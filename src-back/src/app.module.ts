import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { UrlsModule } from './urls/urls.module';
import { dataSourceOptions } from './data-source';
import { AppController } from './app.controller';
import { UrlsService } from './urls/urls.service';
import { Url } from './models/url.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      // autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([Url]),
    UrlsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UrlsService,
  ], 
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
