import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Attachment1604665529866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attachment',
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
            name: 'uri',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'session_id',
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
      'attachment',
      new TableForeignKey({
        columnNames: ['session_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'session',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: Table | undefined = await queryRunner.getTable('attachment');

    if (table) {
      const foreignKey: any = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('session_id') !== -1,
      );
      await queryRunner.dropForeignKey('attachment', foreignKey);
    }

    await queryRunner.dropTable('attachment');
  }
}
