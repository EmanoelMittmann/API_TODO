import { IsNull, MigrationInterface, QueryRunner, Table } from 'typeorm'

export class TableUser1685543953871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
        new Table({
            name: 'Users',
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
                    name:'name',
                    type:'varchar(50)',
                    isNullable: false,
                },
                {
                    name:'email',
                    type:'varchar(50)',
                    isNullable:false
                },
                {
                    name:'password',
                    type:'varchar(500)',
                    isNullable:false
                }
            ]
        })
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.dropTable('Users')
    }

}
