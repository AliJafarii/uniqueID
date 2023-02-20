"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uniqueId_entity_1 = require("./uniqueId.entity");
const uniqueIdCollection_entity_1 = require("./uniqueIdCollection.entity");
const uniqueId_controller_1 = require("./uniqueId.controller");
const uniqueId_service_1 = require("./uniqueId.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                host: 'localhost',
                port: 27018,
                database: 'IM',
                entities: [uniqueId_entity_1.UniqueID, uniqueIdCollection_entity_1.UniqueIDCollection],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([uniqueId_entity_1.UniqueID, uniqueIdCollection_entity_1.UniqueIDCollection]),
        ],
        controllers: [uniqueId_controller_1.UniqueIDController],
        providers: [uniqueId_service_1.UniqueIDService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map