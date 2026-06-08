import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export class CustomParseIntPipe extends ParseIntPipe {
    constructor() {
        super({
            exceptionFactory: (error) =>
                new BadRequestException(
                    `O parâmetro deve ser um número inteiro válido!`,
                ),
        });
    }
}
