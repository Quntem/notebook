-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB,
    "ownerID" TEXT NOT NULL,
    "orgID" TEXT,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
