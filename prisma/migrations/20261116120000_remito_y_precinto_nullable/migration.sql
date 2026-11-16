-- AlterTable
ALTER TABLE "bolsin" ALTER COLUMN "numero_precinto" DROP NOT NULL;

-- CreateTable
CREATE TABLE "remito" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "asunto" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "bolsin_id" INTEGER NOT NULL,

    CONSTRAINT "remito_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "remito_bolsin_id_key" ON "remito"("bolsin_id");

-- AddForeignKey
ALTER TABLE "remito" ADD CONSTRAINT "remito_bolsin_id_fkey" FOREIGN KEY ("bolsin_id") REFERENCES "bolsin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
