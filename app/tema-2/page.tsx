"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  ArrowRight,
  Lightbulb,
  Layers,
  GitCompareArrows,
  TrendingDown,
  MapPin,
  Clock,
  Network,
  BookOpen,
  Calculator,
  CheckCircle,
} from "lucide-react";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import Link from "next/link";

const ejercicios = [
  { num: 1, titulo: "Funciones de coste (4 tipos)", url: "/tema-2/ejercicio-1" },
  { num: 2, titulo: "Minimo CMe a largo plazo", url: "/tema-2/ejercicio-2" },
  { num: 3, titulo: "Verdadero/Falso sobre costes", url: "/tema-2/ejercicio-3" },
];

export default function Tema2() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ── Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-green-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-300/20 dark:bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-300/20 dark:bg-teal-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs backdrop-blur-sm">
            Tema 2 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <DollarSign className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 dark:from-emerald-300 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              La Funci&oacute;n de Costes
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Gu&iacute;a completa &mdash; desde cero hasta la envolvente
          </p>
        </div>
      </div>

      {/* ── 1. De que trata este tema ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-emerald-500" />
            De que trata este tema
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            En el Tema 1 aprendimos <strong>como produce</strong> una empresa:
            mezcla trabajo (L) y capital (K) para fabricar unidades de producto
            (x). Ahora toca la pregunta mas importante para cualquier negocio:
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4 text-center">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-base sm:text-lg">
              &laquo;Cuanto me cuesta producir?&raquo;
            </p>
          </div>
          <p>
            Saber producir no basta. Una panaderia puede hacer 1.000 barras al
            dia, pero si cada barra le cuesta 5 euros y las vende a 2, esta
            perdiendo dinero. La funcion de costes traduce la tecnologia (cuanto
            necesito de cada factor) en dinero (cuanto me gasto).
          </p>
          <p>
            Este tema es el <strong>puente</strong> entre la produccion y la
            oferta. Sin entender costes, no puedes decidir cuanto producir, ni a
            que precio vender, ni si conviene abrir o cerrar.
          </p>
        </CardContent>
      </Card>

      {/* ── Formula central ── */}
      <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Formula central del tema</CardTitle>
        </CardHeader>
        <CardContent>
          <FormulaDisplay math="CT(x) = CF + CV(x) = w \cdot L^*(x) + r \cdot K^*(x)" />
          <p className="text-sm text-center text-muted-foreground mt-1">
            El coste total es lo que pagas por trabajo y capital para producir x
            unidades de la forma mas barata posible
          </p>
        </CardContent>
      </Card>

      {/* ── 2. Tipos de costes ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-500" />
            Tipos de costes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          <p>
            Antes de las formulas, hay que entender que no todos los gastos de
            una empresa son iguales. La clasificacion mas importante es:
          </p>

          {/* Coste fijo */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
              Coste fijo (CF) &mdash; &laquo;Lo pagas aunque no produzcas nada&raquo;
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Es como el <strong>alquiler</strong> de tu local. Produzcas 0 o
              1.000 unidades, pagas lo mismo cada mes. Tambien entran aqui los
              seguros, el salario del gerente, la amortizacion de maquinaria.
              En la formula: <InlineMath math="CF = r \cdot \bar{K}" /> en el
              corto plazo, donde{" "}
              <InlineMath math="\bar{K}" /> es el capital fijo.
            </p>
          </div>

          {/* Coste variable */}
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
              Coste variable (CV) &mdash; &laquo;Crece cuanto mas produces&raquo;
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Son las <strong>materias primas</strong>, la electricidad de las
              maquinas, los salarios de los operarios por hora. Si produces mas,
              compras mas harina, usas mas luz, contratas mas horas. En la
              formula: <InlineMath math="CV(x) = w \cdot L^*(x)" /> en el
              corto plazo.
            </p>
          </div>

          {/* Coste hundido */}
          <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-rose-800 dark:text-rose-200 mb-1">
              Coste hundido &mdash; &laquo;Dinero que ya no puedes recuperar&raquo;
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              Imagina que gastas 50.000 euros en <strong>I+D</strong> para
              disenar un producto. Si luego decides no fabricarlo, ese dinero no
              vuelve. Un coste hundido <strong>no debe influir</strong> en tus
              decisiones futuras: lo que importa es lo que esta por venir, no lo
              ya gastado. Es un error comun en empresas (y en la vida) seguir
              invirtiendo en algo solo porque &laquo;ya hemos gastado mucho&raquo;.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold mb-1">La formula clave:</p>
            <FormulaDisplay math="CT(x) = CF + CV(x)" />
            <p className="text-muted-foreground text-sm text-center">
              El coste total es siempre la suma de fijos y variables
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── 3. De la produccion a los costes ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <GitCompareArrows className="h-5 w-5 text-emerald-500" />
            De la produccion a los costes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            En el Tema 1 tenias la funcion de produccion:{" "}
            <InlineMath math="x = f(L, K)" />. Ahora la pregunta cambia. Ya no
            es &laquo;cuanto produzco con estos factores?&raquo;, sino:
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4 text-center">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              &laquo;Dado que quiero producir x unidades, cual es la combinacion
              de L y K que me sale mas barata?&raquo;
            </p>
          </div>
          <p>
            Es un problema de <strong>minimizacion</strong>. La empresa quiere
            gastar lo minimo posible para alcanzar un nivel de produccion
            objetivo. Matematicamente:
          </p>
          <FormulaDisplay math="\min_{L,K} \; w \cdot L + r \cdot K \quad \text{sujeto a} \quad f(L,K) = x" />
          <p>
            Donde <InlineMath math="w" /> es el salario por hora de trabajo y{" "}
            <InlineMath math="r" /> es el coste por unidad de capital
            (alquiler de maquinaria, por ejemplo).
          </p>
          <p>
            La solucion de este problema nos da las{" "}
            <strong>demandas condicionadas</strong> de factores:{" "}
            <InlineMath math="L^*(x)" /> y <InlineMath math="K^*(x)" />
            &mdash; es decir, cuanto trabajo y capital necesitas para cada
            nivel de produccion, gastando lo minimo. Al sustituir en el coste:
          </p>
          <FormulaDisplay math="C(x) = w \cdot L^*(x) + r \cdot K^*(x)" />
          <p>
            Y asi nace la <strong>funcion de costes</strong>: una funcion que
            solo depende de la cantidad producida x.
          </p>
        </CardContent>
      </Card>

      {/* ── 4. Isocostes ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-emerald-500" />
            Isocostes: tu presupuesto en un grafico
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            Recuerdas las <strong>isocuantas</strong> del Tema 1? Eran curvas
            que unian todas las combinaciones (L, K) que producen lo mismo. Las
            isocostes son su version para los costes:
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              Isocoste = todas las combinaciones de L y K que cuestan lo mismo
            </p>
            <FormulaDisplay math="C = w \cdot L + r \cdot K \quad \Rightarrow \quad K = \frac{C}{r} - \frac{w}{r} \cdot L" />
          </div>
          <p>
            <strong>Analogia:</strong> piensa en tu presupuesto mensual. Tienes
            1.000 euros y puedes gastartelos en comida o en ocio. La recta de
            presupuesto te dice todas las combinaciones posibles. Si la comida
            sube de precio, la recta se &laquo;gira&raquo; y puedes comprar menos
            comida con el mismo dinero.
          </p>
          <p>
            Con las isocostes pasa igual. Son rectas (no curvas) con pendiente{" "}
            <InlineMath math="-w/r" />. Si suben los salarios (w), la recta se
            inclina: el trabajo se vuelve relativamente mas caro y la empresa
            sustituira trabajo por capital.
          </p>
          <p>
            El <strong>optimo</strong> esta donde la isocoste mas baja posible
            toca (es tangente a) la isocuanta objetivo. En ese punto:
          </p>
          <FormulaDisplay math="RMST = \frac{PMg_L}{PMg_K} = \frac{w}{r}" />
          <p className="text-muted-foreground text-sm">
            Es decir, el ritmo al que puedes sustituir tecnicamente un factor
            por otro coincide exactamente con el ritmo al que el mercado te
            &laquo;cobra&raquo; esa sustitucion.
          </p>
        </CardContent>
      </Card>

      {/* ── 5. Coste medio vs marginal ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-emerald-500" />
            Coste medio vs coste marginal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                Coste medio (CMe)
              </p>
              <FormulaDisplay math="CMe(x) = \frac{CT(x)}{x}" />
              <p className="text-blue-900 dark:text-blue-100 text-sm">
                &laquo;Cuanto me cuesta en promedio cada unidad?&raquo;
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                Coste marginal (CMg)
              </p>
              <FormulaDisplay math="CMg(x) = \frac{dCT}{dx}" />
              <p className="text-emerald-900 dark:text-emerald-100 text-sm">
                &laquo;Cuanto me cuesta producir una unidad mas?&raquo;
              </p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              La analogia de las notas del examen
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Imagina que llevas 4 examenes con media de 6,0 (CMe = 6). Ahora
              haces el quinto examen:
            </p>
            <ul className="mt-2 space-y-2 text-amber-900 dark:text-amber-100">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                <span>
                  <strong>Sacas un 9 (CMg = 9 &gt; CMe):</strong> tu media
                  sube a 6,6. Cuando la &laquo;nota marginal&raquo; es mayor que la
                  media, la media sube.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-rose-500" />
                <span>
                  <strong>Sacas un 3 (CMg = 3 &lt; CMe):</strong> tu media
                  baja a 5,4. Cuando la marginal esta por debajo, la media
                  baja.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                <span>
                  <strong>Sacas un 6 (CMg = CMe):</strong> tu media se queda en
                  6,0. Cuando la marginal iguala a la media, la media no cambia
                  (esta en su minimo o maximo).
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold mb-2">La regla de oro CMe-CMg:</p>
            <ul className="space-y-1 text-sm">
              <li>
                Si <InlineMath math="CMg < CMe" /> &rarr; el CMe esta
                bajando (cada unidad nueva &laquo;abarata&raquo; la media)
              </li>
              <li>
                Si <InlineMath math="CMg > CMe" /> &rarr; el CMe esta
                subiendo (cada unidad nueva &laquo;encarece&raquo; la media)
              </li>
              <li>
                Si <InlineMath math="CMg = CMe" /> &rarr; el CMe esta en su{" "}
                <strong>minimo</strong> (punto de equilibrio)
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Por eso el CMg siempre corta al CMe en su punto minimo. Esto se
              cumple tanto en corto como en largo plazo.
            </p>
          </div>

          <p>
            <strong>Otro ejemplo:</strong> piensa en el consumo de gasolina de
            un coche. Si llevas una media de 6 L/100km (CMe) y en el ultimo
            tramo cuesta arriba gastas 10 L/100km (CMg), tu media subira. Si
            en el siguiente tramo cuesta abajo gastas 3 L/100km (CMg), tu media
            bajara. El marginal siempre &laquo;tira&raquo; de la media hacia el.
          </p>
        </CardContent>
      </Card>

      {/* ── 6. Senda de expansion y demandas condicionadas ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-500" />
            Senda de expansion y demandas condicionadas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            Ya sabemos que para cada nivel de produccion x hay una combinacion
            optima de L y K (la tangencia isocoste-isocuanta). Si unimos todos
            esos puntos optimos en un grafico, obtenemos una curva llamada{" "}
            <strong>senda de expansion</strong>.
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              Intuicion: el GPS de la empresa
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              La senda de expansion es como la ruta optima de un GPS. Si
              quieres ir de &laquo;producir 10&raquo; a &laquo;producir 100&raquo;, la senda te dice
              exactamente cuanto trabajo y capital anadir en cada paso para que
              el viaje sea lo mas barato posible. Cualquier otra ruta te saldra
              mas cara.
            </p>
          </div>
          <p>
            A lo largo de esta senda, cada punto nos da una pareja{" "}
            <InlineMath math="(L^*(x),\, K^*(x))" />. Estas son las{" "}
            <strong>demandas condicionadas de factores</strong>: te dicen cuanto
            de cada input necesitas para producir x al minimo coste. Se llaman
            &laquo;condicionadas&raquo; porque dependen del nivel de produccion que
            quieres alcanzar.
          </p>
          <FormulaDisplay math="\text{Senda: } RMST(L,K) = \frac{w}{r} \quad \text{junto con} \quad f(L,K) = x" />
          <p className="text-muted-foreground text-sm">
            Resolviendo este sistema obtienes{" "}
            <InlineMath math="L^*(x)" /> y <InlineMath math="K^*(x)" />, y al
            sustituir en <InlineMath math="C = wL + rK" /> llegas a la funcion
            de costes a largo plazo.
          </p>
        </CardContent>
      </Card>

      {/* ── 7. Corto vs largo plazo en costes ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-500" />
            Corto plazo vs largo plazo en costes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                Corto plazo (CP)
              </p>
              <p className="text-blue-900 dark:text-blue-100 text-sm">
                Al menos un factor esta fijo (normalmente K). Solo puedes
                ajustar L. Es como cocinar con un solo horno: si necesitas
                producir mas, contratas mas cocineros, pero no puedes comprar
                otro horno de la noche a la manana.
              </p>
              <div className="mt-2">
                <FormulaDisplay math="CT_{CP} = \underbrace{r\bar{K}}_{CF} + \underbrace{w \cdot L(x)}_{CV}" />
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 sm:p-4">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                Largo plazo (LP)
              </p>
              <p className="text-emerald-900 dark:text-emerald-100 text-sm">
                Todos los factores son variables. Puedes elegir L y K
                libremente. Es como montar un restaurante desde cero: eliges
                cuantos hornos comprar y cuantos cocineros contratar.
              </p>
              <div className="mt-2">
                <FormulaDisplay math="CT_{LP} = w \cdot L^*(x) + r \cdot K^*(x)" />
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 sm:p-4">
            <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              La envolvente: por que el LP siempre es mas barato (o igual)
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              En el CP estas &laquo;atrapado&raquo; con un K fijo. Para cada valor
              posible de K, tienes una curva de CMe distinta (una
              &laquo;U&raquo; diferente). La curva de CMe del largo plazo es la{" "}
              <strong>envolvente inferior</strong> de todas esas Us: toca cada
              curva de CP en un punto y siempre queda por debajo.
            </p>
            <p className="text-amber-900 dark:text-amber-100 mt-2">
              <strong>Analogia:</strong> imagina que tienes camisetas de 3
              tallas (S, M, L). Cada una te queda bien para un rango de
              contextos. La &laquo;talla optima&raquo; cambia segun la situacion. La
              envolvente es como tener un guardarropa completo: para cada
              ocasion, eliges la talla perfecta. En el CP, solo tienes una
              talla y a veces te queda grande o pequena.
            </p>
          </div>

          <FormulaDisplay math="CMe_{LP}(x) = \min_{\bar{K}} \; CMe_{CP}(x, \bar{K})" />
          <p className="text-muted-foreground text-sm text-center">
            El coste medio a largo plazo es el minimo de todos los costes medios
            a corto plazo posibles
          </p>
        </CardContent>
      </Card>

      {/* ── 8. Mapa conceptual ── */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Network className="h-5 w-5 text-emerald-500" />
            Mapa conceptual del tema
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm sm:text-base">
          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 sm:p-6">
            <div className="space-y-3">
              {/* Nivel 1 */}
              <div className="text-center">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm px-3 py-1">
                  Funcion de produccion f(L,K)
                </Badge>
                <p className="text-muted-foreground text-xs mt-1">
                  Tema 1: cuanto produces con cada combinacion
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>
              {/* Nivel 2 */}
              <div className="text-center">
                <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm px-3 py-1">
                  Minimizacion de costes (RMST = w/r)
                </Badge>
                <p className="text-muted-foreground text-xs mt-1">
                  Tangencia isocoste-isocuanta
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>
              {/* Nivel 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="text-center">
                  <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm px-3 py-1">
                    Senda de expansion
                  </Badge>
                  <p className="text-muted-foreground text-xs mt-1">
                    Ruta optima al crecer
                  </p>
                </div>
                <div className="text-center">
                  <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm px-3 py-1">
                    Demandas condicionadas L*(x), K*(x)
                  </Badge>
                  <p className="text-muted-foreground text-xs mt-1">
                    Cuanto de cada factor necesitas
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>
              {/* Nivel 4 */}
              <div className="text-center">
                <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm px-3 py-1">
                  Funcion de costes C(x) = wL* + rK*
                </Badge>
                <p className="text-muted-foreground text-xs mt-1">
                  Coste total segun produccion
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>
              {/* Nivel 5 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="text-center">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm px-3 py-1">
                    CMe = C/x
                  </Badge>
                  <p className="text-muted-foreground text-xs mt-1">
                    Coste por unidad
                  </p>
                </div>
                <div className="text-center">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm px-3 py-1">
                    CMg = dC/dx
                  </Badge>
                  <p className="text-muted-foreground text-xs mt-1">
                    Coste de una mas
                  </p>
                </div>
                <div className="text-center">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm px-3 py-1">
                    CVMe = CV/x
                  </Badge>
                  <p className="text-muted-foreground text-xs mt-1">
                    Variable por unidad
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
              </div>
              {/* Nivel 6 */}
              <div className="text-center">
                <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 text-sm px-3 py-1">
                  Oferta competitiva (Tema 3)
                </Badge>
                <p className="text-muted-foreground text-xs mt-1">
                  Cuanto producir y a que precio vender
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── 9. Conexion con lo que viene ── */}
      <Card className="border-violet-200 dark:border-violet-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-violet-500" />
            Conexion con lo que viene (Tema 3)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            Una vez que la empresa conoce sus costes, puede responder la
            pregunta definitiva: <strong>cuanto producir?</strong>
          </p>
          <p>
            En el Tema 3 (Oferta Competitiva) veras que una empresa
            precio-aceptante produce donde{" "}
            <InlineMath math="p = CMg(x)" /> &mdash; el precio iguala al coste
            marginal. Pero para eso necesitas conocer el CMg, y para eso
            necesitas la funcion de costes de este tema.
          </p>
          <div className="bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3 sm:p-4">
            <p className="text-violet-900 dark:text-violet-100">
              <strong>La cadena completa:</strong> Tecnologia (Tema 1) &rarr;
              Costes (Tema 2) &rarr; Oferta (Tema 3). Cada pieza depende de la
              anterior. Sin dominar los costes, la oferta queda en el aire.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── 10. Ejercicios resueltos ── */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-500" />
          <h2 className="text-base sm:text-lg font-semibold">Ejercicios resueltos</h2>
        </div>
        <div className="space-y-3">
          {ejercicios.map((ej) => (
            <Link key={ej.num} href={ej.url} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-emerald-200/40 dark:border-emerald-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/5 group-hover:-translate-y-0.5 group-hover:border-emerald-300/60 dark:group-hover:border-emerald-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-xs font-bold shadow-sm">
                      {ej.num}
                    </div>
                    <span className="font-medium text-sm sm:text-base group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">{ej.titulo}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-emerald-500 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 11. Kit Matematico ── */}
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

      {/* ── 12. Test de autoevaluacion ── */}
      <Link href="/tema-2/test" className="group block">
        <div className="relative overflow-hidden rounded-xl border border-amber-200/40 dark:border-amber-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/5 group-hover:-translate-y-0.5 group-hover:border-amber-300/60 dark:group-hover:border-amber-700/60">
          <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center justify-between p-3.5 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-bold shadow-sm">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-sm sm:text-base group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">Test de autoevaluaci&oacute;n</span>
                <p className="text-xs text-muted-foreground">8 preguntas para comprobar que dominas los costes</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-amber-500 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
