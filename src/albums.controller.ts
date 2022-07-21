import { Controller, Get } from '@nestjs/common';
@Controller('/albums')
export class AlbumsController {
  @Get()
  getProfile() {
    return {
      message: 'This is your Albums',
    };
  }
}
