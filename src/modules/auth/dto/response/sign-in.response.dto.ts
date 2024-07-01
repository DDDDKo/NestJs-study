import { ResponseDto } from "types/classes";
import { ResponseCode, ResponseMessage } from "types/enums";

export default class SignInResponseDto extends ResponseDto{
    
    constructor() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS)
    }

    static success() {
        throw new SignInResponseDto();
    }
    
}