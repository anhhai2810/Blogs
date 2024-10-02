import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BNhChNServiceBase } from "./base/bNhChN.service.base";

@Injectable()
export class BNhChNService extends BNhChNServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
