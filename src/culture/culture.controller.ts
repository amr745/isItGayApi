import { JwtGuard } from './../auth/guards/jwt.guard';
import { CultureService } from './culture.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CultureDocument } from './culture.schema';

@Controller('culture')
export class CultureController {
  constructor(private cultureService: CultureService) {}

  @Post()
  createCulture(
    @Body('name') name: string,
    @Body('description') description?: string,
    @Body('reason') reason?: string,
    @Body('url') url?: string,
    @Body('vote') vote?: number,
  ): Promise<CultureDocument> {
    return this.cultureService.create(name, description, reason, url, vote);
  }

  @Get()
  findAllCultures(): Promise<CultureDocument[]> {
    return this.cultureService.findAll();
  }

  @Get(':id')
  findCulture(@Param('id') id: string): Promise<CultureDocument> {
    return this.cultureService.find(id);
  }

  @Put(':id')
  updateCulture(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('description') description?: string,
    @Body('reason') reason?: string,
    @Body('url') url?: string,
    @Body('vote') vote?: number,
  ): Promise<CultureDocument> {
    return this.cultureService.update(id, name, description, reason, url, vote);
  }

  @Delete(':id')
  deleteCulture(@Param('id') id: string) {
    return this.cultureService.delete(id);
  }
}