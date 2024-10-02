import * as graphql from "@nestjs/graphql";
import { BNhChNResolverBase } from "./base/bNhChN.resolver.base";
import { BNhChN } from "./base/BNhChN";
import { BNhChNService } from "./bNhChN.service";

@graphql.Resolver(() => BNhChN)
export class BNhChNResolver extends BNhChNResolverBase {
  constructor(protected readonly service: BNhChNService) {
    super(service);
  }
}
