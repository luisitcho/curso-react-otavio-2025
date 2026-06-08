import {
    BadRequestException,
    Controller,
    Get,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
    constructor(private configService: ConfigService) { }

    @Get(':id')
    findOne(@Param('id', CustomParseIntPipe) id: number) {
        console.log(process.env.TESTE);
        console.log(this.configService.getOrThrow('TESTE'));

        return 'This action returns a user with id: ' + id;
    }
}
