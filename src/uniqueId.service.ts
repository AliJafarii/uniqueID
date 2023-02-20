import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'jalali-moment';
import { Repository } from 'typeorm';
import { UniqueID } from './uniqueId.entity';
import { UniqueIDCollection } from './uniqueIdCollection.entity';

@Injectable()
export class UniqueIDService {
  constructor(
    @InjectRepository(UniqueID) 
    private readonly uniqueIDRepository: Repository<UniqueID>,
    @InjectRepository(UniqueIDCollection) 
    private readonly uniqueIDCollectionRepository: Repository<UniqueIDCollection>,
  ) {}

  private fifthEighthMap = new Map<string, number>();

  async generateID(query: string): Promise<string> {
    const firstTwo = query.slice(0, 2);    
    let fifthEighth = this.fifthEighthMap.get(firstTwo) || 1000;

    const lastGeneratedFifthEighth = await this.getLastGeneratedFifthEighth(firstTwo);

    if (lastGeneratedFifthEighth !== null) {
      fifthEighth = lastGeneratedFifthEighth.fifthEighth;
    }

    fifthEighth = fifthEighth + 1;
    this.fifthEighthMap.set(firstTwo, fifthEighth);

    const fifthEight = fifthEighth.toString();

    const jalaliDate = moment();
    const year = jalaliDate.jYear().toString().slice(-2);
    const thirdFourth = year;

    const digits = [...thirdFourth, ...fifthEight].map((x) => parseInt(x, 10));
    const sum = digits.reduce((a, b) => a + b, 0);
    const ninth = (10 - (sum % 10)) % 10;

    const generatedID = firstTwo + thirdFourth + fifthEight + ninth.toString();

    const uniqueID = new UniqueID();
    uniqueID.query = query;
    uniqueID.generatedId = generatedID;
    uniqueID.createdAt = new Date();
    await this.uniqueIDRepository.save(uniqueID);

    const uniqueIDCollection = new UniqueIDCollection();
    uniqueIDCollection.firstTwo = firstTwo;
    uniqueIDCollection.fifthEighth = fifthEighth;
    uniqueIDCollection.createdAt = new Date();
    await this.uniqueIDCollectionRepository.save(uniqueIDCollection);

    return generatedID;
  }

  async getLastGeneratedFifthEighth(firstTwo: string): Promise<any> {
    const lastGenerated = await this.uniqueIDCollectionRepository.findOne({
      where: { firstTwo },
      order: { createdAt: 'DESC' }
    });
    
    return lastGenerated;
  }
}