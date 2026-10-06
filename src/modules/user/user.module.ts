import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserResolver } from './user.resolver.js';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { UserRepository } from './user.repository.js';

@Module({
    imports: [PrismaModule],
    providers: [UserService, UserResolver, UserRepository]
})
export class UserModule {}
