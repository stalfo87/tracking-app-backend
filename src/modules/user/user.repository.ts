import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service.js";

@Injectable()
export class UserRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    findOneById(id: number) {
        return this.prisma.db.orm.public.User.where({ id }).select("id", "email", "username", "name").first()
    }
}