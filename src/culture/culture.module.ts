import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CultureSchema } from './culture.schema';
import { CultureController } from './culture.controller';
import { CultureService } from './culture.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Culture', schema: CultureSchema }]),
  ],
  controllers: [CultureController],
  providers: [CultureService],
})
export class CultureModule {}