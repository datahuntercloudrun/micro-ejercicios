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
} from "lucide-react";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import Link from "next/link";

/* ---------- datos ---------- */

const ejercicios = [
  { num: 1, titulo: "Isocuantas y productividades", url: "/tema-1/ejercicio-1" },
  { num: 2, titulo: "Rendimientos a escala", url: "/tema-1/ejercicio-2" },
  { num: 3, titulo: "Cobb-Douglas general", url: "/tema-1/ejercicio-3" },
  { num: 4, titulo: "Rendimientos y PMgL", url: "/tema-1/ejercicio-4" },
  { num: 5, titulo: "Funci\u00f3n con par\u00e1metros", url: "/tema-1/ejercicio-5" },
];

const mapaConceptual = [
  {
    concepto: "PMe (Productividad Media)",
    formula: "PMe_L = \\frac{x}{L}",
    idea: "Cuantas unidades produce cada trabajador de media.",
  },
  {
    concepto: "PMg (Productividad Marginal)",
    formula: "PMg_L = \\frac{\\partial x}{\\partial L}",
    idea: "Cuanto sube la produccion al anadir un trabajador mas.",
  },
  {
    concepto: "Isocuantas",
    formula: "f(L,K) = \\bar{x}",
    idea: "Todas las combinaciones de L y K que producen la misma cantidad.",
  },
  {
    concepto: "RMST",
    formula: "RMST = \\frac{PMg_L}{PMg_K}",
    idea: "Cuanto capital puedes quitar si contratas un trabajador mas (sin cambiar la produccion).",
  },
  {
    concepto: "Rendimientos a escala",
    formula: "f(tL, tK) \\text{ vs } t \\cdot f(L,K)",
    idea: "Si duplicas todos los ingredientes, se duplica la produccion?",
  },
  {
    concepto: "Cobb-Douglas",
    formula: "f(L,K) = A L^{\\alpha} K^{\\beta}",
    idea: "La funcion de produccion estrella del curso. Los rendimientos dependen de alfa + beta.",
  },
];

/* ---------- componente ---------- */

export default function Tema1() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
          <Factory className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            Tema 1: La Funci&oacute;n de Producci&oacute;n
          </h1>
          <p className="text-sm text-muted-foreground">
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

        <div className="space-y-2">
          {ejercicios.map((ej) => (
            <Link key={ej.num} href={ej.url}>
              <Card className="border hover:shadow-sm hover:bg-muted/30 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                      Ej.{ej.num}
                    </Badge>
                    <span className="text-sm font-medium">{ej.titulo}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 8. TEST DE AUTOEVALUACION ===== */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-lg font-semibold">8. Autoevaluaci&oacute;n</h2>
        <Link href="/tema-1/test">
          <Card className="border hover:shadow-sm hover:bg-muted/30 transition-all cursor-pointer border-amber-200 dark:border-amber-800">
            <CardContent className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                  Test
                </Badge>
                <span className="text-sm font-medium">
                  Test de autoevaluaci&oacute;n &mdash; 4 preguntas tipo examen
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* ===== 9. KIT MATEMATICO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-orange-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            9. Si no sabes derivar, empieza aqu&iacute;
          </h2>
        </div>

        <Card className="bg-orange-50/50 dark:bg-orange-950/10 border-orange-200 dark:border-orange-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              Este tema usa derivadas y derivadas parciales constantemente (para calcular PMg, RMST,
              etc.). Si no las manejas con soltura, hemos preparado un{" "}
              <strong>Kit Matem&aacute;tico</strong> con todo lo que necesitas, explicado desde cero.
            </p>
            <Link href="/toolkit">
              <Card className="border border-orange-200 dark:border-orange-800 hover:shadow-sm hover:bg-muted/30 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">
                      Abrir Kit Matem&aacute;tico &mdash; Derivadas, parciales y optimizaci&oacute;n
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
