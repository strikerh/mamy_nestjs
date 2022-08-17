import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WpUserMeta } from './wp-usermeta.entity';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'wp_users' })
export class WpUser {
  @PrimaryGeneratedColumn({ type: 'bigint' }) ID;
  @Column({ type: 'varchar', length: 60 }) user_login: string;
  @Column({ type: 'varchar', length: 255 }) user_pass: string;
  @Column({ type: 'varchar', length: 50 }) user_nicename: string;
  @Column({ type: 'varchar', length: 100 }) user_email: string;
  @Column({ type: 'varchar', length: 100 }) user_url: string;
  @Column({ type: 'datetime', default: '0000-00-00 00:00:00' }) user_registered: string;
  @Column({ type: 'varchar', length: 255 }) user_activation_key: string;
  @Column({ type: 'int' }) user_status: number;
  @Column({ type: 'varchar', length: 250 }) display_name: string;

  @OneToMany(() => WpUserMeta, (wpUserMeta) => wpUserMeta.wpUser)
  @JoinColumn({ name: 'ID' })
  wpUserMeta: WpUserMeta[];
}
