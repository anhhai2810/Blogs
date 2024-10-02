import { Injectable } from "@nestjs/common";
import { PostVoteEventDto } from "../voteModule/PostVoteEventDto";

@Injectable()
export class VoteModuleService {
  constructor() {}
  async VoteCreatedEvent(args: PostVoteEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
