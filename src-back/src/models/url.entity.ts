import { Entity, Column, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Base } from "./base.entity"

@Entity()
export class Url extends Base {
    @Column({unique: true})
    short_url_hash: string

    @Column()
    full_url: string
}