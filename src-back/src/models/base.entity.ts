import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', default: false })
    is_deleted: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}