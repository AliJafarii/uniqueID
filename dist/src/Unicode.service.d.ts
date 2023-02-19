import { Repository } from 'typeorm';
import { MyCollection } from './unicode.entity';
export declare class MyService {
    private readonly myRepository;
    constructor(myRepository: Repository<MyCollection>);
    private fifthEighthMap;
    getGeneratedId(firstTwo: string): Promise<string>;
    createDocument(query: string): Promise<MyCollection>;
    getLastGeneratedId(query: string): Promise<string>;
}
