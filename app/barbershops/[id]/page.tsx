import React from "react";
import { db } from "@/app/_lib/prisma";
import { LucideBadgeRussianRuble } from "lucide-react";

interface BarbershopDetailPageProps {
  params: {
    id?: string;
  };
}

async function BarbershopDetailPage({ params }: BarbershopDetailPageProps) {
  //todo: redirecionar para homepage
  if (!params.id) return;
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  return <div>{barbershop.name}</div>;
}

export default BarbershopDetailPage;
