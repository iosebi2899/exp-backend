import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GymsModule } from './gyms/gyms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';


import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports:[
        ConfigModule.forRoot({
          envFilePath: `../config/development.env`,
        }),
      ],
      useFactory: async (config: ConfigService ) => ({
        uri: config.get('mongodb+srv://AdminG:admin123@cluster0.ju00lej.mongodb.net/?retryWrites=true&w=majority'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    UsersModule,
    GymsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
