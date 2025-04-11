-- CreateTable
CREATE TABLE "Enrollment" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "tutorialId" INTEGER NOT NULL,
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursProgress" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "coursId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoursProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" SERIAL NOT NULL,
    "contenu" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "tutorialId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userId_tutorialId_key" ON "Enrollment"("userId", "tutorialId");

-- CreateIndex
CREATE UNIQUE INDEX "CoursProgress_userId_coursId_key" ON "CoursProgress"("userId", "coursId");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "Tutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursProgress" ADD CONSTRAINT "CoursProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursProgress" ADD CONSTRAINT "CoursProgress_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "Tutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
