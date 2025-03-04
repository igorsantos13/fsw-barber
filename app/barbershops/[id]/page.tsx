import React from "react";
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailPageProps {
  params: {
    id?: string;
  };
}

async function BarbershopDetailPage({ params }: BarbershopDetailPageProps) {
  const session = await getServerSession(authOptions);
  //todo: redirecionar para homepage
  if (!params.id) return;

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });
  console.log(barbershop.services);

  if (!barbershop) return;

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service: any) => (
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
}

export default BarbershopDetailPage;
