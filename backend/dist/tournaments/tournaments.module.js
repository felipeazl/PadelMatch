"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsModule = void 0;
const common_1 = require("@nestjs/common");
const tournaments_service_1 = require("./tournaments.service");
const tournaments_controller_1 = require("./tournaments.controller");
const prisma_service_1 = require("../database/prisma.service");
let TournamentsModule = class TournamentsModule {
};
TournamentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [tournaments_controller_1.TournamentsController],
        providers: [tournaments_service_1.TournamentsService, prisma_service_1.PrismaService],
    })
], TournamentsModule);
exports.TournamentsModule = TournamentsModule;
//# sourceMappingURL=tournaments.module.js.map