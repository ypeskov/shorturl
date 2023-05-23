import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto, UrlCreatedResponse } from './urls.dto';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get()
  addNewUrl() {
    return this.urlsService.findAll();
  }

  @Post('/')
  async createNewUrl(@Body() createUrl: CreateUrlDto): Promise<UrlCreatedResponse> {
    const newUrl = await this.urlsService.createUrl(createUrl.full_url);

    return new UrlCreatedResponse(newUrl.full_url, newUrl.short_url_hash);
  }
} 