-- CreateTable
CREATE TABLE "ReponseCommentaire" (
    "id" SERIAL NOT NULL,
    "contenu" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "commentaireId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReponseCommentaire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReponseCommentaire" ADD CONSTRAINT "ReponseCommentaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReponseCommentaire" ADD CONSTRAINT "ReponseCommentaire_commentaireId_fkey" FOREIGN KEY ("commentaireId") REFERENCES "Commentaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
