import { Module } from "@nestjs/common";
import { VoteModuleService } from "./votemodule.service";
import { VoteModuleController } from "./votemodule.controller";
import { VoteModuleResolver } from "./votemodule.resolver";

@Module({
  controllers: [VoteModuleController],
  providers: [VoteModuleService, VoteModuleResolver],
  exports: [VoteModuleService],
})
export class VoteModuleModule {}
