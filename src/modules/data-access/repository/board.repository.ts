import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaordEntity } from "../entities";
import { DataSource, Repository } from "typeorm";

@Injectable()
export default class BoardRepository {

    constructor(
        @InjectRepository(BaordEntity)
        private readonly boardRepository: Repository<BaordEntity>,
        private readonly dataSource: DataSource
    ) {}
}