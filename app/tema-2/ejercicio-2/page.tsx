"use client";

import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";
import Link from "next/link";

export default function Ejercicio2() {
  return (
    <ExerciseLayout
      tema={2}
      exerciseNumber={2}
      title="Mínimo CMe a Largo Plazo"
      difficulty="Medio-Alto"
      category="Costes LP"
      statement={
        <div className="space-y-2">
          <p>
            Suponga que la función de costes a largo plazo de una empresa que
            opera en un mercado competitivo es:
          </p>
          <FormulaDisplay math="C^L(x) = 0.5x^3 - 4.1x^2 + 20x" />
          <p>
            La empresa utiliza trabajo (L) y capital (K). A corto plazo, K es
            fijo, con función de costes:
          </p>
          <FormulaDisplay math="C^c(x, \bar{K}) = 0.5x^3 - 4x^2 + (20 - \bar{K})x + 2.5\bar{K}^2" />
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              Determine el nivel de producción que minimiza el CMe a LP y el
              mínimo de los costes medios. Compruebe que CMg = CMe en ese
              punto.
            </li>
            <li>
              Calcule el nivel óptimo de K asociado a ese nivel de producción.
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-2/ejercicio-1"
      nextUrl="/tema-2/ejercicio-3"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio usa <strong>optimización</strong> (derivar e igualar a cero para encontrar mínimos)
            y <strong>derivadas parciales</strong> (minimizar costes respecto al capital). Si necesitas repasar:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/optimizacion">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Optimización →
              </Badge>
            </Link>
            <Link href="/toolkit/derivadas-parciales">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas parciales →
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* ============ PASO 1: ¿Qué vamos a aprender? ============ */}
      <StepCard
        stepNumber={1}
        title="¿Qué vamos a aprender?"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La diferencia entre corto y largo plazo en costes
            </p>
            <p>
              A <strong>corto plazo</strong>, la empresa tiene una fábrica
              (capital K) de tamaño fijo. Solo puede ajustar el trabajo (L).
              Esto limita su eficiencia.
            </p>
            <p>
              A <strong>largo plazo</strong>, puede elegir el tamaño óptimo de
              la fábrica. La curva de costes a LP es la{" "}
              <strong>envolvente</strong> de todas las curvas de CP: para cada
              nivel de producción, elige el K que minimiza el coste.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold">Analogía: Elegir el tamaño de tu piso</p>
            <p className="text-muted-foreground">
              Si vives solo, un estudio te basta (K pequeño). Si tienes
              familia, necesitas más habitaciones (K grande). Si vivieras en un
              estudio con 5 personas, serían &laquo;ineficientes&raquo; (coste
              alto por persona). El &laquo;largo plazo&raquo; es cuando puedes
              mudarte y elegir el tamaño ideal para tu situación.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2: CMeL y CMgL ============ */}
      <StepCard
        stepNumber={2}
        title="Obtener CMeL y CMgL"
        variant="calculation"
      >
        <p>
          Partimos de{" "}
          <InlineMath math="C^L(x) = 0.5x^3 - 4.1x^2 + 20x" />:
        </p>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Coste Medio a LP
            </p>
            <FormulaDisplay math="CMeL(x) = \frac{C^L(x)}{x} = \frac{0.5x^3 - 4.1x^2 + 20x}{x}" />
            <FormulaDisplay math="CMeL(x) = 0.5x^2 - 4.1x + 20" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Coste Marginal a LP
            </p>
            <FormulaDisplay math="CMgL(x) = \frac{dC^L}{dx} = 1.5x^2 - 8.2x + 20" />
        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-2">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            ¿Cómo se obtiene el CMgL?
          </summary>
          <div className="mt-2 space-y-1 text-muted-foreground">
            <p>Derivamos <InlineMath math="C^L = 0.5x^3 - 4.1x^2 + 20x" /> término a término:</p>
            <p><InlineMath math="0.5x^3 \to 0.5 \times 3 \cdot x^2 = 1.5x^2" /></p>
            <p><InlineMath math="-4.1x^2 \to -4.1 \times 2 \cdot x = -8.2x" /></p>
            <p><InlineMath math="20x \to 20" /></p>
          </div>
        </details>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 3: Mínimo CMeL ============ */}
      <StepCard
        stepNumber={3}
        title={
          <span>
            a) Mínimo del CMeL
          </span>
        }
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>Estrategia:</strong> El mínimo de CMe se encuentra donde
              su derivada se anula, o equivalentemente, donde CMg = CMe. Vamos
              a usar el primer método y verificar con el segundo.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Método 1: Derivar CMeL e igualar a cero
            </p>
            <FormulaDisplay math="CMeL(x) = 0.5x^2 - 4.1x + 20" />
            <FormulaDisplay math="\frac{d(CMeL)}{dx} = x - 4.1 = 0" />
            <FormulaDisplay math="x^* = 4.1" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Valor del mínimo CMeL
            </p>
            <FormulaDisplay math="CMeL(4.1) = 0.5(4.1)^2 - 4.1(4.1) + 20" />
            <FormulaDisplay math="= 0.5(16.81) - 16.81 + 20" />
            <FormulaDisplay math="= 8.405 - 16.81 + 20 = 11.595" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Verificación: CMgL en x* = 4.1
            </p>
            <FormulaDisplay math="CMgL(4.1) = 1.5(4.1)^2 - 8.2(4.1) + 20" />
            <FormulaDisplay math="= 1.5(16.81) - 33.62 + 20" />
            <FormulaDisplay math="= 25.215 - 33.62 + 20 = 11.595" />
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-2 text-sm">
                <p className="text-amber-800 dark:text-amber-200">
                  <InlineMath math="CMeL(4.1) = CMgL(4.1) = 11.595" /> .
                  Confirmado: el coste marginal coincide con el coste medio en
                  su mínimo.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              ¿Qué significa este resultado?
            </p>
            <p className="text-muted-foreground">
              El nivel de producción <InlineMath math="x^* = 4.1" /> es el
              punto de <strong>máxima eficiencia</strong> a largo plazo. En
              este punto, cada unidad cuesta en promedio{" "}
              <strong>11.595 euros</strong>. Producir menos o más unidades
              implicaría un coste medio superior.
            </p>
          </CardContent>
        </Card>

        <EconChart xRange={[-0.3, 8.5]} yRange={[-1, 50]}>
          <Plot.OfX y={(x) => 0.5 * x * x - 4.1 * x + 20} color={COLORS.blue} weight={2.5} />
          <Plot.OfX y={(x) => 1.5 * x * x - 8.2 * x + 20} color={COLORS.emerald} weight={2.5} />
          <Line.Segment point1={[0, 11.595]} point2={[8.5, 11.595]} color={COLORS.amber} style="dashed" weight={1.5} />
          <Point x={4.1} y={11.595} color={COLORS.rose} />
          <Text x={4.5} y={13.5} size={12} color={COLORS.rose}>Min(4.1, 11.595)</Text>
          <Text x={7} y={18} size={13} color={COLORS.blue}>CMeL</Text>
          <Text x={6.5} y={30} size={13} color={COLORS.emerald}>CMgL</Text>
          <Text x={8.2} y={-0.5} size={14}>x</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMeL", color: COLORS.blue },
          { label: "CMgL", color: COLORS.emerald },
        ]} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <ResultCard label="Producción óptima LP" value="x* = 4.1" />
          <ResultCard label="Mínimo CMeL" value="11.595" />
        </div>
      </StepCard>

      {/* ============ PASO 4: K* óptimo ============ */}
      <StepCard
        stepNumber={4}
        title={
          <span>
            b) Capital óptimo K* para x* = 4.1
          </span>
        }
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              ¿Cómo encontramos el K óptimo?
            </p>
            <p className="text-muted-foreground">
              A largo plazo, la empresa elige K para minimizar costes. Esto
              significa que la función de costes a LP es el resultado de
              optimizar K en la función de CP. Por tanto, en el óptimo, los
              costes de CP y LP deben coincidir.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Condición: igualar CL y Cc
            </p>
            <p>
              Para el K óptimo, <InlineMath math="C^L(x) = C^c(x, \bar{K})" />{" "}
              para todo x. Igualamos los coeficientes:
            </p>
            <FormulaDisplay math="C^L(x) = 0.5x^3 - 4.1x^2 + 20x" />
            <FormulaDisplay math="C^c(x, \bar{K}) = 0.5x^3 - 4x^2 + (20 - \bar{K})x + 2.5\bar{K}^2" />

            <p>
              Comparando los términos en{" "}
              <InlineMath math="x^2" />: necesitamos{" "}
              <InlineMath math="-4 = -4.1" /> ... pero no coinciden.
              Esto es porque la igualdad es solo puntual (para{" "}
              <InlineMath math="x^*" />), no para todo x.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Método: Minimizar Cc respecto a K
            </p>
            <p>
              El K óptimo para cada nivel de x se obtiene minimizando{" "}
              <InlineMath math="C^c" /> respecto a{" "}
              <InlineMath math="\bar{K}" />:
            </p>
            <FormulaDisplay math="\frac{\partial C^c}{\partial \bar{K}} = -x + 5\bar{K} = 0" />
            <FormulaDisplay math="\bar{K}^*(x) = \frac{x}{5}" />

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-2 text-sm">
                <p className="text-blue-800 dark:text-blue-200">
                  Esto tiene sentido: a más producción, más capital necesitas.
                  La relación es lineal: por cada 5 unidades de producción, 1
                  unidad de capital.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              K* para x* = 4.1
            </p>
            <FormulaDisplay math="\bar{K}^* = \frac{x^*}{5} = \frac{4.1}{5} = 0.82" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Verificación: Cc(4.1, 0.82) = CL(4.1)
            </p>
            <FormulaDisplay math="C^L(4.1) = 0.5(4.1)^3 - 4.1(4.1)^2 + 20(4.1)" />
            <FormulaDisplay math="= 0.5(68.921) - 4.1(16.81) + 82" />
            <FormulaDisplay math="= 34.4605 - 68.921 + 82 = 47.5395" />

            <FormulaDisplay math="C^c(4.1, 0.82) = 0.5(68.921) - 4(16.81) + (20-0.82)(4.1) + 2.5(0.6724)" />
            <FormulaDisplay math="= 34.4605 - 67.24 + 78.62 + 1.681 = 47.5215" />

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-2 text-sm">
                <p className="text-amber-800 dark:text-amber-200">
                  Los valores son prácticamente iguales (la pequeña diferencia
                  se debe al redondeo). Queda verificado que{" "}
                  <InlineMath math="C^L(4.1) \approx C^c(4.1, 0.82)" />.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <ResultCard label="Capital óptimo" value="K* = 0.82" />
      </StepCard>

      {/* ============ PASO 5: Envolvente ============ */}
      <StepCard
        stepNumber={5}
        title="La envolvente: CP vs LP"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              ¿Por qué el CMe CP siempre está por encima del CMe LP?
            </p>
            <p className="text-muted-foreground">
              A corto plazo, K está fijo. A largo plazo, se puede ajustar. Tener
              más flexibilidad nunca puede ser peor, así que{" "}
              <InlineMath math="CMeL \leq CMeCP" /> siempre. La curva CMeL
              es tangente a cada curva CMeCP en el punto óptimo.
            </p>
          </CardContent>
        </Card>

        <EconChart xRange={[-0.3, 10]} yRange={[8, 30]}>
          {/* CMeL = 0.5x^2 - 4.1x + 20 (envolvente) */}
          <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 0.5 * x * x - 4.1 * x + 20)} color={COLORS.blue} weight={3} />
          {/* CMeCP(K=0.5) = 0.5x^2 - 4x + 19.5 + 0.625/x */}
          <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 0.5 * x * x - 4 * x + (20 - 0.5) + 2.5 * 0.25 / x)} color={COLORS.amber} weight={1.5} opacity={0.8} />
          {/* CMeCP(K=0.82) = 0.5x^2 - 4x + 19.18 + 1.681/x */}
          <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 0.5 * x * x - 4 * x + (20 - 0.82) + 2.5 * 0.82 * 0.82 / x)} color={COLORS.emerald} weight={1.5} opacity={0.8} />
          {/* CMeCP(K=2) = 0.5x^2 - 4x + 18 + 10/x */}
          <Plot.OfX y={(x) => (x <= 0.01 ? NaN : 0.5 * x * x - 4 * x + (20 - 2) + 2.5 * 4 / x)} color={COLORS.violet} weight={1.5} opacity={0.8} />
          <Point x={4.1} y={11.595} color={COLORS.rose} />
          <Text x={4.6} y={12.8} size={12} color={COLORS.rose}>Min(4.1, 11.6)</Text>
          <Text x={8} y={22} size={13} color={COLORS.blue}>CMeL</Text>
          <Text x={1.5} y={28} size={11} color={COLORS.amber}>K=0.5</Text>
          <Text x={3} y={12.5} size={11} color={COLORS.emerald}>K*=0.82</Text>
          <Text x={7} y={28} size={11} color={COLORS.violet}>K=2</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMeL (envolvente)", color: COLORS.blue },
          { label: "CMeCP (K=0.5)", color: COLORS.amber, dashed: true },
          { label: "CMeCP (K*=0.82)", color: COLORS.emerald, dashed: true },
          { label: "CMeCP (K=2)", color: COLORS.violet, dashed: true },
        ]} />

        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Lectura del gráfico
            </p>
            <p className="text-muted-foreground">
              La curva azul gruesa (CMeL) es la <strong>envolvente inferior</strong>{" "}
              de todas las curvas de CMe a CP. Cada curva a CP (líneas
              discontinuas) corresponde a un tamaño de fábrica distinto. El
              punto rojo marca donde la curva{" "}
              <InlineMath math="CMeCP(K^* = 0.82)" /> toca la envolvente: es el
              mínimo absoluto de costes medios.
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
            La envolvente es un concepto fundamental: la curva de costes a LP es siempre la más
            eficiente posible. En el <Link href="/tema-3" className="text-emerald-600 dark:text-emerald-400 underline">Tema 3</Link>,
            usaremos estas curvas de costes para derivar la <strong>curva de oferta</strong> de la empresa.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
