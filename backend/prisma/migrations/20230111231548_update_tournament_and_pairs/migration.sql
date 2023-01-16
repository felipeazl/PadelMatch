/*
  Warnings:

  - You are about to drop the column `tournamentId` on the `Pair` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tournament" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "pairId" TEXT,
    CONSTRAINT "Tournament_pairId_fkey" FOREIGN KEY ("pairId") REFERENCES "Pair" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tournament" ("id", "name", "size") SELECT "id", "name", "size" FROM "Tournament";
DROP TABLE "Tournament";
ALTER TABLE "new_Tournament" RENAME TO "Tournament";
CREATE TABLE "new_Pair" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "player1" TEXT NOT NULL,
    "player2" TEXT NOT NULL
);
INSERT INTO "new_Pair" ("id", "player1", "player2") SELECT "id", "player1", "player2" FROM "Pair";
DROP TABLE "Pair";
ALTER TABLE "new_Pair" RENAME TO "Pair";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
