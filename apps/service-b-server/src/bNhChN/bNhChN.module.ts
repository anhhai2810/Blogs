import { Module } from "@nestjs/common";
import { BNhChNModuleBase } from "./base/bNhChN.module.base";
import { BNhChNService } from "./bNhChN.service";
import { BNhChNController } from "./bNhChN.controller";
import { BNhChNResolver } from "./bNhChN.resolver";

@Module({
  imports: [BNhChNModuleBase],
  controllers: [BNhChNController],
  providers: [BNhChNService, BNhChNResolver],
  exports: [BNhChNService],
})
export class BNhChNModule {}
