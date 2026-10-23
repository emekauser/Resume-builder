-- CreateTable
CREATE TABLE "Contacts" (
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "templates" (
    "templateId" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("templateId")
);

-- CreateTable
CREATE TABLE "resumes" (
    "resumeId" TEXT NOT NULL,
    "gestUserId" TEXT NOT NULL,
    "title" TEXT,
    "resumeColor" TEXT NOT NULL DEFAULT '#0000',
    "resumeType" TEXT NOT NULL,
    "professionalSummary" TEXT,
    "photoURL" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workHistory" TEXT[],
    "userId" TEXT,

    CONSTRAINT "resumes_pkey" PRIMARY KEY ("resumeId")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "guest_users" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "templateId" TEXT NOT NULL,

    CONSTRAINT "guest_users_pkey" PRIMARY KEY ("id","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "guest_users_userId_key" ON "guest_users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "guest_users_templateId_key" ON "guest_users"("templateId");

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_gestUserId_fkey" FOREIGN KEY ("gestUserId") REFERENCES "guest_users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
