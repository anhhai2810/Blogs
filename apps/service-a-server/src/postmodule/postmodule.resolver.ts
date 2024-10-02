import * as graphql from "@nestjs/graphql";
import { CreatePostEventDto } from "../postModule/CreatePostEventDto";
import { PostModuleService } from "./postmodule.service";

export class PostModuleResolver {
  constructor(protected readonly service: PostModuleService) {}

  @graphql.Mutation(() => String)
  async PostCreatedEvent(
    @graphql.Args()
    args: CreatePostEventDto
  ): Promise<string> {
    return this.service.PostCreatedEvent(args);
  }
}
