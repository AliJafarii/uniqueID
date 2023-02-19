import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'jalali-moment';
import { Repository } from 'typeorm';
import { MyCollection } from './unicode.entity';

@Injectable()
export class MyService {
  constructor(
    @InjectRepository(MyCollection)
    private readonly myRepository: Repository<MyCollection>,
  ) {}
  

  private fifthEighthMap = new Map<string, number>();
  async getGeneratedId(firstTwo: string): Promise<string> {
    let fifthEighth = this.fifthEighthMap.get(firstTwo) || 1000;
    fifthEighth = fifthEighth + 1;
    this.fifthEighthMap.set(firstTwo, fifthEighth);

    const fifthEight = fifthEighth.toString();

    const jalaliDate = moment();
    const year = jalaliDate.jYear().toString().slice(-2);
    const thirdFourth = year;

    const digits = [...thirdFourth, ...fifthEight].map(x => parseInt(x, 10));
    const sum = digits.reduce((a, b) => a + b, 0);
    const ninth = (10 - (sum % 10)) % 10;

    const generatedCode = firstTwo + thirdFourth + fifthEight + ninth.toString();

    return generatedCode
  }


  async createDocument(query: string): Promise<MyCollection> {
    const firstTwo = query.slice(0, 2);
    const generatedId = await this.getGeneratedId(firstTwo);
    console.log(generatedId);
    
    const document = new MyCollection();
    document.query = query;
    document.generatedId = generatedId;

    return await this.myRepository.save(document);
  }


  async getLastGeneratedId(query: string): Promise<string> {
    const lastGeneratedId = await this.myRepository.findOne({ 
      where: { query: query },
      order: { generatedId: 'DESC' } 
    });
    return lastGeneratedId ? lastGeneratedId.generatedId : null;
  }
}