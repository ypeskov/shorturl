import { Body, Controller, Get, HttpException, Post, Req } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto, UrlCreatedResponse } from './urls.dto';
import { Url } from '../models/url.entity';
import { Request } from 'express';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get()
  addNewUrl() {
    return this.urlsService.findAll();
  }

  generateShortUrl(url: Url, req: Request) {
    return `${req.protocol}://${req.get('Host')}/${url.short_url_hash}`;
  }


  @Post('/')
  async createNewUrl(@Body() createUrl: CreateUrlDto, @Req() req: Request): Promise<UrlCreatedResponse> {
    console.log(req.protocol, req.get('Host'));
    try {
      const newUrl: Url = await this.urlsService.createUrl(createUrl.full_url);
      let response = new UrlCreatedResponse(newUrl.full_url, newUrl.short_url_hash);
      response.short_url = this.generateShortUrl(newUrl, req);
      return response;
    } catch(err: any) {
      // console.log(err);
      throw err;
    } 
  }
} 