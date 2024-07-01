import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaordEntity, BoardListViewEntity, CommentEntity, FavoriteEntity, ImageEntity, SearchLogEntity, UserEntity } from './entities';
import { BoardListViewRepository, BoardRepository, CommentRepository, FavoriteRepository, ImageRepository, SearchLogRepository, UserRepository } from './repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, BaordEntity, CommentEntity, ImageEntity, SearchLogEntity, FavoriteEntity, BoardListViewEntity])],
    providers: [UserRepository, BoardRepository, CommentRepository, FavoriteRepository, ImageRepository, SearchLogRepository, BoardListViewRepository],
    exports: [UserRepository, BoardRepository, CommentRepository, FavoriteRepository, ImageRepository, SearchLogRepository, BoardListViewRepository]
})
export class DataAccessModule {}
