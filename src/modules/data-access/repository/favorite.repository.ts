import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { FavoriteEntity } from "../entities";

@Injectable()
export default class FavoriteRepository {
    constructor(
        @InjectRepository(FavoriteEntity)
        private readonly repository: Repository<FavoriteEntity>,
        private readonly dataSource: DataSource
    ){}
}