import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WpUserMeta } from './wp-usermeta.entity';
import { WpUser } from './wp-user.entity';
import { WpPost } from './wp-post.entity';

@Entity({ name: 'wp_postmeta' })
export class WpPostMeta {
  @PrimaryGeneratedColumn({ type: 'bigint' }) meta_id: number;
  @Column({ type: 'bigint' }) post_id: number;
  @Column({ type: 'varchar', length: 255 }) meta_key: string;
  @Column({ type: 'longtext' }) meta_value: string;

  @ManyToOne(() => WpPost, (wpPost) => wpPost.wpPostMeta)
  @JoinColumn({ name: 'meta_id' })
  wpPost: WpPost;
}

/*
meta_id   	bigint  (20) unsigned Auto Increment	
post_id	    bigint  (20) unsigned [0]	
meta_key	  varchar (255) NULL	
meta_value	longtext  NULL
*/
