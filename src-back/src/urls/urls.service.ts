import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../models/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private urlsRepository: Repository<Url>,
  ) {}

  async createUrl(newFullUrl: string) {
    const numberOfAttempts = 100;
    const hashLength = 5;

    let newUrl = new Url();
    newUrl.full_url = newFullUrl;
    console.log(newUrl);
    
    for(let i=0; i<numberOfAttempts; i++) {
      newUrl.short_url_hash = makeId(hashLength);

      try {
        await this.urlsRepository.save(newUrl);
        return newUrl;
      } catch(err: any) {
        if (err.code === '23505') {
          continue;
        } else {
          throw new InternalServerErrorException();
        }
      }
    }

    throw new InternalServerErrorException();
  }

  async findUrlByHash(hash: string): Promise<Url> {
    try {
      const url = await Url.findOneByOrFail({ short_url_hash: hash });
      return url;
    } catch(err) {
      throw err;
    }
    
  }

  findAll() {
    return this.urlsRepository.find();
  }
}

function makeId(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  const charactersLength = characters.length;

  for(let i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}