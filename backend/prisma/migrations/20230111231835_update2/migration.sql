/*
  Warnings:

  - You are about to drop the column `pairId` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `location` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tournament" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_Tournament" ("id", "name", "size") SELECT "id", "name", "size" FROM "Tournament";
DROP TABLE "Tournament";
ALTER TABLE "new_Tournament" RENAME TO "Tournament";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
