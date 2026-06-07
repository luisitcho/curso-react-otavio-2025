import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'This action returns a user with id: ' + id;
    }
}
