"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  ArrowRight,
  Lightbulb,
  Clock,
  BookOpen,
  Map,
  Link2,
  ListChecks,
  Calculator,
  Users,
  Wrench,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import Link from "next/link";

/* ---------- datos ---------- */

const ejercicios = [
  { num: 1, titulo: "Isocuantas y productividades", url: "/tema-1/ejercicio-1" },
  { num: 2, titulo: "Rendimientos a escala", url: "/tema-1/ejercicio-2" },
  { num: 3, titulo: "Cobb-Douglas general", url: "/tema-1/ejercicio-3" },
  { num: 4, titulo: "Rendimientos y PMgL", url: "/tema-1/ejercicio-4" },
  { num: 5, titulo: "Función con parámetros", url: "/tema-1/ejercicio-5" },
];

const mapaConceptual = [
  {
    concepto: "PMe (Productividad Media)",
    formula: "PMe_L = \\frac{x}{L}",
    idea: "Cuántas unidades produce cada trabajador de media.",
  },
  {
    concepto: "PMg (Productividad Marginal)",
    formula: "PMg_L = \\frac{\\partial x}{\\partial L}",
    idea: "Cuánto sube la producción al añadir un trabajador más.",
  },
  {
    concepto: "Isocuantas",
    formula: "f(L,K) = \\bar{x}",
    idea: "Todas las combinaciones de L y K que producen la misma cantidad.",
  },
  {
    concepto: "RMST",
    formula: "RMST = \\frac{PMg_L}{PMg_K}",
    idea: "Cuánto capital puedes quitar si contratas un trabajador más (sin cambiar la producción).",
  },
  {
    concepto: "Rendimientos a escala",
    formula: "f(tL, tK) \\text{ vs } t \\cdot f(L,K)",
    idea: "Si duplicas todos los ingredientes, ¿se duplica la producción?",
  },
  {
    concepto: "Cobb-Douglas",
    formula: "f(L,K) = A L^{\\alpha} K^{\\beta}",
    idea: "La función de producción estrella del curso. Los rendimientos dependen de alfa + beta.",
  },
];

/* ---------- componente ---------- */

