import { ptBR } from "date-fns/locale/pt-BR";
import Header from "../_components/header";
import { format } from "date-fns";
import Search from "./_components/search";
import BookingItem from "../_components/bookingItem";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-items";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  console.log(barbershops);

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: any) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
