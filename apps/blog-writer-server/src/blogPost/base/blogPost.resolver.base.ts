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
import { BlogPost } from "./BlogPost";
import { BlogPostCountArgs } from "./BlogPostCountArgs";
import { BlogPostFindManyArgs } from "./BlogPostFindManyArgs";
import { BlogPostFindUniqueArgs } from "./BlogPostFindUniqueArgs";
import { DeleteBlogPostArgs } from "./DeleteBlogPostArgs";
import { BlogPostService } from "../blogPost.service";
@graphql.Resolver(() => BlogPost)
export class BlogPostResolverBase {
  constructor(protected readonly service: BlogPostService) {}

  async _blogPostsMeta(
    @graphql.Args() args: BlogPostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogPost])
  async blogPosts(
    @graphql.Args() args: BlogPostFindManyArgs
  ): Promise<BlogPost[]> {
    return this.service.blogPosts(args);
  }

  @graphql.Query(() => BlogPost, { nullable: true })
  async blogPost(
    @graphql.Args() args: BlogPostFindUniqueArgs
  ): Promise<BlogPost | null> {
    const result = await this.service.blogPost(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogPost)
  async deleteBlogPost(
    @graphql.Args() args: DeleteBlogPostArgs
  ): Promise<BlogPost | null> {
    try {
      return await this.service.deleteBlogPost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
