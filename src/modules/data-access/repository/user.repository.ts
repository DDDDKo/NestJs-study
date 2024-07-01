import { Injectable, Logger } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../entities";
import { InjectRepository } from "@nestjs/typeorm";
import { ResponseDto } from "types/classes";
import { error } from "console";

@Injectable()
export default class UserRepository {

    private readonly logger = new Logger('User Repository');

    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
        private readonly dataSource: DataSource
    ){}

    async existByEmail(email: string): Promise<boolean> {
        try{
            const result = await this.repository.exists({where: { email }})
            return result;
        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
        }
    }

    async existByNickname(nickname: string): Promise<boolean> {
        try{
            const result = await this.repository.exists({where: { nickname }})
            return result;
        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
        }
    }

    async existByTelNumber(telNumber: string): Promise<boolean> {
        try{
            const result = await this.repository.exists({where: { telNumber }})
            return result;
        }catch(exception){
            this.logger.error(exception.message);
            ResponseDto.databaseError();
        }
    }

    // async isMatchedEmail(email: string): Promise<boolean> {
    //     try{
    //         const result = await this.repository.find
    //         return result;
    //     }catch(excepiton){
    //         this.logger.error(excepiton.message);
    //         ResponseDto.databaseError();
    //     }
    // }
    
    async save(userEntity: UserEntity): Promise<void> {
        try{
            await this.repository.save(userEntity);
        }catch(excepiton){
            this.logger.error(excepiton.message);
            ResponseDto.databaseError();
        }
    }

}