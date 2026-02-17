"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Users,
  Target,
  Clock,
  Timer,
  BarChart3,
  Receipt,
  Map,
  Link2,
  Calculator,
  BookOpen,
  ShieldCheck,
  Scale,
  DollarSign,
  Factory,
  ChevronRight,
} from "lucide-react";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import Link from "next/link";

/* ---------- datos ---------- */

const ejercicios = [
  { num: 1, titulo: "V/F empresa competitiva", url: "/tema-3/ejercicio-1" },
  { num: 2, titulo: "Coste y oferta CP", url: "/tema-3/ejercicio-2" },
  { num: 3, titulo: "Oferta LP e impuestos", url: "/tema-3/ejercicio-3" },
  { num: 4, titulo: "Excedente del productor", url: "/tema-3/ejercicio-4" },
];

/* ---------- componente ---------- */

export default function Tema3() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== CABECERA ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-fuchsia-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-300/20 dark:bg-violet-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-violet-100/80 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs backdrop-blur-sm">
            Tema 3 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <TrendingUp className="h-6 w-6 text-violet-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-300 dark:via-purple-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
              La Oferta Competitiva
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Gu&iacute;a completa &mdash; desde cero hasta el examen
          </p>
        </div>
      </div>

      {/* ===== 1. DE QUE TRATA ESTE TEMA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            1. De que trata este tema
          </h2>
        </div>
        <Card className="bg-violet-50/50 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="text-violet-900 dark:text-violet-100">
              En el <strong>Tema 1</strong> aprendimos a <em>producir</em>:
              cuanto producto sale con distintas combinaciones de trabajo y capital.
              En el <strong>Tema 2</strong> calculamos <em>cuanto cuesta</em>{" "}
              producir cada nivel de output. Ahora llega la pregunta clave:
            </p>
            <p className="text-center font-semibold text-violet-800 dark:text-violet-200 text-base">
              Cuanto producimos y a que precio vendemos para ganar
              lo maximo posible?
            </p>
            <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
              <CardContent className="p-3 text-sm">
                <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                  <Scale className="h-4 w-4 inline mr-1" />
                  Analogia: un puesto de fruta en el mercado
                </p>
                <p className="text-muted-foreground">
                  Imagina que tienes un puesto de fruta en un gran mercado.
                  No puedes poner el precio que quieras porque hay cientos de
                  puestos vendiendo las mismas naranjas. El precio lo fija el
                  mercado. Tu unica decision es: <strong>cuantos kilos
                  llevar</strong> cada dia. Si llevas demasiados pocos, pierdes
                  ventas. Si llevas demasiados, te salen mas caros de lo que
                  cobras. Encontrar ese punto justo es lo que estudia este tema.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      {/* ===== 2. QUE ES UN MERCADO COMPETITIVO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            2. Que es un mercado competitivo
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Para que funcione todo lo que viene despues, necesitamos que el mercado
          cumpla tres condiciones. Si las tres se dan, decimos que hay
          &ldquo;competencia perfecta&rdquo;.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                1
              </Badge>
              <p className="font-semibold text-violet-800 dark:text-violet-200">
                Precio-aceptante
              </p>
              <p className="text-muted-foreground">
                Cada empresa es tan pequena comparada con el mercado total que{" "}
                <strong>no puede influir en el precio</strong>. Vende todo lo
                que quiera a ese precio, pero no puede subirlo ni le conviene
                bajarlo.
              </p>
            </CardContent>
          </Card>
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                2
              </Badge>
              <p className="font-semibold text-violet-800 dark:text-violet-200">
                Producto homogeneo
              </p>
              <p className="text-muted-foreground">
                Todas las empresas venden exactamente lo mismo. Al consumidor le
                da igual comprar en una u otra. No hay marcas ni
                diferenciacion.
              </p>
            </CardContent>
          </Card>
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                3
              </Badge>
              <p className="font-semibold text-violet-800 dark:text-violet-200">
                Libre entrada y salida
              </p>
              <p className="text-muted-foreground">
                Cualquier empresa puede entrar o salir del mercado sin coste. Si
                hay beneficios, entran mas; si hay perdidas, salen.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
          <CardContent className="p-3 text-sm">
            <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
              <Scale className="h-4 w-4 inline mr-1" />
              Analogia: el mercado de tomates
            </p>
            <p className="text-muted-foreground">
              Piensa en un mercado municipal con 200 puestos de tomates. Todos
              venden el mismo tomate de huerta. Si un puesto pone el kilo a 3
              euros cuando todos lo ponen a 2, nadie le compra. Si lo pone a 1,
              pierde dinero innecesariamente. Todos aceptan el precio de mercado
              (2 euros) y deciden solo cuantos kilos traer.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 3. MAXIMIZAR BENEFICIO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            3. Maximizar beneficio: la regla de oro
          </h2>
        </div>

        <Card className="bg-violet-50/50 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="text-violet-900 dark:text-violet-100">
              El <strong>beneficio</strong> es lo mas sencillo del mundo:
            </p>
            <FormulaDisplay math="\pi(x) = \underbrace{p \cdot x}_{\text{Ingresos}} \;-\; \underbrace{C(x)}_{\text{Costes}}" />
            <p className="text-violet-900 dark:text-violet-100">
              La empresa quiere que ese numero sea lo mas grande posible. Para
              encontrar el maximo, derivamos e igualamos a cero (la CPO):
            </p>
            <FormulaDisplay math="\frac{d\pi}{dx} = p - CMg(x) = 0 \implies \boxed{p = CMg(x)}" />
            <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
              <CardContent className="p-3 text-sm">
                <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                  <Lightbulb className="h-4 w-4 inline mr-1" />
                  Por que funciona esta regla?
                </p>
                <p className="text-muted-foreground">
                  Cada unidad adicional te genera un ingreso extra de{" "}
                  <InlineMath math="p" /> (el precio). Producirla te cuesta{" "}
                  <InlineMath math="CMg" /> (el coste marginal). Mientras{" "}
                  <InlineMath math="p > CMg" />, cada unidad extra te da
                  beneficio, asi que sigues produciendo. Cuando{" "}
                  <InlineMath math="p = CMg" />, la ultima unidad ya no aporta
                  beneficio extra: ese es tu punto optimo. Si produjeras mas,{" "}
                  <InlineMath math="CMg > p" /> y empezarias a perder.
                </p>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground">
              Ademas necesitamos la CSO:{" "}
              <InlineMath math="CMg'(x) > 0" /> (el coste marginal debe ser
              creciente en ese punto, para que sea un maximo y no un minimo).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 4. OFERTA A LARGO PLAZO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            4. Oferta a largo plazo
          </h2>
        </div>

        <Card className="bg-violet-50/50 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="text-violet-900 dark:text-violet-100">
              La <strong>curva de oferta</strong> nos dice cuanto produce la
              empresa a cada precio. Ya sabemos que elige donde{" "}
              <InlineMath math="p = CMg" />. Por tanto, la curva de oferta
              es exactamente la curva de CMg... pero solo la parte que tiene
              sentido economico.
            </p>

            <p className="text-violet-900 dark:text-violet-100 font-medium">
              Condicion de cierre a largo plazo:
            </p>
            <FormulaDisplay math="p \geq \min CMe^L \implies \text{produce}" />
            <FormulaDisplay math="p < \min CMe^L \implies x = 0 \;\text{(sale del mercado)}" />

            <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
              <CardContent className="p-3 text-sm">
                <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                  <Lightbulb className="h-4 w-4 inline mr-1" />
                  Por que el minimo del CMe?
                </p>
                <p className="text-muted-foreground">
                  A largo plazo la empresa puede ajustar todos sus factores
                  (incluso cerrar y llevarse la maquinaria). Si el precio no
                  cubre ni siquiera el coste medio total, esta perdiendo dinero
                  en cada unidad que produce. Mejor salir del mercado.
                </p>
              </CardContent>
            </Card>

            <div className="bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
              <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                <BarChart3 className="h-4 w-4 inline mr-1" />
                Resumen visual
              </p>
              <p className="text-muted-foreground">
                La oferta LP es la curva de{" "}
                <InlineMath math="CMg^L" /> por encima de{" "}
                <InlineMath math="\min CMe^L" />. Para precios por debajo, la
                cantidad ofrecida es cero.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 5. OFERTA A CORTO PLAZO ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            5. Oferta a corto plazo
          </h2>
        </div>

        <Card className="bg-violet-50/50 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="text-violet-900 dark:text-violet-100">
              A corto plazo hay una diferencia clave: la empresa ya tiene
              compromisos fijos (alquiler de fabrica, maquinaria comprada...).
              Esos costes <strong>los paga igual, produzca o no</strong>.
            </p>

            <p className="text-violet-900 dark:text-violet-100 font-medium">
              Condicion de cierre a corto plazo:
            </p>
            <FormulaDisplay math="p \geq \min CVMe \implies \text{produce}" />
            <FormulaDisplay math="p < \min CVMe \implies x = 0 \;\text{(cierra temporalmente)}" />

            <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
              <CardContent className="p-3 text-sm">
                <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                  <Lightbulb className="h-4 w-4 inline mr-1" />
                  Analogia: el alquiler ya esta pagado
                </p>
                <p className="text-muted-foreground">
                  Imagina que pagas 1.000 euros de alquiler al mes por tu local.
                  Ese dinero se va tanto si abres como si no. Asi que la pregunta
                  a corto plazo no es &ldquo;cubro todos mis costes?&rdquo;
                  sino &ldquo;cubro al menos los costes que dependen de
                  producir?&rdquo; (materias primas, electricidad, personal
                  extra...). Si el precio cubre esos costes variables, te
                  conviene abrir porque cada venta al menos reduce tus
                  perdidas del alquiler. Si ni eso cubre, mejor cerrar.
                </p>
              </CardContent>
            </Card>

            <div className="bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
              <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                <BarChart3 className="h-4 w-4 inline mr-1" />
                Diferencia clave LP vs CP
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="border rounded-lg p-2 bg-white/40 dark:bg-white/5">
                  <p className="font-medium text-violet-800 dark:text-violet-200">
                    Largo plazo
                  </p>
                  <p className="text-muted-foreground">
                    Oferta = <InlineMath math="CMg^L" /> por encima de{" "}
                    <InlineMath math="\min CMe^L" />
                  </p>
                  <p className="text-muted-foreground">
                    (debe cubrir <em>todos</em> los costes)
                  </p>
                </div>
                <div className="border rounded-lg p-2 bg-white/40 dark:bg-white/5">
                  <p className="font-medium text-violet-800 dark:text-violet-200">
                    Corto plazo
                  </p>
                  <p className="text-muted-foreground">
                    Oferta = <InlineMath math="CMg^C" /> por encima de{" "}
                    <InlineMath math="\min CVMe" />
                  </p>
                  <p className="text-muted-foreground">
                    (basta cubrir costes <em>variables</em>)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 6. EXCEDENTE DEL PRODUCTOR ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            6. Excedente del productor
          </h2>
        </div>

        <Card className="bg-violet-50/50 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="text-violet-900 dark:text-violet-100">
              El excedente del productor mide{" "}
              <strong>cuanto gana la empresa por encima de lo minimo que
              necesitaria para estar dispuesta a producir</strong>.
            </p>
            <FormulaDisplay math="EP = IT - CV = p \cdot x - CV(x) = \int_0^x \bigl[p - CMg(t)\bigr]\,dt" />

            <Card className="bg-white/60 dark:bg-white/5 border-violet-200 dark:border-violet-700">
              <CardContent className="p-3 text-sm">
                <p className="font-medium text-violet-800 dark:text-violet-200 mb-1">
                  <Lightbulb className="h-4 w-4 inline mr-1" />
                  Como pensarlo visualmente
                </p>
                <p className="text-muted-foreground">
                  Dibuja la curva de CMg y una linea horizontal al precio{" "}
                  <InlineMath math="p" />. El area que queda{" "}
                  <strong>entre la linea de precio y la curva de CMg</strong>{" "}
                  (desde 0 hasta la cantidad producida) es el excedente del
                  productor. Es como &ldquo;el beneficio bruto antes de restar
                  los costes fijos&rdquo;.
                </p>
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground">
              Nota: <InlineMath math="EP = \pi + CF" />. Si los costes fijos
              son cero (largo plazo), el excedente del productor coincide con
              el beneficio.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 7. IMPUESTOS Y SUBVENCIONES ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            7. Impuestos y subvenciones
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          El Estado puede intervenir de tres formas distintas. Cada una afecta
          de forma diferente a la curva de oferta:
        </p>

        <div className="space-y-3">
          {/* Impuesto unitario */}
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-4 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                  Unitario
                </Badge>
                <span className="font-semibold text-violet-800 dark:text-violet-200">
                  Impuesto por unidad producida
                </span>
              </div>
              <FormulaDisplay math="C'(x) = C(x) + t \cdot x \implies CMg' = CMg + t" />
              <p className="text-muted-foreground">
                <strong>Ejemplo:</strong> el Estado cobra 2 euros por cada kilo
                de tomate producido. Es como si cada unidad costara 2 euros mas.
                El CMg se desplaza <em>hacia arriba</em> en{" "}
                <InlineMath math="t" />, asi que la empresa produce menos.
              </p>
              <p className="text-muted-foreground font-medium">
                <ArrowRight className="h-3 w-3 inline mr-1" />
                Afecta a la oferta: la desplaza hacia la izquierda.
              </p>
            </CardContent>
          </Card>

          {/* Impuesto sobre beneficio */}
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-4 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                  Sobre beneficio
                </Badge>
                <span className="font-semibold text-violet-800 dark:text-violet-200">
                  Porcentaje sobre el beneficio
                </span>
              </div>
              <FormulaDisplay math="\pi' = (1-\tau)\,\pi \implies \text{la CPO no cambia: } p = CMg" />
              <p className="text-muted-foreground">
                <strong>Ejemplo:</strong> impuesto de sociedades del 25%.
                La empresa paga un porcentaje de sus beneficios. Pero la
                cantidad que maximiza el beneficio antes de impuestos es la
                misma que maximiza el beneficio despues de impuestos.
              </p>
              <p className="text-muted-foreground font-medium">
                <ShieldCheck className="h-3 w-3 inline mr-1" />
                No afecta a la oferta: la empresa produce lo mismo.
              </p>
            </CardContent>
          </Card>

          {/* Impuesto fijo */}
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-4 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200">
                  Fijo
                </Badge>
                <span className="font-semibold text-violet-800 dark:text-violet-200">
                  Cantidad fija (licencia, tasa)
                </span>
              </div>
              <FormulaDisplay math="C'(x) = C(x) + F \implies CMg' = CMg, \; CMe' = CMe + \frac{F}{x}" />
              <p className="text-muted-foreground">
                <strong>Ejemplo:</strong> una tasa de 500 euros anuales por
                tener el puesto abierto. No depende de cuanto produces, asi que
                el CMg no cambia, pero el CMe sube.
              </p>
              <p className="text-muted-foreground font-medium">
                <ArrowRight className="h-3 w-3 inline mr-1" />
                No cambia la oferta CP, pero puede hacer que la empresa cierre a
                LP (si el CMe sube por encima del precio).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== 8. MAPA CONCEPTUAL ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Map className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            8. Mapa conceptual del tema
          </h2>
        </div>

        <Card className="bg-violet-50/30 dark:bg-violet-950/10 border-violet-200 dark:border-violet-800">
          <CardContent className="p-4 text-sm">
            <div className="space-y-4">
              {/* Nivel 1 */}
              <div className="text-center">
                <span className="inline-block bg-violet-200 dark:bg-violet-800 text-violet-900 dark:text-violet-100 font-semibold px-4 py-2 rounded-lg">
                  Empresa en competencia perfecta
                </span>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="h-5 w-5 text-violet-400 rotate-90" />
              </div>
              {/* Nivel 2 */}
              <div className="text-center">
                <span className="inline-block bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200 font-medium px-3 py-1.5 rounded-lg">
                  Objetivo: max beneficio
                </span>
                <span className="inline-block mx-2 text-muted-foreground">
                  <ArrowRight className="h-4 w-4 inline" />
                </span>
                <span className="inline-block bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200 font-medium px-3 py-1.5 rounded-lg">
                  CPO: p = CMg
                </span>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="h-5 w-5 text-violet-400 rotate-90" />
              </div>
              {/* Nivel 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3 bg-white/40 dark:bg-white/5 text-center space-y-1">
                  <p className="font-medium text-violet-800 dark:text-violet-200">
                    Oferta LP
                  </p>
                  <p className="text-muted-foreground">
                    <InlineMath math="CMg^L" /> encima de{" "}
                    <InlineMath math="\min CMe^L" />
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Cierre si <InlineMath math="p < \min CMe^L" />
                  </p>
                </div>
                <div className="border rounded-lg p-3 bg-white/40 dark:bg-white/5 text-center space-y-1">
                  <p className="font-medium text-violet-800 dark:text-violet-200">
                    Oferta CP
                  </p>
                  <p className="text-muted-foreground">
                    <InlineMath math="CMg^C" /> encima de{" "}
                    <InlineMath math="\min CVMe" />
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Cierre si <InlineMath math="p < \min CVMe" />
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ChevronRight className="h-5 w-5 text-violet-400 rotate-90" />
              </div>
              {/* Nivel 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border rounded-lg p-2 bg-white/40 dark:bg-white/5 text-center">
                  <p className="font-medium text-violet-800 dark:text-violet-200 text-xs">
                    Excedente productor
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <InlineMath math="EP = IT - CV" />
                  </p>
                </div>
                <div className="border rounded-lg p-2 bg-white/40 dark:bg-white/5 text-center">
                  <p className="font-medium text-violet-800 dark:text-violet-200 text-xs">
                    Impuestos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Unitario / Beneficio / Fijo
                  </p>
                </div>
                <div className="border rounded-lg p-2 bg-white/40 dark:bg-white/5 text-center">
                  <p className="font-medium text-violet-800 dark:text-violet-200 text-xs">
                    Beneficio
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <InlineMath math="\pi = IT - CT" />
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 9. CONEXION CON TEMAS ANTERIORES ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            9. Conexion con temas anteriores
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/10">
            <CardContent className="p-3 text-sm text-center space-y-2">
              <Factory className="h-5 w-5 text-blue-500 mx-auto" />
              <p className="font-semibold text-blue-800 dark:text-blue-200">
                Tema 1: Produccion
              </p>
              <p className="text-muted-foreground">
                Como producir: funcion de produccion, productividades, RMST
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Nos da la tecnologia
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/10">
            <CardContent className="p-3 text-sm text-center space-y-2">
              <DollarSign className="h-5 w-5 text-emerald-500 mx-auto" />
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Tema 2: Costes
              </p>
              <p className="text-muted-foreground">
                Cuanto cuesta: CT, CMe, CMg, costes CP vs LP
              </p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400">
                Nos da las curvas de coste
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/10">
            <CardContent className="p-3 text-sm text-center space-y-2">
              <TrendingUp className="h-5 w-5 text-violet-500 mx-auto" />
              <p className="font-semibold text-violet-800 dark:text-violet-200">
                Tema 3: Oferta
              </p>
              <p className="text-muted-foreground">
                Cuanto vender: oferta, beneficio, excedente, impuestos
              </p>
              <div className="text-xs text-violet-600 dark:text-violet-400">
                Decision final de la empresa
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <InlineMath math="f(L,K)" />
          <ArrowRight className="h-3 w-3 inline mx-2" />
          <InlineMath math="C(x)" />
          <ArrowRight className="h-3 w-3 inline mx-2" />
          <InlineMath math="x^s(p)" />
          <span className="ml-2">(Produccion → Costes → Oferta)</span>
        </div>
      </section>

      {/* ===== EJERCICIOS RESUELTOS ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-violet-500" />
          <h2 className="text-base sm:text-lg font-semibold">Ejercicios resueltos</h2>
        </div>
        <div className="space-y-3">
          {ejercicios.map((ej) => (
            <Link key={ej.num} href={ej.url} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-violet-200/40 dark:border-violet-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/5 group-hover:-translate-y-0.5 group-hover:border-violet-300/60 dark:group-hover:border-violet-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-violet-400 to-purple-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 text-white text-xs font-bold shadow-sm">
                      {ej.num}
                    </div>
                    <span className="font-medium text-sm sm:text-base group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">{ej.titulo}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== KIT MATEMATICO ===== */}
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
                <p className="text-xs text-muted-foreground">Derivadas, optimizaci&oacute;n e integrales desde cero</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>

      {/* ===== TEST AUTOEVALUACION ===== */}
      <Link href="/tema-3/test" className="group block">
        <div className="relative overflow-hidden rounded-xl border border-amber-200/40 dark:border-amber-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/5 group-hover:-translate-y-0.5 group-hover:border-amber-300/60 dark:group-hover:border-amber-700/60">
          <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center justify-between p-3.5 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-bold shadow-sm">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-sm sm:text-base group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">Test de autoevaluaci&oacute;n</span>
                <p className="text-xs text-muted-foreground">8 preguntas tipo examen para dominar el tema</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-amber-500 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
