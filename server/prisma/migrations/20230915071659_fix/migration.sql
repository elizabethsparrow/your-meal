/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `cover` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `kilocalory` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN "ingredients" TEXT;
ALTER TABLE "Product" ADD COLUMN "kilocalory" INTEGER;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Order" ("id") SELECT "id" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
