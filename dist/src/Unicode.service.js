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
exports.MyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("jalali-moment");
const typeorm_2 = require("typeorm");
const unicode_entity_1 = require("./unicode.entity");
let MyService = class MyService {
    constructor(myRepository) {
        this.myRepository = myRepository;
        this.fifthEighthMap = new Map();
    }
    async getGeneratedId(firstTwo) {
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
        return generatedCode;
    }
    async createDocument(query) {
        const firstTwo = query.slice(0, 2);
        const generatedId = await this.getGeneratedId(firstTwo);
        console.log(generatedId);
        const document = new unicode_entity_1.MyCollection();
        document.query = query;
        document.generatedId = generatedId;
        return await this.myRepository.save(document);
    }
    async getLastGeneratedId(query) {
        const lastGeneratedId = await this.myRepository.findOne({
            where: { query: query },
            order: { generatedId: 'DESC' }
        });
        return lastGeneratedId ? lastGeneratedId.generatedId : null;
    }
};
MyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unicode_entity_1.MyCollection)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=Unicode.service.js.map