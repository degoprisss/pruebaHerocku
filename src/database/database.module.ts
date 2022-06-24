import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { databaseProvider } from "./database.service";
import { UsersModule } from './repositories/users/users.module';

@Module({
    imports: [ConfigModule.forRoot(), databaseProvider, UsersModule],
    providers: [],
    controllers: []
})

export class DatabasePostgreSqlModule { }