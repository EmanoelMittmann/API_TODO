import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class TableTodo1685550565661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'TodoTask',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'Title',
                        type:'varchar(50)',
                        isNullable: false,
                    },
                    {
                        name:'Description',
                        type:'varchar(50)',
                        isNullable:false
                    },
                    {
                        name:'categories',
                        type:'varchar(50)',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        foreignKeyConstraintName: 'user_id'
                    }
                ]
            })
           )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`TodoTask`)
    }

}
