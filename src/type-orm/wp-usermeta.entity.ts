import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WpUser } from './wp-user.entity';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'wp_usermeta' })
export class WpUserMeta {
  @PrimaryGeneratedColumn({ type: 'bigint' }) umeta_id;
  @Column({ type: 'bigint' }) user_id: string;
  @Column({ type: 'varchar', length: 20 }) meta_key: string;
  @Column({ type: 'varchar', length: 255 }) meta_value: string;

  @ManyToOne(() => WpUser, (wpUser) => wpUser.wpUserMeta)
  @JoinColumn({ name: 'umeta_id' })
  wpUser: WpUser;
}
