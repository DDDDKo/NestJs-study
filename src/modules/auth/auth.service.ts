import { Injectable } from '@nestjs/common';
import { SignInRequestDto, SignUpRequestDto } from './dto/request';
import { SignInResponseDto, SignUpResponseDto } from './dto/response';
import { UserRepository } from 'modules/data-access/repository';

import * as bcrypt from 'bcrypt';
import { UserEntity } from 'modules/data-access/entities';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async signUp(dto: SignUpRequestDto): Promise<SignUpResponseDto | void> {

        const { email, password, nickname, telNumber } = dto;

        const isExistEmail = await this.userRepository.existByEmail(email);
        if(isExistEmail) return SignUpResponseDto.duplicateEmail();

        const isExistNickname = await this.userRepository.existByNickname(nickname);
        if(isExistNickname) return SignUpResponseDto.duplicateNickname();

        const isExistTelNumber = await this.userRepository.existByTelNumber(telNumber);
        if(isExistTelNumber) return SignUpResponseDto.duplicateTelNumber();

        const salt = await bcrypt.genSalt();
        const encodedPassword = await bcrypt.hash(password, salt);
        dto.password = encodedPassword;

        const userEntity: UserEntity = {...dto, profileImage: null};
        await this.userRepository.save(userEntity);

        return SignUpResponseDto.success();

    }

    aysnc signIn(dto: SignInRequestDto): Promise<SignInResponseDto | void> {
        
        const { email, password } = dto;

        const isMatchedEmail = await this.userRepository.

        return SignInResponseDto.success();
    }

}
