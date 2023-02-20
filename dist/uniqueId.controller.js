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
exports.UniqueIDController = void 0;
const common_1 = require("@nestjs/common");
const uniqueId_service_1 = require("./uniqueId.service");
let UniqueIDController = class UniqueIDController {
    constructor(uniqueIDService) {
        this.uniqueIDService = uniqueIDService;
    }
    async generateUniqueID(data) {
        const generatedID = await this.uniqueIDService.generateID(data.query);
        return generatedID;
    }
};
__decorate([
    (0, common_1.Post)('/generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UniqueIDController.prototype, "generateUniqueID", null);
UniqueIDController = __decorate([
    (0, common_1.Controller)('/v1'),
    __metadata("design:paramtypes", [uniqueId_service_1.UniqueIDService])
], UniqueIDController);
exports.UniqueIDController = UniqueIDController;
//# sourceMappingURL=uniqueId.controller.js.map