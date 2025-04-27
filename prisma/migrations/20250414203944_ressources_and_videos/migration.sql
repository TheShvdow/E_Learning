-- AlterTable
ALTER TABLE "Cours" ADD COLUMN     "videosUrl" TEXT,
ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tutorial" ADD COLUMN     "userId" UUID;

-- CreateTable
CREATE TABLE "Ressources" (
    "id" SERIAL NOT NULL,
    "nomRessources" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "coursId" INTEGER NOT NULL,
    "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ressources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressources" ADD CONSTRAINT "Ressources_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
