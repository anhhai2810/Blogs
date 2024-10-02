import { Module } from "@nestjs/common";
import { PostModuleService } from "./postmodule.service";
import { PostModuleController } from "./postmodule.controller";
import { PostModuleResolver } from "./postmodule.resolver";

@Module({
  controllers: [PostModuleController],
  providers: [PostModuleService, PostModuleResolver],
  exports: [PostModuleService],
})
export class PostModuleModule {}
