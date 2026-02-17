"use client";

import Link from "next/link";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

export default function Ejercicio3() {

  return (
    <ExerciseLayout
      tema={3}
      exerciseNumber={3}
      title="Oferta LP e Impuestos"
      difficulty="Alto"
      category="Oferta LP e Impuestos"
      statement={
        <div className="space-y-2">
          <p>
            Considere una empresa con unos costes a largo plazo tal que{" "}
            <InlineMath math="C^L = x^3 - 10x^2 + 100x" />:
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>Determina la curva de oferta a largo plazo.</li>
            <li>
              El rango de precios para los que la empresa: No produce, produce con
              p&eacute;rdidas, produce con beneficios.
            </li>
            <li>
              Si se introdujera un impuesto de 5&euro; por unidad vendida,
              &iquest;c&oacute;mo cambia la curva de oferta a largo plazo?
            </li>
            <li>&iquest;Y si el impuesto es de 5&euro; sobre el beneficio?</li>
            <li>
              &iquest;Y si tiene que pagar 5&euro; independientemente de que
              produzca o no?
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-3/ejercicio-2"
      nextUrl="/tema-3/ejercicio-4"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio combina <strong>derivadas</strong> (para CMg y CMe) con{" "}
            <strong>optimización</strong> (minimizar CMe). Si necesitas repasar estos conceptos:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas →
              </Badge>
            </Link>
            <Link href="/toolkit/optimizacion">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Optimización →
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* ============ PASO 1 ============ */}
      <StepCard
        stepNumber={1}
        title="&iquest;Qu&eacute; vamos a aprender?"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Oferta LP vs CP: la diferencia clave
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que tienes un <strong>restaurante</strong>. A corto plazo, si el precio
              de los men&uacute;s no cubre ni los ingredientes, cierras temporalmente (pero sigues pagando alquiler).
              A <strong>largo plazo</strong>, si no cubres <em>todos</em> los costes (alquiler incluido),
              te vas del mercado definitivamente. La diferencia: en CP comparamos con CVMe,
              en LP comparamos con CMe total.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;C&oacute;mo afectan los impuestos?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              No todos los impuestos son iguales: un impuesto <strong>unitario</strong> (por unidad producida)
              afecta al coste marginal, un impuesto <strong>sobre beneficio</strong> no cambia la
              decisi&oacute;n de producci&oacute;n, y un impuesto <strong>fijo</strong> (lump-sum) sube el CMe
              pero no el CMg. Vamos a ver las tres diferencias.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2: Tabs ============ */}
      <StepCard
        stepNumber={2}
        title="Resoluci&oacute;n por apartados"
        variant="calculation"
      >
        <Tabs defaultValue="a" className="w-full">
          <TabsList className="w-full flex flex-wrap">
            <TabsTrigger value="a" className="flex-1 min-w-0 text-xs sm:text-sm">a) Oferta LP</TabsTrigger>
            <TabsTrigger value="b" className="flex-1 min-w-0 text-xs sm:text-sm">b) Rangos p</TabsTrigger>
            <TabsTrigger value="c" className="flex-1 min-w-0 text-xs sm:text-sm">c) Unitario</TabsTrigger>
            <TabsTrigger value="d" className="flex-1 min-w-0 text-xs sm:text-sm">d) Beneficio</TabsTrigger>
            <TabsTrigger value="e" className="flex-1 min-w-0 text-xs sm:text-sm">e) Fijo</TabsTrigger>
          </TabsList>

          {/* ---- TAB A ---- */}
          <TabsContent value="a" className="space-y-3 mt-3">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  a) Curva de oferta a largo plazo
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  En LP no hay CF separados: todos los costes son variables. La condici&oacute;n
                  de cierre es <InlineMath math="p \geq \min CMeL" />.
                </p>
              </CardContent>
            </Card>

            <p className="text-sm font-medium">Costes medios y marginales:</p>
            <FormulaDisplay math="CMeL = \frac{C_L}{x} = x^2 - 10x + 100" />
            <FormulaDisplay math="CMgL = C_L'(x) = 3x^2 - 20x + 100" />

            <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
              <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                ¿Cómo se obtiene el CMgL?
              </summary>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Derivamos <InlineMath math="C_L = x^3 - 10x^2 + 100x" /> término a término:</p>
                <p><InlineMath math="x^3 \to 3x^2" /></p>
                <p><InlineMath math="-10x^2 \to -20x" /></p>
                <p><InlineMath math="100x \to 100" /></p>
                <p>Juntando: <InlineMath math="3x^2 - 20x + 100" /></p>
              </div>
            </details>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  M&iacute;nimo de CMeL
                </p>
                <FormulaDisplay math="\frac{d(CMeL)}{dx} = 2x - 10 = 0 \implies x = 5" />
                <FormulaDisplay math="CMeL(5) = 25 - 50 + 100 = 75" />
                <p className="text-emerald-900 dark:text-emerald-100">
                  Verificaci&oacute;n: CMgL(5) = 75 - 100 + 100 = 75 = CMeL(5) &check;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Oferta LP
                </p>
                <p className="text-amber-900 dark:text-amber-100">
                  La curva de oferta es el tramo creciente del CMgL por encima de 75:
                </p>
                <FormulaDisplay math="S(p) = \begin{cases} x \text{ tal que } p = 3x^2 - 20x + 100 & \text{si } p \geq 75 \\ 0 & \text{si } p < 75 \end{cases}" />
              </CardContent>
            </Card>

            <EconChart xRange={[-0.5, 10.5]} yRange={[-10, 210]}>
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 100)} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : 3 * x * x - 20 * x + 100)} color={COLORS.rose} weight={2.5} />
              <Line.Segment point1={[0, 75]} point2={[10.5, 75]} color={COLORS.amber} style="dashed" weight={1} opacity={0.6} />
              <Point x={5} y={75} color={COLORS.amber} />
              <Text x={8.5} y={82} size={11} color={COLORS.amber}>p = 75</Text>
              <Text x={7.5} y={130} size={12} color={COLORS.blue}>CMeL</Text>
              <Text x={8.5} y={190} size={12} color={COLORS.rose}>CMgL</Text>
              <Text x={10.2} y={-6} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMeL", color: COLORS.blue },
              { label: "CMgL", color: COLORS.rose },
            ]} />

            <ResultCard label="Precio mínimo LP" value="75€ (x = 5)" />
          </TabsContent>

          {/* ---- TAB B ---- */}
          <TabsContent value="b" className="space-y-3 mt-3">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  b) Rangos de precios
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  El m&iacute;nimo del CMe marca la frontera entre beneficio y p&eacute;rdida.
                  En LP, la empresa puede ajustar todos sus factores, as&iacute; que si el
                  precio no cubre el CMe, sale del mercado.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
                <CardContent className="p-3 text-sm">
                  <p className="font-semibold text-rose-800 dark:text-rose-200">
                    p &lt; 75: NO PRODUCE
                  </p>
                  <p className="text-rose-900 dark:text-rose-100">
                    El precio no cubre los costes medios. La empresa sale del mercado.
                    En LP no hay CF que perder, as&iacute; que <InlineMath math="\pi(0) = 0" />.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-3 text-sm">
                  <p className="font-semibold text-amber-800 dark:text-amber-200">
                    p = 75: BENEFICIO CERO
                  </p>
                  <p className="text-amber-900 dark:text-amber-100">
                    Produce x=5, pero <InlineMath math="\pi = 75 \cdot 5 - C_L(5) = 375 - 375 = 0" />.
                    Es el <strong>punto de nivelaci&oacute;n</strong>: sobrevive pero no gana.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-3 text-sm">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                    p &gt; 75: BENEFICIO POSITIVO
                  </p>
                  <p className="text-emerald-900 dark:text-emerald-100">
                    Produce donde p = CMgL y obtiene beneficio.
                    Por ejemplo, con p=100: CMgL = 100 &rarr; 3x&sup2; - 20x = 0 &rarr; x(3x-20) = 0 &rarr;
                    x &cong; 6,67. <InlineMath math="\pi = 100 \cdot 6{,}67 - C_L(6{,}67) \approx 83{,}3" />.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ---- TAB C ---- */}
          <TabsContent value="c" className="space-y-3 mt-3">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  c) Impuesto unitario de 5&euro;
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  Un impuesto de 5&euro; por unidad producida se suma al coste variable.
                  Es como si cada unidad costara 5&euro; m&aacute;s de producir.
                </p>
              </CardContent>
            </Card>

            <FormulaDisplay math="C'(x) = C_L(x) + 5x = x^3 - 10x^2 + 105x" />

            <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
              <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                ¿Por qué se suma 5x y no solo 5?
              </summary>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>El impuesto es de 5€ <strong>por cada unidad</strong> producida.</p>
                <p>Si produces 1 unidad, pagas 5€ de impuesto.</p>
                <p>Si produces 10 unidades, pagas 50€ de impuesto.</p>
                <p>En general, si produces x unidades, pagas <InlineMath math="5 \cdot x" /> de impuesto.</p>
                <p>Por eso se suma <InlineMath math="5x" /> al coste total, no 5.</p>
              </div>
            </details>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-3 text-sm space-y-1">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-200">Nuevo CMeL</p>
                  <FormulaDisplay math="CMeL' = x^2 - 10x + 105" />
                </CardContent>
              </Card>
              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-3 text-sm space-y-1">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-200">Nuevo CMgL</p>
                  <FormulaDisplay math="CMgL' = 3x^2 - 20x + 105" />
                </CardContent>
              </Card>
            </div>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  Nuevo m&iacute;nimo CMeL
                </p>
                <FormulaDisplay math="x^* = 5 \text{ (no cambia)}, \quad CMeL'(5) = 25 - 50 + 105 = 80" />
                <p className="text-emerald-900 dark:text-emerald-100">
                  El precio m&iacute;nimo sube de 75 a <strong>80</strong>: exactamente 5&euro; m&aacute;s
                  (la cuant&iacute;a del impuesto).
                </p>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.5, 10.5]} yRange={[-10, 210]}>
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 105)} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : 3 * x * x - 20 * x + 105)} color={COLORS.rose} weight={2.5} />
              <Line.Segment point1={[0, 80]} point2={[10.5, 80]} color={COLORS.amber} style="dashed" weight={1} opacity={0.6} />
              <Point x={5} y={80} color={COLORS.amber} />
              <Text x={8.5} y={87} size={11} color={COLORS.amber}>p = 80</Text>
              <Text x={7.5} y={135} size={12} color={COLORS.blue}>CMeL&apos;</Text>
              <Text x={8.5} y={195} size={12} color={COLORS.rose}>CMgL&apos;</Text>
              <Text x={10.2} y={-6} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMeL (unit.)", color: COLORS.blue },
              { label: "CMgL (unit.)", color: COLORS.rose },
            ]} />

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Conclusi&oacute;n: el impuesto unitario desplaza TODO hacia arriba
                </p>
                <p className="text-amber-900 dark:text-amber-100">
                  Tanto el CMg como el CMe suben en 5&euro;. La curva de oferta se desplaza
                  hacia arriba. A cada precio, la empresa produce menos.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="Nuevo precio mínimo" value="80€ (+5 respecto al original)" />
          </TabsContent>

          {/* ---- TAB D ---- */}
          <TabsContent value="d" className="space-y-3 mt-3">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  d) Impuesto sobre el beneficio de 5&euro;
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  Este impuesto se paga <em>sobre el beneficio obtenido</em>, no sobre
                  cada unidad. Es una cantidad fija que se resta del beneficio final.
                </p>
              </CardContent>
            </Card>

            <FormulaDisplay math="\pi' = p \cdot x - C_L(x) - 5 = \pi - 5" />

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  &iquest;Cambia la decisi&oacute;n de producci&oacute;n?
                </p>
                <FormulaDisplay math="\frac{d\pi'}{dx} = p - CMgL = 0 \implies p = CMgL" />
                <p className="text-emerald-900 dark:text-emerald-100">
                  <strong>NO.</strong> La condici&oacute;n de primer orden es id&eacute;ntica.
                  Restar una constante no cambia la derivada. La empresa produce la misma cantidad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-3 text-sm space-y-2">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Pero s&iacute; cambia la viabilidad
                </p>
                <p className="text-amber-900 dark:text-amber-100">
                  Para que la empresa quiera estar en el mercado, necesita <InlineMath math="\pi' \geq 0" />:
                </p>
                <FormulaDisplay math="p \cdot x - C_L(x) \geq 5" />
                <p className="text-amber-900 dark:text-amber-100">
                  En x=5 (punto de nivelaci&oacute;n original): <InlineMath math="5p - 375 \geq 5" />,
                  luego <InlineMath math="p \geq 76" />.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ResultCard label="Oferta (CMg)" value="No cambia" />
              <ResultCard label="Nuevo precio mínimo" value="76€ (antes 75)" />
            </div>

            <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  Cuidado: distinci&oacute;n sutil
                </p>
                <p className="text-rose-900 dark:text-rose-100">
                  La curva de oferta (p = CMg) no se mueve. Pero el precio al que la empresa
                  decide entrar/salir s&iacute; sube ligeramente, de 75 a 76.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ---- TAB E ---- */}
          <TabsContent value="e" className="space-y-3 mt-3">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  e) Impuesto fijo de 5&euro; (lump-sum)
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  Un impuesto fijo es como un alquiler extra: se paga independientemente de
                  cu&aacute;nto se produce. No depende de x.
                </p>
              </CardContent>
            </Card>

            <FormulaDisplay math="C'(x) = C_L(x) + 5 = x^3 - 10x^2 + 100x + 5" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-3 text-sm space-y-1">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-200">Nuevo CMeL</p>
                  <FormulaDisplay math="CMeL' = x^2 - 10x + 100 + \frac{5}{x}" />
                  <p className="text-emerald-900 dark:text-emerald-100 text-xs">Sube (el t&eacute;rmino 5/x)</p>
                </CardContent>
              </Card>
              <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-3 text-sm space-y-1">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-200">Nuevo CMgL</p>
                  <FormulaDisplay math="CMgL' = 3x^2 - 20x + 100" />
                  <p className="text-emerald-900 dark:text-emerald-100 text-xs">NO cambia (derivada de constante = 0)</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  Nuevo m&iacute;nimo CMeL
                </p>
                <FormulaDisplay math="\frac{d(CMeL')}{dx} = 2x - 10 - \frac{5}{x^2} = 0" />
                <p className="text-emerald-900 dark:text-emerald-100">
                  Esta ecuaci&oacute;n no tiene soluci&oacute;n anal&iacute;tica sencilla.
                  Num&eacute;ricamente, x* &cong; 5,12 y CMeL&apos;(5,12) &cong; 75,97.
                </p>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.5, 10.5]} yRange={[-10, 210]}>
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 100 + 5 / x)} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => (x <= 0.1 ? NaN : 3 * x * x - 20 * x + 100)} color={COLORS.rose} weight={2.5} />
              <Line.Segment point1={[0, 75.97]} point2={[10.5, 75.97]} color={COLORS.amber} style="dashed" weight={1} opacity={0.6} />
              <Text x={8.5} y={83} size={11} color={COLORS.amber}>p &#x2248; 76</Text>
              <Text x={7.5} y={130} size={12} color={COLORS.blue}>CMeL&apos;</Text>
              <Text x={8.5} y={190} size={12} color={COLORS.rose}>CMgL</Text>
              <Text x={10.2} y={-6} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMeL (fijo)", color: COLORS.blue },
              { label: "CMgL (no cambia)", color: COLORS.rose },
            ]} />

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  Conclusi&oacute;n: impuesto fijo no afecta al margen
                </p>
                <p className="text-amber-900 dark:text-amber-100">
                  El CMg no cambia &rarr; la cantidad producida a cada precio no cambia.
                  Solo sube el CMe ligeramente, lo que eleva el precio m&iacute;nimo de viabilidad
                  de 75 a &cong;76.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="CMg" value="No cambia" />
            <ResultCard label="Nuevo precio mínimo" value="≈76€ (antes 75)" />
          </TabsContent>
        </Tabs>
      </StepCard>

      {/* ============ PASO 3: Comparativa ============ */}
      <StepCard
        stepNumber={3}
        title="Comparativa de impuestos"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Los tres impuestos en un solo gr&aacute;fico
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Observa c&oacute;mo cada impuesto afecta de forma distinta a las curvas de costes.
              El unitario es el m&aacute;s distorsionante.
            </p>
          </CardContent>
        </Card>

        <EconChart xRange={[-0.5, 10.5]} yRange={[-10, 210]}>
          {/* Originales */}
          <Plot.OfX y={(x) => (x <= 0.1 ? NaN : 3 * x * x - 20 * x + 100)} color={COLORS.rose} weight={2} />
          <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 100)} color={COLORS.blue} weight={1.5} />
          {/* Con impuesto unitario */}
          <Plot.OfX y={(x) => (x <= 0.1 ? NaN : 3 * x * x - 20 * x + 105)} color={COLORS.violet} weight={2} opacity={0.7} />
          <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 105)} color={COLORS.cyan} weight={1.5} opacity={0.7} />
          {/* Con impuesto fijo */}
          <Plot.OfX y={(x) => (x <= 0.1 ? NaN : x * x - 10 * x + 100 + 5 / x)} color={COLORS.amber} weight={1.5} opacity={0.7} />
          <Text x={10.2} y={-6} size={14}>x</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMgL (original)", color: COLORS.rose },
          { label: "CMgL (+5 unit.)", color: COLORS.violet },
          { label: "CMeL (original)", color: COLORS.blue },
          { label: "CMeL (+5 unit.)", color: COLORS.cyan },
          { label: "CMeL (+5 fijo)", color: COLORS.amber },
        ]} />

        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border px-2 py-1.5 text-left font-semibold">Impuesto</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CMg</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CMe</th>
                <th className="border px-2 py-1.5 text-center font-semibold">P m&iacute;n</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1 font-medium">Sin impuesto</td>
                <td className="border px-2 py-1 text-center">3x&sup2; - 20x + 100</td>
                <td className="border px-2 py-1 text-center">x&sup2; - 10x + 100</td>
                <td className="border px-2 py-1 text-center font-bold">75</td>
              </tr>
              <tr className="bg-rose-50 dark:bg-rose-950/10">
                <td className="border px-2 py-1 font-medium">Unitario (5&euro;)</td>
                <td className="border px-2 py-1 text-center">+5 &uarr;</td>
                <td className="border px-2 py-1 text-center">+5 &uarr;</td>
                <td className="border px-2 py-1 text-center font-bold">80</td>
              </tr>
              <tr className="bg-amber-50 dark:bg-amber-950/10">
                <td className="border px-2 py-1 font-medium">Sobre beneficio (5&euro;)</td>
                <td className="border px-2 py-1 text-center">= (no cambia)</td>
                <td className="border px-2 py-1 text-center">= (no cambia)</td>
                <td className="border px-2 py-1 text-center font-bold">76</td>
              </tr>
              <tr className="bg-blue-50 dark:bg-blue-950/10">
                <td className="border px-2 py-1 font-medium">Fijo (5&euro;)</td>
                <td className="border px-2 py-1 text-center">= (no cambia)</td>
                <td className="border px-2 py-1 text-center">+5/x &uarr;</td>
                <td className="border px-2 py-1 text-center font-bold">&cong;76</td>
              </tr>
            </tbody>
          </table>
        </div>
      </StepCard>

      {/* ============ PASO 4: Resumen ============ */}
      <StepCard stepNumber={4} title="Resumen de resultados" variant="result">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ResultCard label="Oferta LP original" value="CMgL ≥ 75" />
          <ResultCard label="Nivelación" value="p = 75, x = 5" />
          <ResultCard label="Imp. unitario" value="CMg ↑ 5, CMe ↑ 5, p≥ 80" />
          <ResultCard label="Imp. beneficio" value="CMg =, CMe =, p ≥ 76" />
          <ResultCard label="Imp. fijo" value="CMg =, CMe ↑, p ≥ ≈76" />
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores comunes a evitar
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Pensar que un impuesto fijo cambia el CMg (no, solo cambia CMe).</li>
              <li>Confundir LP con CP: en LP, la condici&oacute;n de cierre usa CMe total, no CVMe.</li>
              <li>Asumir que el impuesto sobre beneficio no tiene ning&uacute;n efecto (s&iacute; afecta a la viabilidad).</li>
              <li>Olvidar que el impuesto unitario desplaza <em>tanto</em> CMg <em>como</em> CMe.</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-violet-800 dark:text-violet-200">
            Conexión con el tema
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Los impuestos son herramientas del gobierno para influir en la producción. El <strong>unitario</strong>{" "}
            es el más distorsionante (cambia CMg y CMe), mientras que el <strong>fijo</strong> es el menos
            (solo afecta CMe). En el{" "}
            <Link href="/tema-3/ejercicio-4" className="text-violet-600 dark:text-violet-400 underline">último ejercicio</Link>,
            veremos el <strong>excedente del productor</strong>, que mide cuánto gana la empresa por producir.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
