/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BNhChN as PrismaBNhChN } from "@prisma/client";

export class BNhChNServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BNhChNCountArgs, "select">): Promise<number> {
    return this.prisma.bNhChN.count(args);
  }

  async bNhChNS(args: Prisma.BNhChNFindManyArgs): Promise<PrismaBNhChN[]> {
    return this.prisma.bNhChN.findMany(args);
  }
  async bNhChN(
    args: Prisma.BNhChNFindUniqueArgs
  ): Promise<PrismaBNhChN | null> {
    return this.prisma.bNhChN.findUnique(args);
  }
  async createBNhChN(args: Prisma.BNhChNCreateArgs): Promise<PrismaBNhChN> {
    return this.prisma.bNhChN.create(args);
  }
  async updateBNhChN(args: Prisma.BNhChNUpdateArgs): Promise<PrismaBNhChN> {
    return this.prisma.bNhChN.update(args);
  }
  async deleteBNhChN(args: Prisma.BNhChNDeleteArgs): Promise<PrismaBNhChN> {
    return this.prisma.bNhChN.delete(args);
  }
}
