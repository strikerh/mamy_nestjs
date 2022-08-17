import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WpPostMeta } from './wp-post-meta.entity';

@Entity({ name: 'wp_posts' })
export class WpPost {
  @PrimaryGeneratedColumn({ type: 'bigint' }) ID: number;
  @Column({ type: 'bigint' }) post_author: number;
  @Column({ type: 'datetime' }) post_date: string;
  @Column({ type: 'datetime' }) post_date_gmt: string;
  @Column({ type: 'longtext' }) post_content: string;
  @Column({ type: 'text' }) post_title: string;
  @Column({ type: 'text' }) post_excerpt: string;
  @Column({ type: 'varchar', length: 20 }) post_status: string;
  @Column({ type: 'varchar', length: 20 }) comment_status: string;
  @Column({ type: 'varchar', length: 20 }) ping_status: string;
  @Column({ type: 'varchar', length: 255 }) post_password: string;
  @Column({ type: 'varchar', length: 200 }) post_name: string;
  @Column({ type: 'text' }) to_ping: string;
  @Column({ type: 'text' }) pinged: string;
  @Column({ type: 'datetime' }) post_modified: string;
  @Column({ type: 'datetime' }) post_modified_gmt: string;
  @Column({ type: 'longtext' }) post_content_filtered: string;
  @Column({ type: 'bigint' }) post_parent: number;
  @Column({ type: 'varchar', length: 255 }) guid: string;
  @Column({ type: 'int' }) menu_order: number;
  @Column({ type: 'varchar', length: 20 }) post_type: string;
  @Column({ type: 'varchar', length: 100 }) post_mime_type: string;
  @Column({ type: 'bigint' }) comment_count: number;

  @OneToMany(() => WpPostMeta, (wpPostMeta) => wpPostMeta.wpPost)
  @JoinColumn({ name: 'ID' })
  wpPostMeta: WpPostMeta[];
}

/*

ID                         bigint           (20) unsigned Auto Increment
post_author                bigint           (20) unsigned [0]
post_date                  datetime         [0000-00-00 00:00:00]
post_date_gmt              datetime         [0000-00-00 00:00:00]
post_content               longtext                   4       
post_title                 text                     4
post_excerpt               text                       4 
post_status                varchar          (20) [publish]
comment_status             varchar          (20) [open]
ping_status                varchar          (20) [open]
post_password              varchar          (255) []
post_name                  varchar          (200) []
to_ping                    text                       4
pinged                     text                       4 
post_modified              datetime         [0000-00-00 00:00:00]
post_modified_gmt          datetime         [0000-00-00 00:00:00]
post_content_filtered      longtext                 4
post_parent                bigint           (20) unsigned [0]
guid                       varchar          (255) []
menu_order                 int              (11) [0]
post_type                  varchar          (20) [post]
post_mime_type             varchar          (100) []
comment_count              bigint           (20) [0]	
*/
