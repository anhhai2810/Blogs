import * as graphql from "@nestjs/graphql";
import { BIViTResolverBase } from "./base/biViT.resolver.base";
import { BIViT } from "./base/BIViT";
import { BIViTService } from "./biViT.service";

@graphql.Resolver(() => BIViT)
export class BIViTResolver extends BIViTResolverBase {
  constructor(protected readonly service: BIViTService) {
    super(service);
  }
}
