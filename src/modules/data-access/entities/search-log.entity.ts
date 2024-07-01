import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'search-log'
})
export default class SearchLogEntity {
    @PrimaryGeneratedColumn({
        name: 'sequence'
    })
    sequence: number;

    @Column({
        name: 'search_word'
    })
    search_word: string;

    @Column({
        name: 'relation_word'
    })
    relationWord: string;

    @Column({
        name: 'relation'
    })
    relation: boolean;
}