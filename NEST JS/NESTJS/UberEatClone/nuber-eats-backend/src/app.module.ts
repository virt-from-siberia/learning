import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestauranatsModule } from './restauranats/restauranats.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestauranatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
