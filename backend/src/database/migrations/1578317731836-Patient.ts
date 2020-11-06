import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Patient1578317731836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'patient',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'rg',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'nome_mae',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'nome_pai',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'telefone',
            type: 'varchar',
            length: '15',
            isNullable: true,
          },
          {
            name: 'celular',
            type: 'varchar',
            length: '15',
            isNullable: true,
          },
          {
            name: 'data_nascimento',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'rua',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '8',
            isNullable: false,
          },
          {
            name: 'bairro',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'numero',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            default: 'now()',
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
          },

          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            default: 'now()',
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('patient');
  }
}
