/*
  Warnings:

  - Made the column `orderId` on table `ProductOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    CONSTRAINT "ProductOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductOrder" ("count", "id", "orderId", "productId") SELECT "count", "id", "orderId", "productId" FROM "ProductOrder";
DROP TABLE "ProductOrder";
ALTER TABLE "new_ProductOrder" RENAME TO "ProductOrder";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
