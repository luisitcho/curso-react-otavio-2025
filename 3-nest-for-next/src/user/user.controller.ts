import { BadRequestException, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
    @Get(':id')
    findOne(@Param('id', CustomParseIntPipe) id: number) {
        return 'This action returns a user with id: ' + id;
    }
}
