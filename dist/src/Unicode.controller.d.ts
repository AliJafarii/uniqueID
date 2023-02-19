import { MyService } from './Unicode.service';
export declare class MyController {
    private readonly myService;
    constructor(myService: MyService);
    createDocument(query: string): Promise<string>;
    getLastGeneratedId(query: string): Promise<string>;
}
