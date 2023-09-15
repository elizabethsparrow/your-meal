/*
  Warnings:

  - You are about to drop the column `create_date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `kilocalory` on the `Product` table. All the data in the column will be lost.
  - Added the required column `description` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER,
    "cover" TEXT,
    "weight" INTEGER,
    "cost" INTEGER,
    "kilocalory" INTEGER,
    "ingredients" TEXT,
    CONSTRAINT "Order_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("id") SELECT "id" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER,
    "cover" TEXT,
    "weight" INTEGER,
    "cost" INTEGER,
    "orderId" INTEGER,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "cost", "cover", "description", "id", "name", "orderId", "weight") SELECT "categoryId", "cost", "cover", "description", "id", "name", "orderId", "weight" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
