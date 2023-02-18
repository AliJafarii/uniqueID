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
exports.MyController = void 0;
const common_1 = require("@nestjs/common");
const Unicode_service_1 = require("./Unicode.service");
let MyController = class MyController {
    constructor(myService) {
        this.myService = myService;
    }
    async createDocument(query) {
        const document = await this.myService.createDocument(query);
        return document.generatedId;
    }
    async getLastGeneratedId(query) {
        const lastGeneratedId = await this.myService.getLastGeneratedId(query);
        return lastGeneratedId;
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "createDocument", null);
__decorate([
    (0, common_1.Get)('lastGeneratedId'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "getLastGeneratedId", null);
MyController = __decorate([
    (0, common_1.Controller)('/v1'),
    __metadata("design:paramtypes", [Unicode_service_1.MyService])
], MyController);
exports.MyController = MyController;
//# sourceMappingURL=Unicode.controller.js.map