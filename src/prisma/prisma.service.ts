
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import postgres, { PostgresClient } from '@prisma/orm-postgres/runtime';
import contractJson from './contract.json' with { type: 'json' };
import type { Contract } from './contract.d';


@Injectable()
export class PrismaService
    implements OnModuleInit, OnModuleDestroy {
    readonly db: PostgresClient<Contract>;
    constructor(configService: ConfigService) {
        this.db = postgres<Contract>({
            contractJson,
            url: configService.getOrThrow<string>('DATABASE_URL'),
        });
    }

    async onModuleInit() {
        await this.db.connect();
    }

    async onModuleDestroy() {
        await this.db.close();
    }
}
