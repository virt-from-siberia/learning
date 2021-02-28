import { RestaurantResolver } from './restauranats.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [RestaurantResolver],
})
export class RestauranatsModule {}
