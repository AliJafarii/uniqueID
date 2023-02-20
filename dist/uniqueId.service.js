"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueIDService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("jalali-moment");
const typeorm_2 = require("typeorm");
const uniqueId_entity_1 = require("./uniqueId.entity");
const uniqueIdCollection_entity_1 = require("./uniqueIdCollection.entity");
let UniqueIDService = class UniqueIDService {
    constructor(uniqueIDRepository, uniqueIDCollectionRepository) {
        this.uniqueIDRepository = uniqueIDRepository;
        this.uniqueIDCollectionRepository = uniqueIDCollectionRepository;
        this.fifthEighthMap = new Map();
    }
    async generateID(query) {
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
        const uniqueID = new uniqueId_entity_1.UniqueID();
        uniqueID.query = query;
        uniqueID.generatedId = generatedID;
        uniqueID.createdAt = new Date();
        await this.uniqueIDRepository.save(uniqueID);
        const uniqueIDCollection = new uniqueIdCollection_entity_1.UniqueIDCollection();
        uniqueIDCollection.firstTwo = firstTwo;
        uniqueIDCollection.fifthEighth = fifthEighth;
        uniqueIDCollection.createdAt = new Date();
        await this.uniqueIDCollectionRepository.save(uniqueIDCollection);
        return generatedID;
    }
    async getLastGeneratedFifthEighth(firstTwo) {
        const lastGenerated = await this.uniqueIDCollectionRepository.findOne({
            where: { firstTwo },
            order: { createdAt: 'DESC' }
        });
        return lastGenerated;
    }
};
UniqueIDService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(uniqueId_entity_1.UniqueID)),
    __param(1, (0, typeorm_1.InjectRepository)(uniqueIdCollection_entity_1.UniqueIDCollection)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UniqueIDService);
exports.UniqueIDService = UniqueIDService;
//# sourceMappingURL=uniqueId.service.js.map