import { Controller, Get } from '@nestjs/common';
@Controller('/users')
export class UserController {
  @Get('/profile')
  getProfile() {
    return {
      message: 'This is your profile',
    };
  }
}
