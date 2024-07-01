import { Module } from '@nestjs/common';
import { passportJwtConfig } from 'config';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import JwtAuthStrrategey from './jwt-auth.strategey';

@Module({
  imports: [PassportModule.register(passportJwtConfig)],
  controllers: [AuthController],
  providers: [JwtAuthStrrategey, AuthService],
  exports: [JwtAuthStrrategey]
})
export class AuthModule {}