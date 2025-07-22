import { Suspense } from "react";
import BewerbungClient from "./BewerbungClient"; // ten komponent zaraz robimy

export default function BewerbungPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-600">Lade Formular...</div>}>
      <BewerbungClient />
    </Suspense>
  );
}