"use client";

import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight, Sparkles, BookOpen, Factory, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

const herramientas = [
  {
    num: 1,
    titulo: "Derivadas desde cero",
    subtitulo: "La base de todo",
    desc: "Qué es una función, qué es la pendiente, la regla de la potencia, y cómo derivar cualquier función del curso. Sin conocimientos previos.",
    url: "/toolkit/derivadas",
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    num: 2,
    titulo: "Derivadas parciales",
    subtitulo: "Varias variables a la vez",
    desc: "Cuando una función depende de dos variables (trabajo y capital), cómo calcular el efecto de cambiar solo una. Clave para productividades marginales.",
    url: "/toolkit/derivadas-parciales",
    gradient: "from-orange-500 to-rose-500",
    bgGlow: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    num: 3,
    titulo: "Optimización: máximos y mínimos",
    subtitulo: "El objetivo final",
    desc: "Cómo encontrar el máximo beneficio o el mínimo coste. CPO, CSO, Lagrangiano e integrales explicados con analogías.",
    url: "/toolkit/optimizacion",
    gradient: "from-rose-500 to-pink-500",
    bgGlow: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
];

const conexiones = [
  {
    tema: "Tema 1: Producción",
    icon: Factory,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200/50 dark:border-blue-800/50",
    items: ["Derivadas parciales para PMg y PMe", "RMST como cociente de derivadas"],
  },
  {
    tema: "Tema 2: Costes",
    icon: DollarSign,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200/50 dark:border-emerald-800/50",
    items: ["Derivadas para CMg", "Optimización para min CMe", "Lagrangiano"],
  },
  {
    tema: "Tema 3: Oferta",
    icon: TrendingUp,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200/50 dark:border-violet-800/50",
    items: ["CPO para max beneficio", "Integrales para excedente del productor"],
  },
];

export default function Toolkit() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-rose-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        {/* Orbes decorativos difuminados */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-300/20 dark:bg-amber-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-rose-300/20 dark:bg-rose-700/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-300/15 dark:bg-orange-700/10 rounded-full blur-2xl" />

        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <Badge className="bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs backdrop-blur-sm">
              Paso 0 — Empieza aquí
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Calculator className="h-6 w-6 text-orange-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 dark:from-amber-300 dark:via-orange-300 dark:to-rose-300 bg-clip-text text-transparent">
              Kit Matemático
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Las herramientas matemáticas que necesitas para el curso, explicadas desde el principio absoluto.
            Sin conocimientos previos. Con analogías y ejemplos reales.
          </p>
        </div>
      </div>

      {/* Nota motivacional */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-50/80 via-amber-50/60 to-transparent dark:from-orange-950/20 dark:via-amber-950/10 dark:to-transparent border border-orange-200/40 dark:border-orange-800/30 p-4 sm:p-5">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-200/20 dark:bg-orange-800/10 rounded-full blur-2xl" />
        <div className="relative flex items-start gap-3">
          <BookOpen className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-sm">
            <p className="text-foreground/90 leading-relaxed">
              La microeconomía usa matemáticas para expresar ideas económicas. Pero <strong>no necesitas ser experto</strong> — esta sección te explica solo lo que vas a necesitar, desde cero.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground/80">Recomendación:</strong> léelas en orden antes de empezar con los ejercicios. Te ahorrará muchas dudas.
            </p>
          </div>
        </div>
      </div>

      {/* Cards de herramientas */}
      <div className="space-y-4">
        {herramientas.map((h) => (
          <Link key={h.num} href={h.url} className="group block">
            <div className="relative overflow-hidden rounded-xl border border-gray-200/60 dark:border-gray-700/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-500/5 group-hover:-translate-y-0.5 group-hover:border-orange-300/50 dark:group-hover:border-orange-700/50">
              {/* Gradient bar top */}
              <div className={`h-1 w-full bg-gradient-to-r ${h.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Glow sutil en hover */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 ${h.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${h.gradient} text-white text-sm font-bold shadow-sm`}>
                        {h.num}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                          {h.titulo}
                        </h3>
                        <p className="text-xs text-muted-foreground/70">{h.subtitulo}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                      {h.desc}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-2 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Conexiones con los temas */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
          <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Dónde usarás esto</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {conexiones.map((c) => (
            <div key={c.tema} className={`rounded-xl ${c.bg} ${c.border} border p-4 space-y-2.5`}>
              <div className="flex items-center gap-2">
                <c.icon className={`h-4 w-4 ${c.color}`} />
                <p className="font-medium text-sm text-foreground">{c.tema}</p>
              </div>
              <ul className="space-y-1.5">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className={`mt-1 w-1 h-1 rounded-full ${c.color.replace("text-", "bg-")} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
