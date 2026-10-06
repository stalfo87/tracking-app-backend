import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository.js';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository
  ) { }
  findOneById(id: number) {
    return this.userRepository.findOneById(id)
  }
}
