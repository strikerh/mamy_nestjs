import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'mmy_weekly_feeds' })
@Unique('week_no_user_id', ['week_no', 'user_id'])
export class WeeklyFeed {
  @PrimaryGeneratedColumn({ type: 'bigint' }) ID: number;
  @Column({ type: 'bigint' }) user_id: number;
  @Column({ type: 'bigint' }) week_no: number;
  @Column({ type: 'json' }) feeds: object;
  @Column({ type: 'json' }) feeds_log: any[];
  @Column({ type: 'datetime' }) start_date: object;
}
