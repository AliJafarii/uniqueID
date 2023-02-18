import { Controller, Get, Query } from '@nestjs/common';
import { MyService } from './Unicode.service';

@Controller('/v1')
export class MyController {
  constructor(private readonly myService: MyService) {}

  @Get('')
  async createDocument(@Query('query') query: string): Promise<string> {
    const document = await this.myService.createDocument(query);
    return document.generatedId;
  }

  @Get('lastGeneratedId')
  async getLastGeneratedId(@Query('query') query: string): Promise<string> {
    const lastGeneratedId = await this.myService.getLastGeneratedId(query);
    return lastGeneratedId;
  }
}
