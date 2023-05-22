import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../models/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private urlsRepository: Repository<Url>,
  ) {}
  
  findAll() {
    return this.urlsRepository.find();
  }
}
