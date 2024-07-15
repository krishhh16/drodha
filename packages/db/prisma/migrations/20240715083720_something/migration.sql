-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Markets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "mCap" TEXT NOT NULL,
    "vol" TEXT NOT NULL,
    "change" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "sym" TEXT NOT NULL,

    CONSTRAINT "Markets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Markets_name_key" ON "Markets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Markets_sym_key" ON "Markets"("sym");
