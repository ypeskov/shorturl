import { Entity, Column } from "typeorm"
import { BaseEntity } from "./base.entity"

@Entity()
export class Url extends BaseEntity {
    @Column({unique: true})
    short_url_hash: string

    @Column()
    full_url: string
}