import { UniqueIDService } from './uniqueId.service';
export declare class UniqueIDController {
    private readonly uniqueIDService;
    constructor(uniqueIDService: UniqueIDService);
    generateUniqueID(data: {
        query: string;
    }): Promise<string>;
}
