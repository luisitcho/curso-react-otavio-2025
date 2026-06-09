import { InternalServerErrorException, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { CommonModule } from 'src/common/common.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        UserModule,
        CommonModule,
        JwtModule.registerAsync({
            useFactory: () => {
                const secret = process.env.JWT_SECRET;

                if (!secret) {
                    throw new InternalServerErrorException(
                        'JWT_SECRET not found in .env',
                    );
                }

                return {
                    secret,
                    signOptions: {
                        expiresIn: '1d' as const,
                    },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
