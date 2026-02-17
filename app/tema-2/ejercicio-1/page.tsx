"use client";

import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Plot, Text, Point } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

export default function Ejercicio1() {
  return (
    <ExerciseLayout
      tema={2}
      exerciseNumber={1}
      title="Cuatro Funciones de Coste"
      difficulty="Medio"
      category="Costes"
      statement={
        <div className="space-y-2">
          <p>
            Sean las siguientes curvas de costes totales a largo plazo:
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              <InlineMath math="C(x) = 2x" />
            </li>
            <li>
              <InlineMath math="C(x) = 2x^2" />
            </li>
            <li>
              <InlineMath math="C(x) = 2x^{0.5}" />
            </li>
            <li>
              <InlineMath math="C(x) = x^3 - 2x^2 + 2x" />
            </li>
          </ol>
          <p>
            A partir de cada una de ellas obtenga las curvas de costes medios y
            marginales. Represente las curvas anteriores, indicando la relaci&oacute;n
            existente entre las mismas.
          </p>
        </div>
      }
      prevUrl="/tema-1/test"
      nextUrl="/tema-2/ejercicio-2"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Para obtener el CMg necesitamos <strong>derivar</strong> la función de costes.
            Si no sabes qué es una derivada o cómo se aplica la regla de la potencia,
            revisa el kit matemático primero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas desde cero →
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* ============ PASO 1: ¿Qué vamos a aprender? ============ */}
      <StepCard
        stepNumber={1}
        title="¿Que vamos a aprender?"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Las dos curvas mas importantes de la microeconomia
            </p>
            <p>
              El <strong>Coste Medio (CMe)</strong> responde a: &laquo;¿Cuanto me
              cuesta cada unidad en promedio?&raquo;
            </p>
            <p>
              El <strong>Coste Marginal (CMg)</strong> responde a: &laquo;¿Cuanto
              me cuesta producir UNA unidad mas?&raquo;
            </p>
            <p>
              La relacion entre ambas nos dice si la empresa se esta volviendo
              mas eficiente o menos eficiente al producir mas.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold">Analogia: Tu nota media</p>
            <p className="text-muted-foreground">
              Imagina que tu nota media es un <strong>7</strong>. Si sacas un{" "}
              <strong>9</strong> en el proximo examen (nota marginal = 9), tu
              media <strong>sube</strong>. Si sacas un <strong>5</strong> (nota
              marginal = 5), tu media <strong>baja</strong>.
            </p>
            <p className="text-muted-foreground">
              Es exactamente igual con los costes:{" "}
              <strong>si CMg &lt; CMe, el CMe baja</strong>. Si{" "}
              <strong>CMg &gt; CMe, el CMe sube</strong>. Y cuando{" "}
              <strong>CMg = CMe, el CMe esta en su minimo</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2: Fórmulas generales ============ */}
      <StepCard
        stepNumber={2}
        title="Formulas generales"
        variant="explanation"
      >
        <p>
          A partir de cualquier funcion de costes totales{" "}
          <InlineMath math="C(x)" />, obtenemos:
        </p>
        <FormulaDisplay math="CMe(x) = \frac{C(x)}{x} \qquad CMg(x) = \frac{dC}{dx}" />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Regla clave: CMg corta a CMe en su minimo
            </p>
            <p className="text-muted-foreground">
              Esto ocurre siempre. Es una propiedad matematica: la derivada de
              CMe se anula exactamente cuando CMg = CMe.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Relacion con rendimientos a escala
            </p>
            <ul className="list-disc pl-4 text-muted-foreground space-y-1">
              <li>
                <strong>CMg &lt; CMe (CMe decreciente):</strong> Rendimientos
                crecientes. Cada unidad extra es mas barata que la media.
              </li>
              <li>
                <strong>CMg = CMe (CMe constante o minimo):</strong>{" "}
                Rendimientos constantes.
              </li>
              <li>
                <strong>CMg &gt; CMe (CMe creciente):</strong> Rendimientos
                decrecientes. Cada unidad extra es mas cara que la media.
              </li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 3: Análisis de cada función ============ */}
      <StepCard
        stepNumber={3}
        title="Analisis de cada funcion de costes"
        variant="calculation"
      >
        <Tabs defaultValue="a" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="a">a</TabsTrigger>
            <TabsTrigger value="b">b</TabsTrigger>
            <TabsTrigger value="c">c</TabsTrigger>
            <TabsTrigger value="d">d</TabsTrigger>
          </TabsList>

          {/* ======== TAB A: C(x) = 2x ======== */}
          <TabsContent value="a" className="space-y-3 mt-3">
            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  a) <InlineMath math="C(x) = 2x" />
                </p>
                <div className="space-y-1">
                  <p>Coste Medio:</p>
                  <FormulaDisplay math="CMe(x) = \frac{2x}{x} = 2" />
                  <p>Coste Marginal:</p>
                  <FormulaDisplay math="CMg(x) = \frac{d(2x)}{dx} = 2" />
                </div>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.2, 5.5]} yRange={[-0.5, 5]}>
              <Plot.OfX y={() => 2} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={() => 2} color={COLORS.emerald} weight={2} style="dashed" />
              <Text x={4} y={2.4} size={13} color={COLORS.blue}>CMe = CMg = 2</Text>
              <Text x={5.2} y={-0.3} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMe = 2", color: COLORS.blue },
              { label: "CMg = 2", color: COLORS.emerald, dashed: true },
            ]} />

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  ¿Que significa?
                </p>
                <p className="text-muted-foreground">
                  Ambas curvas son <strong>rectas horizontales</strong> que se
                  superponen. Cada unidad cuesta exactamente lo mismo:{" "}
                  <strong>2 euros</strong>. Es como una fabrica con capacidad
                  ilimitada: da igual si produces 1 o 1 millon, el coste por
                  unidad no cambia.
                </p>
              </CardContent>
            </Card>

            <ResultCard
              label="Rendimientos"
              value="Constantes (CMe = CMg = constante)"
            />
          </TabsContent>

          {/* ======== TAB B: C(x) = 2x² ======== */}
          <TabsContent value="b" className="space-y-3 mt-3">
            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  b) <InlineMath math="C(x) = 2x^2" />
                </p>
                <div className="space-y-1">
                  <p>Coste Medio:</p>
                  <FormulaDisplay math="CMe(x) = \frac{2x^2}{x} = 2x" />
                  <p>Coste Marginal:</p>
                  <FormulaDisplay math="CMg(x) = \frac{d(2x^2)}{dx} = 4x" />
                  <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
                    <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                      ¿De dónde sale el 4x?
                    </summary>
                    <div className="mt-2 space-y-1 text-muted-foreground">
                      <p><strong>Regla de la potencia</strong> aplicada a <InlineMath math="2x^2" />:</p>
                      <p>1. El exponente (2) baja multiplicando: <InlineMath math="2 \times 2 = 4" /></p>
                      <p>2. El exponente se reduce en 1: <InlineMath math="x^{2-1} = x" /></p>
                      <p>Resultado: <InlineMath math="4x" /></p>
                    </div>
                  </details>
                </div>
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-2 text-sm">
                    <p className="text-amber-800 dark:text-amber-200">
                      Observa: <InlineMath math="CMg = 4x = 2 \cdot CMe" />.
                      El marginal es siempre el doble del medio.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.2, 5.5]} yRange={[-1, 22]}>
              <Plot.OfX y={(x) => 2 * x} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => 4 * x} color={COLORS.emerald} weight={2.5} />
              <Text x={4} y={9} size={13} color={COLORS.blue}>CMe = 2x</Text>
              <Text x={3} y={13} size={13} color={COLORS.emerald}>CMg = 4x</Text>
              <Text x={5.2} y={-0.5} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMe = 2x", color: COLORS.blue },
              { label: "CMg = 4x", color: COLORS.emerald },
            ]} />

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  ¿Que significa?
                </p>
                <p className="text-muted-foreground">
                  Ambas curvas son <strong>rectas crecientes</strong> desde el
                  origen, pero el CMg crece el doble de rapido. Como{" "}
                  <InlineMath math="CMg > CMe" /> para todo{" "}
                  <InlineMath math="x > 0" />, el CMe{" "}
                  <strong>siempre esta subiendo</strong>. Cada unidad adicional
                  es mas cara que la anterior. Es la situacion de una empresa
                  que se esta &laquo;ahogando&raquo;: cuanto mas produce, peor.
                </p>
              </CardContent>
            </Card>

            <ResultCard
              label="Rendimientos"
              value="Decrecientes (CMg > CMe siempre, CMe creciente)"
            />
          </TabsContent>

          {/* ======== TAB C: C(x) = 2√x ======== */}
          <TabsContent value="c" className="space-y-3 mt-3">
            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  c) <InlineMath math="C(x) = 2\sqrt{x} = 2x^{0.5}" />
                </p>
                <div className="space-y-1">
                  <p>Coste Medio:</p>
                  <FormulaDisplay math="CMe(x) = \frac{2\sqrt{x}}{x} = \frac{2}{\sqrt{x}} = 2x^{-0.5}" />
                  <p>Coste Marginal:</p>
                  <FormulaDisplay math="CMg(x) = \frac{d(2x^{0.5})}{dx} = \frac{1}{\sqrt{x}} = x^{-0.5}" />
                  <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
                    <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                      ¿Cómo se deriva una raíz?
                    </summary>
                    <div className="mt-2 space-y-1 text-muted-foreground">
                      <p>Reescribimos <InlineMath math="2\sqrt{x} = 2x^{0.5}" /> y aplicamos la regla de la potencia:</p>
                      <p>1. El exponente (0.5) baja: <InlineMath math="2 \times 0.5 = 1" /></p>
                      <p>2. El exponente se reduce: <InlineMath math="x^{0.5-1} = x^{-0.5} = \frac{1}{\sqrt{x}}" /></p>
                    </div>
                  </details>
                </div>
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-2 text-sm">
                    <p className="text-amber-800 dark:text-amber-200">
                      Observa: <InlineMath math="CMg = \frac{1}{\sqrt{x}} = \frac{CMe}{2}" />.
                      El marginal es siempre la mitad del medio.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.3, 10.5]} yRange={[-0.3, 5]}>
              <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 2 / Math.sqrt(x))} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 1 / Math.sqrt(x))} color={COLORS.emerald} weight={2.5} />
              <Text x={1.5} y={2.2} size={13} color={COLORS.blue}>CMe</Text>
              <Text x={1.5} y={1} size={13} color={COLORS.emerald}>CMg</Text>
              <Text x={10.2} y={-0.2} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMe = 2/√x", color: COLORS.blue },
              { label: "CMg = 1/√x", color: COLORS.emerald },
            ]} />

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  ¿Que significa?
                </p>
                <p className="text-muted-foreground">
                  Ambas curvas son <strong>decrecientes</strong>, y{" "}
                  <InlineMath math="CMg < CMe" /> para todo{" "}
                  <InlineMath math="x > 0" />. Cada unidad adicional es{" "}
                  <strong>mas barata</strong> que la media anterior. Es como los
                  descuentos por volumen: cuanto mas compras, mas barato te sale
                  cada unidad. La empresa se beneficia de producir a gran
                  escala.
                </p>
              </CardContent>
            </Card>

            <ResultCard
              label="Rendimientos"
              value="Crecientes (CMg < CMe siempre, CMe decreciente)"
            />
          </TabsContent>

          {/* ======== TAB D: C(x) = x³ - 2x² + 2x ======== */}
          <TabsContent value="d" className="space-y-3 mt-3">
            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  d) <InlineMath math="C(x) = x^3 - 2x^2 + 2x" />
                </p>
                <div className="space-y-1">
                  <p>Coste Medio:</p>
                  <FormulaDisplay math="CMe(x) = \frac{x^3 - 2x^2 + 2x}{x} = x^2 - 2x + 2" />
                  <p>
                    Completando cuadrado:{" "}
                    <InlineMath math="CMe = (x-1)^2 + 1" /> (una parabola con
                    vertice en <InlineMath math="(1, 1)" />)
                  </p>
                  <p className="mt-2">Coste Marginal:</p>
                  <FormulaDisplay math="CMg(x) = \frac{d(x^3 - 2x^2 + 2x)}{dx} = 3x^2 - 4x + 2" />
                  <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
                    <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                      ¿Cómo se deriva término a término?
                    </summary>
                    <div className="mt-2 space-y-1 text-muted-foreground">
                      <p><strong>Regla de la suma:</strong> derivamos cada término por separado:</p>
                      <p><InlineMath math="x^3 \to 3x^2" /> (el 3 baja, exponente pasa a 2)</p>
                      <p><InlineMath math="-2x^2 \to -4x" /> (el 2 baja, -2×2=-4, exponente pasa a 1)</p>
                      <p><InlineMath math="2x \to 2" /> (exponente 1 baja, x desaparece)</p>
                      <p>Juntando: <InlineMath math="3x^2 - 4x + 2" /></p>
                    </div>
                  </details>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-3 sm:p-4 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  Verificacion: ¿CMg corta a CMe en su minimo?
                </p>
                <p>Minimo de CMe:</p>
                <FormulaDisplay math="CMe'(x) = 2x - 2 = 0 \implies x^* = 1" />
                <FormulaDisplay math="CMe(1) = (1)^2 - 2(1) + 2 = 1" />
                <p>CMg en ese punto:</p>
                <FormulaDisplay math="CMg(1) = 3(1)^2 - 4(1) + 2 = 1" />
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-2 text-sm">
                    <p className="text-amber-800 dark:text-amber-200">
                      <InlineMath math="CMe(1) = CMg(1) = 1" /> . Confirmado: CMg
                      corta a CMe exactamente en su minimo.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <EconChart xRange={[-0.2, 3.2]} yRange={[-0.5, 8]}>
              <Plot.OfX y={(x) => x * x - 2 * x + 2} color={COLORS.blue} weight={2.5} />
              <Plot.OfX y={(x) => 3 * x * x - 4 * x + 2} color={COLORS.emerald} weight={2.5} />
              <Point x={1} y={1} color={COLORS.rose} />
              <Text x={1.3} y={0.5} size={12} color={COLORS.rose}>Min(1, 1)</Text>
              <Text x={2.5} y={3} size={13} color={COLORS.blue}>CMe</Text>
              <Text x={2} y={6} size={13} color={COLORS.emerald}>CMg</Text>
              <Text x={3} y={-0.3} size={14}>x</Text>
            </EconChart>
            <ChartLegend items={[
              { label: "CMe = x²-2x+2", color: COLORS.blue },
              { label: "CMg = 3x²-4x+2", color: COLORS.emerald },
            ]} />

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  ¿Que significa?
                </p>
                <p className="text-muted-foreground">
                  Este es el caso <strong>tipico</strong> de una empresa real.
                  Las curvas tienen <strong>forma de U</strong>:
                </p>
                <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                  <li>
                    Para <InlineMath math="x < 1" />: el CMg esta por debajo del
                    CMe, asi que el CMe <strong>baja</strong>. Rendimientos
                    crecientes (la empresa gana eficiencia).
                  </li>
                  <li>
                    En <InlineMath math="x = 1" />: CMg = CMe = 1. El CMe alcanza
                    su <strong>minimo</strong>. Punto de maxima eficiencia.
                  </li>
                  <li>
                    Para <InlineMath math="x > 1" />: el CMg supera al CMe, asi
                    que el CMe <strong>sube</strong>. Rendimientos decrecientes
                    (la empresa pierde eficiencia).
                  </li>
                </ul>
              </CardContent>
            </Card>

            <ResultCard
              label="Rendimientos"
              value="Primero crecientes (x<1), luego decrecientes (x>1)"
            />
          </TabsContent>
        </Tabs>
      </StepCard>

      {/* ============ PASO 4: Resumen comparativo ============ */}
      <StepCard
        stepNumber={4}
        title="Resumen comparativo"
        variant="result"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200">
                a) C = 2x
              </Badge>
              <p>CMe = CMg = 2 (constantes)</p>
              <p className="text-muted-foreground">
                Rendimientos <strong>constantes</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-rose-200 dark:bg-rose-800/40 text-rose-800 dark:text-rose-200">
                b) C = 2x²
              </Badge>
              <p>CMg = 2 CMe (siempre mayor)</p>
              <p className="text-muted-foreground">
                Rendimientos <strong>decrecientes</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-blue-200 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200">
                c) C = 2&#8730;x
              </Badge>
              <p>CMg = CMe/2 (siempre menor)</p>
              <p className="text-muted-foreground">
                Rendimientos <strong>crecientes</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-3 text-sm space-y-1">
              <Badge className="bg-amber-200 dark:bg-amber-800/40 text-amber-800 dark:text-amber-200">
                d) C = x³-2x²+2x
              </Badge>
              <p>CMg corta CMe en (1, 1)</p>
              <p className="text-muted-foreground">
                Rendimientos <strong>variables</strong> (crecientes y
                decrecientes)
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Recuerda para el examen
            </p>
            <p className="text-muted-foreground">
              La clave esta en la relacion CMg vs CMe: si CMg &lt; CMe, hay
              rendimientos crecientes (eficiencia mejora). Si CMg &gt; CMe,
              rendimientos decrecientes (eficiencia empeora). El caso (d) es el
              mas comun en la realidad: las empresas tienen un &laquo;tamano
              optimo&raquo; donde los costes son minimos.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-emerald-800 dark:text-emerald-200">
            Conexión con el resto del tema
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Estas cuatro funciones representan los cuatro posibles &quot;tipos de empresa&quot;.
            En el <Link href="/tema-2/ejercicio-2" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 2</Link>{" "}
            profundizaremos en el caso (d) — el más realista — y veremos cómo encontrar el
            tamaño óptimo de la empresa a largo plazo. En el <Link href="/tema-3" className="text-emerald-600 dark:text-emerald-400 underline">Tema 3</Link>,
            el CMg se convertirá en la <strong>curva de oferta</strong> de la empresa.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
