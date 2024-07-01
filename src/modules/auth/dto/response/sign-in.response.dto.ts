import { BadRequestException } from "@nestjs/common";
import { ResponseDto } from "types/classes";
import { ResponseCode, ResponseMessage } from "types/enums";

export default class SignInResponseDto extends ResponseDto{
    
    constructor() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS)
    }

    static success() {
        throw new SignInResponseDto();
    }

    static signInFailed() {
        throw new BadRequestException(new ResponseDto(ResponseCode.SIGN_IN_FAILE, ResponseMessage.SIGN_IN_FAILE));
    }
    
}