
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module.js';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // ConfigModule.forRoot({ isGlobal: true }),
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [UserModule]
    }),
  ],
})
export class AppModule {}
