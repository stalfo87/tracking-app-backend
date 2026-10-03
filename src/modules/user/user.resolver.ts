import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.model.js";
import { UserService } from "./user.service.js";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOneById(id);
  }
}