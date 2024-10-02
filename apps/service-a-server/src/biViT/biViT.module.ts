import { Module } from "@nestjs/common";
import { BIViTModuleBase } from "./base/biViT.module.base";
import { BIViTService } from "./biViT.service";
import { BIViTController } from "./biViT.controller";
import { BIViTResolver } from "./biViT.resolver";

@Module({
  imports: [BIViTModuleBase],
  controllers: [BIViTController],
  providers: [BIViTService, BIViTResolver],
  exports: [BIViTService],
})
export class BIViTModule {}
