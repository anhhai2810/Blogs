import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BNhChNService } from "./bNhChN.service";
import { BNhChNControllerBase } from "./base/bNhChN.controller.base";

@swagger.ApiTags("bNhChNs")
@common.Controller("bNhChNs")
export class BNhChNController extends BNhChNControllerBase {
  constructor(protected readonly service: BNhChNService) {
    super(service);
  }
}