export default function Tema1() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HEADER ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-sky-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs backdrop-blur-sm">
            Tema 1 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Factory className="h-6 w-6 text-blue-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              La Funci&oacute;n de Producci&oacute;n
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Gu&iacute;a completa &mdash; desde cero hasta los ejercicios
          </p>
        </div>
      </div>

      {/* ===== 1. DE QUE TRATA ESTE TEMA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            1. De qu&eacute; trata este tema
          </h2>
        </div>

        <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              Imagina una <strong>panader&iacute;a</strong>. Tiene un horno (capital), empleados
              (trabajo) y con eso produce barras de pan. La pregunta central de este tema es:
            </p>
            <p className="text-blue-800 dark:text-blue-200 font-medium text-center text-base sm:text-lg">
              &laquo;Si contrato un empleado m&aacute;s o compro otro horno,
              cu&aacute;ntas barras m&aacute;s puedo hacer?&raquo;
            </p>
            <p>
              Eso es <strong>la funci&oacute;n de producci&oacute;n</strong>: la relaci&oacute;n
              matem&aacute;tica entre lo que mete la empresa (inputs) y lo que sale (output). Toda
              la microeconom&iacute;a de la empresa arranca de aqu&iacute;: primero entiendes
              c&oacute;mo produce, luego cu&aacute;nto le cuesta y por &uacute;ltimo qu&eacute;
              decide vender.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 2. FACTORES PRODUCTIVOS ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            2. Los factores productivos: L y K
          </h2>
        </div>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              En micro simplificamos la realidad a <strong>dos ingredientes</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-3 space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  L &mdash; Trabajo (Labour)
                </p>
                <p className="text-muted-foreground text-sm">
                  Horas de empleados, esfuerzo humano. En la panader&iacute;a: los panaderos.
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-3 space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  K &mdash; Capital
                </p>
                <p className="text-muted-foreground text-sm">
                  Maquinaria, edificios, herramientas. En la panader&iacute;a: los hornos, la
                  amasadora.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Por qu&eacute; solo dos? Porque con L y K podemos dibujar gr&aacute;ficos en 2D y
              entender la l&oacute;gica. En la vida real hay m&aacute;s inputs (materias primas,
              energ&iacute;a...), pero las conclusiones se generalizan.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 3. CORTO PLAZO vs LARGO PLAZO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            3. Corto plazo vs largo plazo
          </h2>
        </div>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              No es cuesti&oacute;n de meses o a&ntilde;os, sino de <strong>qu&eacute; puedes
              cambiar</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-3 space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Corto plazo (CP)
                </p>
                <p className="text-muted-foreground text-sm">
                  Al menos un factor est&aacute; fijo. Normalmente{" "}
                  <InlineMath math="K = \bar{K}" /> (el capital est&aacute; fijo).
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Analog&iacute;a: tienes el local alquilado (no puedes cambiarlo ma&ntilde;ana),
                  pero s&iacute; puedes contratar m&aacute;s camareros.
                </p>
              </div>
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-3 space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  Largo plazo (LP)
                </p>
                <p className="text-muted-foreground text-sm">
                  Todos los factores son variables. Puedes ajustar tanto L como K.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Analog&iacute;a: puedes mudarte a un local m&aacute;s grande, comprar m&aacute;s
                  hornos y contratar m&aacute;s gente.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Esta distinci&oacute;n importa porque en el CP la producci&oacute;n solo depende de
              L (el factor variable), mientras que en el LP depende de ambos. Eso cambia las
              f&oacute;rmulas y los gr&aacute;ficos.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 4. LA FUNCION DE PRODUCCION ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            4. La funci&oacute;n de producci&oacute;n
          </h2>
        </div>

        <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 space-y-4 text-sm sm:text-base">
            <p>
              Es simplemente una <strong>f&oacute;rmula</strong> que dice: &laquo;si meto estas
              cantidades de L y K, produzco esta cantidad{" "}
              <InlineMath math="x" />&raquo;.
            </p>

            <FormulaDisplay math="x = f(L, K)" />

            <p>
              La m&aacute;s famosa (y la que usaremos en casi todos los ejercicios) es la{" "}
              <strong>Cobb-Douglas</strong>:
            </p>

            <FormulaDisplay math="x = A \cdot L^{\alpha} \cdot K^{\beta}" />

            <div className="rounded-lg bg-white dark:bg-gray-900/50 border border-blue-200 dark:border-blue-800 p-3 space-y-2">
              <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                Ejemplo num&eacute;rico
              </p>
              <p className="text-sm">
                Supongamos <InlineMath math="f(L,K) = 10 L^{0.5} K^{0.5}" />. Si la empresa
                usa <InlineMath math="L=4" /> trabajadores y <InlineMath math="K=9" />{" "}
                m&aacute;quinas:
              </p>
              <FormulaDisplay math="x = 10 \cdot 4^{0.5} \cdot 9^{0.5} = 10 \cdot 2 \cdot 3 = 60 \text{ unidades}" />
              <p className="text-sm text-muted-foreground">
                Con 4 trabajadores y 9 m&aacute;quinas, la empresa produce 60 unidades. As&iacute;
                de directo.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 5. MAPA CONCEPTUAL ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Map className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            5. Mapa de conceptos del tema
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Estos son todos los conceptos que aparecen en los ejercicios. No hace falta que los
          domines ahora &mdash; los ir&aacute;s entendiendo al resolver cada ejercicio. Pero
          aqu&iacute; tienes la visi&oacute;n general.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mapaConceptual.map((item) => (
            <Card
              key={item.concepto}
              className="border-blue-200 dark:border-blue-800"
            >
              <CardContent className="p-3 sm:p-4 space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                  {item.concepto}
                </p>
                <FormulaDisplay math={item.formula} className="text-sm" />
                <p className="text-muted-foreground text-sm">{item.idea}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 space-y-1 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La f&oacute;rmula central que conecta todo
            </p>
            <FormulaDisplay math="x = A \cdot L^{\alpha} \cdot K^{\beta}" />
            <p className="text-center text-muted-foreground">
              De aqu&iacute; se derivan PMe, PMg, isocuantas, RMST y rendimientos. Todo sale de
              la misma f&oacute;rmula.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 6. CONEXION CON LO QUE VIENE ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            6. Conexi&oacute;n con lo que viene despu&eacute;s
          </h2>
        </div>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 text-sm sm:text-base">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 p-1.5 shrink-0">
                  <Factory className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Tema 1: Producci&oacute;n (est&aacute;s aqu&iacute;)</p>
                  <p className="text-muted-foreground text-sm">
                    C&oacute;mo produce la empresa. Qu&eacute; pasa al a&ntilde;adir m&aacute;s
                    inputs.
                  </p>
                </div>
              </div>

              <div className="ml-4 border-l-2 border-dashed border-blue-200 dark:border-blue-800 h-4" />

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-1.5 shrink-0">
                  <ChevronRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">Tema 2: Costes</p>
                  <p className="text-muted-foreground text-sm">
                    Si ya sabes cu&aacute;nto produces con L y K, ahora calculas{" "}
                    <strong>cu&aacute;nto cuesta</strong> producir eso. Necesitas la funci&oacute;n
                    de producci&oacute;n para llegar a la de costes.
                  </p>
                </div>
              </div>

              <div className="ml-4 border-l-2 border-dashed border-emerald-200 dark:border-emerald-800 h-4" />

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 p-1.5 shrink-0">
                  <ChevronRight className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold">Tema 3: Oferta competitiva</p>
                  <p className="text-muted-foreground text-sm">
                    Sabiendo los costes, la empresa decide{" "}
                    <strong>cu&aacute;nto vender y a qu&eacute; precio</strong>. Aqu&iacute;
                    aparecen beneficios, oferta y excedente del productor.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 pt-3 border-t border-blue-100 dark:border-blue-900">
              Resumen: <strong>Producci&oacute;n &rarr; Costes &rarr; Oferta</strong>. Son
              eslabones de la misma cadena. Si no entiendes la producci&oacute;n, los costes no
              tienen sentido; y sin costes, la oferta tampoco.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 7. EJERCICIOS RESUELTOS ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            7. Ejercicios resueltos
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Cada ejercicio est&aacute; resuelto paso a paso con explicaciones, f&oacute;rmulas y
          gr&aacute;ficos. Empieza por el primero e ir&aacute;s construyendo intuici&oacute;n.
        </p>

        <div className="space-y-3">
          {ejercicios.map((ej) => (
            <Link key={ej.num} href={ej.url} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-blue-200/40 dark:border-blue-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/5 group-hover:-translate-y-0.5 group-hover:border-blue-300/60 dark:group-hover:border-blue-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-xs font-bold shadow-sm">
                      {ej.num}
                    </div>
                    <span className="font-medium text-sm sm:text-base group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{ej.titulo}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <Link href="/tema-1/test" className="group block">
          <div className="relative overflow-hidden rounded-xl border border-amber-200/40 dark:border-amber-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/5 group-hover:-translate-y-0.5 group-hover:border-amber-300/60 dark:group-hover:border-amber-700/60">
            <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center justify-between p-3.5 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-bold shadow-sm">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">Test de autoevaluaci&oacute;n</span>
                  <p className="text-xs text-muted-foreground">4 preguntas tipo examen</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-amber-500 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </section>

      <section>
        <Link href="/toolkit" className="group block">
          <div className="relative overflow-hidden rounded-xl border border-orange-200/40 dark:border-orange-800/40 bg-gradient-to-r from-orange-50/50 via-amber-50/30 to-transparent dark:from-orange-950/20 dark:via-amber-950/10 dark:to-transparent backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/5 group-hover:-translate-y-0.5">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-200/20 dark:bg-orange-800/10 rounded-full blur-2xl" />
            <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30">
                  <Calculator className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">Kit Matem&aacute;tico</span>
                  <p className="text-xs text-muted-foreground">Derivadas, parciales y optimizaci&oacute;n desde cero</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
