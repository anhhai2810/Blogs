/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BIViT } from "./BIViT";
import { BIViTCountArgs } from "./BIViTCountArgs";
import { BIViTFindManyArgs } from "./BIViTFindManyArgs";
import { BIViTFindUniqueArgs } from "./BIViTFindUniqueArgs";
import { CreateBIViTArgs } from "./CreateBIViTArgs";
import { UpdateBIViTArgs } from "./UpdateBIViTArgs";
import { DeleteBIViTArgs } from "./DeleteBIViTArgs";
import { PostWithVoteCountDto } from "../../postModule/PostWithVoteCountDto";
import { BIViTService } from "../biViT.service";
@graphql.Resolver(() => BIViT)
export class BIViTResolverBase {
  constructor(protected readonly service: BIViTService) {}

  async _biViTSMeta(
    @graphql.Args() args: BIViTCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BIViT])
  async biViTS(@graphql.Args() args: BIViTFindManyArgs): Promise<BIViT[]> {
    return this.service.biViTS(args);
  }

  @graphql.Query(() => BIViT, { nullable: true })
  async biViT(
    @graphql.Args() args: BIViTFindUniqueArgs
  ): Promise<BIViT | null> {
    const result = await this.service.biViT(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BIViT)
  async createBIViT(@graphql.Args() args: CreateBIViTArgs): Promise<BIViT> {
    return await this.service.createBiViT({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BIViT)
  async updateBIViT(
    @graphql.Args() args: UpdateBIViTArgs
  ): Promise<BIViT | null> {
    try {
      return await this.service.updateBiViT({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BIViT)
  async deleteBIViT(
    @graphql.Args() args: DeleteBIViTArgs
  ): Promise<BIViT | null> {
    try {
      return await this.service.deleteBiViT(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => [PostWithVoteCountDto])
  async GetPostsWithVoteCount(
    @graphql.Args("args")
    args: string
  ): Promise<PostWithVoteCountDto[]> {
    return this.service.GetPostsWithVoteCount(args);
  }
}
