import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VoteModuleService } from "./votemodule.service";
import { PostVoteEventDto } from "../voteModule/PostVoteEventDto";

@swagger.ApiTags("voteModules")
@common.Controller("voteModules")
export class VoteModuleController {
  constructor(protected readonly service: VoteModuleService) {}

  @common.Post("/vote-created-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VoteCreatedEvent(
    @common.Body()
    body: PostVoteEventDto
  ): Promise<string> {
        return this.service.VoteCreatedEvent(body);
      }
}
