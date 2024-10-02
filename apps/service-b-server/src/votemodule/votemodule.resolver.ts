import * as graphql from "@nestjs/graphql";
import { PostVoteEventDto } from "../voteModule/PostVoteEventDto";
import { VoteModuleService } from "./votemodule.service";

export class VoteModuleResolver {
  constructor(protected readonly service: VoteModuleService) {}

  @graphql.Mutation(() => String)
  async VoteCreatedEvent(
    @graphql.Args()
    args: PostVoteEventDto
  ): Promise<string> {
    return this.service.VoteCreatedEvent(args);
  }
}
