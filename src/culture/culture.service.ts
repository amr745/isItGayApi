import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CultureDocument } from './culture.schema';

@Injectable()
export class CultureService {
  constructor(
    @InjectModel('Culture')
    private readonly cultureModel: Model<CultureDocument>,
  ) {}

  async create(
    name: string,
    description: string,
    reason: string,
    url: string,
    vote: number
  ): Promise<CultureDocument> {
    const newCulture = new this.cultureModel({ name, description, reason, url, vote });
    return newCulture.save();
  }

  async findAll(): Promise<CultureDocument[]> {
    return this.cultureModel.find().exec();
  }

  async find(id: string): Promise<CultureDocument> {
    return this.cultureModel.findById(id).exec();
  }

  async update(
    id: string,
    newName: string,
    newDescription: string,
    newReason: string,
    newUrl: string,
    newVote: number,
  ): Promise<CultureDocument> {
    let existingCulture = await this.find(id);

    existingCulture.name = newName ?? existingCulture.name;
    existingCulture.description = newDescription ?? existingCulture.description;
    existingCulture.reason = newReason ?? existingCulture.reason;
    existingCulture.url = newUrl ?? existingCulture.url;
    existingCulture.vote = newVote ?? existingCulture.vote;

    return existingCulture.save();
  }

  async delete(id: string) {
    return this.cultureModel.deleteOne({ _id: id }).exec();
  }
}