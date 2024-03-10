-- CreateTable
CREATE TABLE "Hotel" (
    "id" TEXT NOT NULL,
    "checkInDate" TIMESTAMP(3) NOT NULL,
    "checkOutDate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfGuests" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);
