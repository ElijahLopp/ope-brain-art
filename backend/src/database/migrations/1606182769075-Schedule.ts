import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Schedule1606182769075 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'schedule',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'patient_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'start',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'end',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'status',
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
      'schedule',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patient',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table | undefined = await queryRunner.getTable('schedule');

    if (table) {
      const foreignKey: any = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('patient_id') !== -1,
      );
      await queryRunner.dropForeignKey('schedule', foreignKey);
    }

    await queryRunner.dropTable('schedule');
  }
}
