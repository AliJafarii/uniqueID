import { Repository } from 'typeorm';
import { IdCounter } from './idCounter.entity';
import { MyCollection } from './unicode.entity';
export declare class MyService {
    private readonly myRepository;
    private readonly idCounterRepository;
    constructor(myRepository: Repository<MyCollection>, idCounterRepository: Repository<IdCounter>);
    private fifthEighthMap;
    createDocument(query: string): Promise<MyCollection>;
    private getGeneratedId;
    getLastGeneratedId(query: string): Promise<string>;
}
