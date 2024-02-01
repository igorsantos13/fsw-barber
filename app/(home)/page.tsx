"use client";

import { ptBR } from "date-fns/locale/pt-BR";
import Header from "../_components/header";
import { format } from "date-fns";
import Search from "./_components/search";
import BookingItem from "../_components/bookingItem";
export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE', ' dd  'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="uppercase text-xs text-gray-400 font-medium mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
