import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOneById(id: number) {
    return {
        id: 1,
        firstName: 'Enrique',
        lastName: 'Roldán'
    }
  }
}
