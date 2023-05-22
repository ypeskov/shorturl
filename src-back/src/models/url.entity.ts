import { Entity, Column } from "typeorm"
import { BaseEntity } from "./base.entity"

@Entity()
export class Url extends BaseEntity {
    @Column()
    short_url_hash: string

    @Column()
    full_url: string
}