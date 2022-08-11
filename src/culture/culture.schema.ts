import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CultureDocument = Culture & Document;

@Schema()
export class Culture {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
  @Prop()
  reason: string;
  @Prop()
  url: string;
}

export const CultureSchema = SchemaFactory.createForClass(Culture);