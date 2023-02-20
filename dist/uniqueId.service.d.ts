import { Repository } from 'typeorm';
import { UniqueID } from './uniqueId.entity';
import { UniqueIDCollection } from './uniqueIdCollection.entity';
export declare class UniqueIDService {
    private readonly uniqueIDRepository;
    private readonly uniqueIDCollectionRepository;
    constructor(uniqueIDRepository: Repository<UniqueID>, uniqueIDCollectionRepository: Repository<UniqueIDCollection>);
    private fifthEighthMap;
    generateID(query: string): Promise<string>;
    getLastGeneratedFifthEighth(firstTwo: string): Promise<any>;
}
