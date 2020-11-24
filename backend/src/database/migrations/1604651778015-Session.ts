import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Session1604651778015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'session',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'body',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'patient_id',
            type: 'int',
            isNullable: false,
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

    await queryRunner.createForeignKey(
      'session',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patient',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table | undefined = await queryRunner.getTable('session');

    if (table) {
      const foreignKey: any = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('patient_id') !== -1,
      );
      await queryRunner.dropForeignKey('session', foreignKey);
    }

    await queryRunner.dropTable('session');
  }
}
