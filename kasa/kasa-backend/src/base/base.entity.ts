import { Column, Entity } from "typeorm";

@Entity()
export class OrderBaseEntity { 

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_at: Date;

  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updated_at: string;

  @Column()
  created_by: string;

  @Column()
  updated_by: string;
}
