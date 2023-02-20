import { Controller, Post, Body } from '@nestjs/common';
import { UniqueIDService } from './uniqueId.service';

@Controller('/v1')
export class UniqueIDController {
  constructor(private readonly uniqueIDService: UniqueIDService) {}

  @Post('/generate')
  async generateUniqueID(@Body() data: { query: string }): Promise<string> {
    const generatedID = await this.uniqueIDService.generateID(data.query);
    return generatedID;
  }
}
