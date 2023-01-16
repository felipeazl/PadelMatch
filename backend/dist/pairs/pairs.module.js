"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairsModule = void 0;
const common_1 = require("@nestjs/common");
const pairs_service_1 = require("./pairs.service");
const pairs_controller_1 = require("./pairs.controller");
const prisma_service_1 = require("../database/prisma.service");
let PairsModule = class PairsModule {
};
PairsModule = __decorate([
    (0, common_1.Module)({
        controllers: [pairs_controller_1.PairsController],
        providers: [pairs_service_1.PairsService, prisma_service_1.PrismaService],
    })
], PairsModule);
exports.PairsModule = PairsModule;
//# sourceMappingURL=pairs.module.js.map