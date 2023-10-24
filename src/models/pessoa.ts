import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    nome: string

  @Column({ unique: true })
    email: string

  @Column({ unique: true })
    cpf: string

  @Column({ unique: true})
    numeroTelefone: string
  }
