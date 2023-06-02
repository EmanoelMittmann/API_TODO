import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { categories } from '../entities/Todo'

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
                        isNullable: false
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
                        type:'enum',
                        enum:['WARN','FINISH','PENDING'] 
                    }
                ]
            })
           )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`TodoTask`)
    }

}
