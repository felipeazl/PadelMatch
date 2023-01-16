-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pair" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "player1" TEXT NOT NULL,
    "player2" TEXT NOT NULL,
    "tournamentId" TEXT,
    CONSTRAINT "Pair_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pair" ("id", "player1", "player2") SELECT "id", "player1", "player2" FROM "Pair";
DROP TABLE "Pair";
ALTER TABLE "new_Pair" RENAME TO "Pair";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
