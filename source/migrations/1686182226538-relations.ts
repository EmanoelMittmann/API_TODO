import { MigrationInterface, QueryRunner } from "typeorm";

export class Relations1686182226538 implements MigrationInterface {
    name = 'Relations1686182226538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "TodoTask" DROP COLUMN "categories"`);
        await queryRunner.query(`DROP TYPE "public"."TodoTask_categories_enum"`);
        await queryRunner.query(`ALTER TABLE "TodoTask" ADD "categories" text NOT NULL`);
    }
 
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "TodoTask" DROP COLUMN "categories"`);
        await queryRunner.query(`CREATE TYPE "public"."TodoTask_categories_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`ALTER TABLE "TodoTask" ADD "categories" "public"."TodoTask_categories_enum" NOT NULL`);
    }

}
