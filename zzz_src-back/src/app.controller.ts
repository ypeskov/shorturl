import { Controller, Get, HttpException, HttpStatus, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls/urls.service';
import { UrlCreatedResponse, UrlHashRequest } from './urls/urls.dto';
import { EntityNotFoundError } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly urlsService: UrlsService
  ) {}

  @Get(':hash')
  @Redirect('', 301)
  async redirectToFullUrl(@Param() urlHash: UrlHashRequest) {
    try {
      const url = await this.urlsService.findUrlByHash(urlHash.hash);
      return {
        url: url.full_url
      }; 
    } catch(err) {
      if (err instanceof EntityNotFoundError) {
        throw new HttpException('Url Not Found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
} 
