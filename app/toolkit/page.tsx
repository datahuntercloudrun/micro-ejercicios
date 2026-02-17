"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

const herramientas = [
  {
    num: 1,
    titulo: "Derivadas desde cero",
    desc: "Que es una funcion, que es la pendiente, la regla de la potencia, y como derivar cualquier funcion del curso. Sin conocimientos previos.",
    url: "/toolkit/derivadas",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
  },
  {
    num: 2,
    titulo: "Derivadas parciales",
    desc: "Cuando una funcion depende de dos variables (trabajo y capital), como calcular el efecto de cambiar solo una. Clave para productividades marginales.",
    url: "/toolkit/derivadas-parciales",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
  },
  {
    num: 3,
    titulo: "Optimizacion: maximos y minimos",
    desc: "Como encontrar el maximo beneficio o el minimo coste. CPO, CSO, Lagrangiano e integrales explicados con analogias.",
    url: "/toolkit/optimizacion",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
  },
];

export default function Toolkit() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
          <Calculator className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Kit Matematico</h1>
          <p className="text-sm text-muted-foreground">
            Las herramientas matematicas que necesitas, explicadas desde cero
          </p>
        </div>
      </div>

      <Card className="bg-orange-50/50 dark:bg-orange-950/10 border-orange-200 dark:border-orange-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            ¿Para que es esta seccion?
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            La microeconomia usa matematicas para expresar ideas economicas. Pero no necesitas
            ser un experto en matematicas para entenderlas. Esta seccion te explica
            <strong> solo las herramientas que vas a necesitar</strong>, desde el principio
            absoluto, con analogias y ejemplos del mundo real.
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            <strong>Recomendacion:</strong> leelas en orden antes de empezar con los ejercicios.
            Te ahorrara muchas dudas.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-base sm:text-lg font-semibold mb-3">Herramientas</h2>
        <div className="space-y-2">
          {herramientas.map((h) => (
            <Link key={h.num} href={h.url}>
              <Card className="border hover:shadow-sm hover:bg-muted/30 transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge className={h.color}>{h.num}</Badge>
                        <span className="font-medium">{h.titulo}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card className="bg-gray-50 dark:bg-gray-800 border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">¿Que cubren estas herramientas?</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="border rounded-lg p-3">
              <p className="font-medium text-foreground mb-1">Tema 1: Produccion</p>
              <p>Derivadas parciales para PMg, PMe y RMST.</p>
            </div>
            <div className="border rounded-lg p-3">
              <p className="font-medium text-foreground mb-1">Tema 2: Costes</p>
              <p>Derivadas para CMg, optimizacion para min CMe y Lagrangiano.</p>
            </div>
            <div className="border rounded-lg p-3">
              <p className="font-medium text-foreground mb-1">Tema 3: Oferta</p>
              <p>CPO para max beneficio, integrales para excedente.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
