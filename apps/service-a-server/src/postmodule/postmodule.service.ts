import { Injectable } from "@nestjs/common";
import { CreatePostEventDto } from "../postModule/CreatePostEventDto";

@Injectable()
export class PostModuleService {
  constructor() {}
  async PostCreatedEvent(args: CreatePostEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
