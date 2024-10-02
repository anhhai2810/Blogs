import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BIViTServiceBase } from "./base/biViT.service.base";

@Injectable()
export class BIViTService extends BIViTServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
