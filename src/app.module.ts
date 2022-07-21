import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { UserController } from './users.controller';

@Module({
  imports: [],
  controllers: [UserController, AlbumsController],
  providers: [],
})
export class AppModule {}
