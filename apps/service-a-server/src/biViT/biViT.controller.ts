import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BIViTService } from "./biViT.service";
import { BIViTControllerBase } from "./base/biViT.controller.base";

@swagger.ApiTags("biViTs")
@common.Controller("biViTs")
export class BIViTController extends BIViTControllerBase {
  constructor(protected readonly service: BIViTService) {
    super(service);
  }
}
