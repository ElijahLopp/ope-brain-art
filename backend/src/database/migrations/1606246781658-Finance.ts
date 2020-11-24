import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Finance1606246781658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'finance',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'paid',
            type: 'varchar',
            length: '15',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'patient_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'schedule_id',
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
      'finance',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patient',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'finance',
      new TableForeignKey({
        columnNames: ['schedule_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'schedule',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table | undefined = await queryRunner.getTable('finance');

    if (table) {
      const foreignKey: any = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('patient_id') !== -1,
      );
      await queryRunner.dropForeignKey('finance', foreignKey);
      const foreignKeyTwo: any = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('schedule_id') !== -1,
      );
      await queryRunner.dropForeignKey('finance', foreignKeyTwo);
    }

    await queryRunner.dropTable('finance');
  }
}
