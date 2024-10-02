import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PostModuleService } from "./postmodule.service";
import { CreatePostEventDto } from "../postModule/CreatePostEventDto";

@swagger.ApiTags("postModules")
@common.Controller("postModules")
export class PostModuleController {
  constructor(protected readonly service: PostModuleService) {}

  @common.Post("/post-created-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PostCreatedEvent(
    @common.Body()
    body: CreatePostEventDto
  ): Promise<string> {
        return this.service.PostCreatedEvent(body);
      }
}
