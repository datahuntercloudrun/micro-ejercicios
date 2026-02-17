"use client";

import { useState } from "react";
import Link from "next/link";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plot, Text, Point, Line, Polygon } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

/* ---------- Funciones de costes ---------- */
// CMg = 2x + 4, CT = x² + 4x + 12, CF = 12, CV = x² + 4x
// CMe = x + 4 + 12/x (enunciado dice x + 12/x, pero integrando CMg se obtiene el +4), CVMe = x + 4

/* ---------- Funciones auxiliares ---------- */
// Min CMe: d/dx(x + 4 + 12/x) = 1 - 12/x² = 0 → x² = 12 → x = 2√3 ≈ 3.464
// CMe(2√3) = 2√3 + 4 + 12/(2√3) = 2√3 + 4 + 2√3 = 4√3 + 4 ≈ 10.93
const xMinCMe = 2 * Math.sqrt(3);
const pMinCMe = 4 * Math.sqrt(3) + 4;

// Min CVMe: CVMe = x + 4, always increasing from x=0. Min = 4 at x→0.
// So the firm produces for all p > 4. But x = (p-4)/2 from p = CMg = 2x+4.

export default function Ejercicio4() {
  const [price, setPrice] = useState(Math.round(pMinCMe * 10) / 10);

  // x* from p = CMg = 2x + 4 → x = (p-4)/2
  const xStar = price > 4 ? (price - 4) / 2 : 0;
  const CV = xStar * xStar + 4 * xStar;
  const CT = CV + 12;
  const IT = price * xStar;
  const profit = IT - CT;
  // EP = IT - CV = ∫₀^x* (p - CMg) dx
  const EP = xStar > 0 ? price * xStar - (xStar * xStar + 4 * xStar) : 0;

  // Chart range for interactive surplus
  const xMax = Math.max(xStar * 1.3, 2);

  return (
    <ExerciseLayout
      tema={3}
      exerciseNumber={4}
      title="Excedente del Productor"
      difficulty="Medio"
      category="Excedente"
      statement={
        <div className="space-y-2">
          <p>
            Una empresa sabe que su coste marginal a largo plazo es{" "}
            <InlineMath math="CMg = 2x + 4" /> y su{" "}
            <InlineMath math="CMe = x + \frac{12}{x}" />. Si actualmente su
            beneficio es nulo, &iquest;cu&aacute;l ser&aacute; su excedente de
            productor? &iquest;Y si el precio fuese 10? (Pista: Se puede calcular
            como el &aacute;rea de un tri&aacute;ngulo)
          </p>
        </div>
      }
      prevUrl="/tema-3/ejercicio-3"
      nextUrl="/tema-3/test"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio usa <strong>integrales</strong> (para calcular áreas bajo curvas).
            Si no sabes qué es una integral, revisa la sección de integrales del kit matemático.
            También necesitarás derivar e igualar a cero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/optimizacion">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Integrales y optimización →
              </Badge>
            </Link>
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas →
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
              &iquest;Qu&eacute; es el excedente del productor?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que vendes <strong>camisetas</strong> en un mercadillo. La primera te cuesta
              5&euro; hacerla, la segunda 7&euro;, la tercera 9&euro;... Si el precio del mercado
              es 10&euro;, ganas 5&euro; con la primera (10-5), 3&euro; con la segunda (10-7),
              1&euro; con la tercera (10-9). La suma de estas &quot;ganancias sobre el coste marginal&quot;
              es tu <strong>excedente del productor</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              &iquest;Cu&aacute;nto ganar&iacute;a la empresa si dejase de producir? El EP mide lo que
              la empresa gana <em>por encima</em> de sus costes variables: es lo que perder&iacute;a
              si cerrase. Gr&aacute;ficamente, es el &aacute;rea entre la l&iacute;nea de precio y la
              curva de CMg.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              F&oacute;rmula del EP
            </p>
            <FormulaDisplay math="EP = IT - CV = p \cdot x^* - CV(x^*) = \int_0^{x^*} \left(p - CMg(x)\right) dx" />
            <p className="text-amber-900 dark:text-amber-100">
              El EP NO es el beneficio. Relaci&oacute;n: <InlineMath math="\pi = EP - CF" />.
              Cuando <InlineMath math="\pi = 0" />, el EP es exactamente igual a los CF.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="Identificar la estructura de costes"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Reconstruir el CT a partir del CMg y CMe
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si CMg = 2x + 4, entonces CT es su primitiva (integral) m&aacute;s una constante
              (los costes fijos).
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="CT = \int CMg \, dx = x^2 + 4x + C" />
        <FormulaDisplay math="CMe = \frac{CT}{x} = x + 4 + \frac{C}{x}" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Comparando con el CMe dado
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              El enunciado dice <InlineMath math="CMe = x + \frac{12}{x}" />.
              Al integrar CMg = 2x + 4 obtenemos CMe = x + 4 + C/x.
              Comparando, <InlineMath math="C = CF = 12" />, por lo que el
              CMe completo es <InlineMath math="CMe = x + 4 + \frac{12}{x}" />.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CT</p>
              <FormulaDisplay math="x^2 + 4x + 12" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CF</p>
              <FormulaDisplay math="12" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CV</p>
              <FormulaDisplay math="x^2 + 4x" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CVMe</p>
              <FormulaDisplay math="x + 4" />
            </CardContent>
          </Card>
        </div>

        <p className="text-sm font-semibold mt-4 mb-2">Curvas de costes</p>
        <EconChart xRange={[0, 10]} yRange={[0, 30]}>
          {/* CMe = x + 4 + 12/x */}
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : x + 4 + 12 / x)}
            color={COLORS.blue}
            weight={2.5}
          />
          {/* CVMe = x + 4 */}
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : x + 4)}
            color={COLORS.emerald}
            weight={2.5}
          />
          {/* CMg = 2x + 4 */}
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 2 * x + 4)}
            color={COLORS.rose}
            weight={2.5}
          />
          {/* min CMe reference line */}
          <Line.Segment
            point1={[0, pMinCMe]}
            point2={[10, pMinCMe]}
            color={COLORS.amber}
            style="dashed"
            weight={1.5}
            opacity={0.7}
          />
          <Text x={8.5} y={pMinCMe + 1} size={11} color={COLORS.amber}>
            {`min CMe ≈ ${pMinCMe.toFixed(1)}`}
          </Text>
          {/* min CMe point */}
          <Point x={xMinCMe} y={pMinCMe} color={COLORS.amber} />
          {/* Axis labels */}
          <Text x={9.7} y={-1.2} size={14}>x</Text>
          <Text x={-0.3} y={29} size={14}>{"€"}</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMe", color: COLORS.blue },
          { label: "CVMe", color: COLORS.emerald },
          { label: "CMg", color: COLORS.rose },
          { label: "min CMe", color: COLORS.amber, dashed: true },
        ]} />
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title="a) EP con beneficio cero"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Cu&aacute;ndo es el beneficio cero?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Beneficio cero significa <InlineMath math="p = CMe" />. Combinando con la
              condici&oacute;n de oferta <InlineMath math="p = CMg" />, buscamos donde
              CMg = CMe (el m&iacute;nimo de CMe).
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="2x + 4 = x + \frac{12}{x} + 4" />
        <FormulaDisplay math="x = \frac{12}{x} \implies x^2 = 12 \implies x^* = 2\sqrt{3} \approx 3{,}464" />
        <FormulaDisplay math="p^* = 2(2\sqrt{3}) + 4 = 4\sqrt{3} + 4 \approx 10{,}93" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              C&aacute;lculo del EP
            </p>
            <FormulaDisplay math="EP = \int_0^{2\sqrt{3}} \left(4\sqrt{3} + 4 - 2x - 4\right) dx = \int_0^{2\sqrt{3}} \left(4\sqrt{3} - 2x\right) dx" />
            <FormulaDisplay math="= \left[4\sqrt{3} \cdot x - x^2\right]_0^{2\sqrt{3}} = 4\sqrt{3} \cdot 2\sqrt{3} - (2\sqrt{3})^2" />
            <FormulaDisplay math="= 8 \cdot 3 - 4 \cdot 3 = 24 - 12 = 12" />
          </CardContent>
        </Card>

            <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
              <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                ¿Cómo se calcula esta integral paso a paso?
              </summary>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <p><strong>Paso 1:</strong> La integral es &quot;el área&quot; entre el precio y el CMg.</p>
                <p><strong>Paso 2:</strong> Calculamos la primitiva (la anti-derivada):</p>
                <p><InlineMath math="\int (4\sqrt{3} - 2x) dx = 4\sqrt{3} \cdot x - x^2 + C" /></p>
                <p><strong>Paso 3:</strong> Evaluamos en los límites [0, 2√3]:</p>
                <p>En <InlineMath math="x = 2\sqrt{3}" />: <InlineMath math="4\sqrt{3} \cdot 2\sqrt{3} - (2\sqrt{3})^2 = 8 \cdot 3 - 4 \cdot 3 = 12" /></p>
                <p>En x = 0: todo es cero.</p>
                <p><strong>Truco:</strong> <InlineMath math="\sqrt{3} \cdot \sqrt{3} = 3" /> y <InlineMath math="(2\sqrt{3})^2 = 4 \cdot 3 = 12" /></p>
              </div>
            </details>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; significa EP = 12?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              El EP = 12 = CF. Esto <strong>no es coincidencia</strong>: cuando el beneficio
              es cero, <InlineMath math="\pi = EP - CF = 0" />, luego{" "}
              <InlineMath math="EP = CF" />. Todo el excedente se destina a cubrir
              exactamente los costes fijos.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="EP con π = 0" value="12€ = CF" />
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title="b) EP con p = 10"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Primero: &iquest;produce la empresa?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Con p=10, verificamos: m&iacute;n CVMe = 4 (CVMe = x + 4 es creciente).
              Como 10 &gt; 4, la empresa produce.
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="p = CMg \implies 10 = 2x + 4 \implies x^* = 3" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            ¿Cómo se calcula como triángulo? (la pista del enunciado)
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>El CMg = 2x + 4 es una <strong>recta</strong>. El área entre una recta y una horizontal es un <strong>triángulo</strong>.</p>
            <p>Base = x* = 3</p>
            <p>Altura = p - CMg(0) = 10 - 4 = 6</p>
            <FormulaDisplay math="EP = \frac{1}{2} \times base \times altura = \frac{1}{2} \times 3 \times 6 = 9" />
            <p>¡Mismo resultado que con la integral, pero mucho más fácil!</p>
          </div>
        </details>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              C&aacute;lculo del EP
            </p>
            <FormulaDisplay math="EP = \int_0^{3} (10 - 2x - 4) \, dx = \int_0^{3} (6 - 2x) \, dx" />
            <FormulaDisplay math="= \left[6x - x^2\right]_0^{3} = 18 - 9 = 9" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Verificaci&oacute;n alternativa
            </p>
            <FormulaDisplay math="EP = IT - CV = 10 \cdot 3 - (9 + 12) = 30 - 21 = 9 \quad \checkmark" />
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; pasa con el beneficio?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              <InlineMath math="\pi = EP - CF = 9 - 12 = -3" />. La empresa tiene{" "}
              <strong>p&eacute;rdidas de 3&euro;</strong>, pero sigue produciendo porque p=10 &gt; 4 = m&iacute;n CVMe.
              Si cerrase, perder&iacute;a los 12&euro; de CF. Produciendo, solo pierde 3&euro;: recupera
              9&euro; de los 12&euro; de CF gracias al EP.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="EP con p = 10" value="9€" />
        <ResultCard label="Beneficio" value="-3€ (pérdidas, pero mejor que cerrar)" />
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard
        stepNumber={5}
        title="Gr&aacute;fico interactivo del EP"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Mueve el precio y observa el EP
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              El &aacute;rea verde entre el precio y el CMg es el excedente del productor.
              Observa c&oacute;mo cambia seg&uacute;n el precio del mercado.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-3 mt-3">
          <label className="text-sm font-medium whitespace-nowrap">
            Precio: <span className="font-bold text-blue-600 dark:text-blue-400">{price}€</span>
          </label>
          <input
            type="range"
            min={4}
            max={24}
            step={0.5}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="flex-1"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="text-emerald-800 dark:text-emerald-200 text-xs">x*</p>
              <p className="font-bold text-emerald-900 dark:text-emerald-100">{xStar.toFixed(2)}</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="text-emerald-800 dark:text-emerald-200 text-xs">EP</p>
              <p className="font-bold text-emerald-900 dark:text-emerald-100">{EP.toFixed(2)}€</p>
            </CardContent>
          </Card>
          <Card className={profit >= 0
            ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
            : "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800"
          }>
            <CardContent className="p-2 text-sm text-center">
              <p className={profit >= 0
                ? "text-emerald-800 dark:text-emerald-200 text-xs"
                : "text-rose-800 dark:text-rose-200 text-xs"
              }>π</p>
              <p className={`font-bold ${profit >= 0
                ? "text-emerald-900 dark:text-emerald-100"
                : "text-rose-900 dark:text-rose-100"
              }`}>{profit.toFixed(2)}€</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="text-amber-800 dark:text-amber-200 text-xs">EP - CF</p>
              <p className="font-bold text-amber-900 dark:text-amber-100">{(EP - 12).toFixed(2)}€</p>
            </CardContent>
          </Card>
        </div>

        <EconChart xRange={[0, Math.max(xMax, 2)]} yRange={[0, Math.max(price * 1.3, 10)]}>
          {/* EP shaded area: polygon from (0, price) along price line to (x*, price), then along CMg back */}
          {xStar > 0 && (() => {
            const steps = 60;
            const pts: [number, number][] = [];
            // Top edge: price line from x=0 to x=x*
            pts.push([0, price]);
            pts.push([xStar, price]);
            // Bottom edge: CMg curve from x=x* back to x=0
            for (let i = steps; i >= 0; i--) {
              const xi = (xStar * i) / steps;
              pts.push([xi, 2 * xi + 4]);
            }
            return (
              <Polygon
                points={pts}
                color={COLORS.emerald}
                fillOpacity={0.25}
                strokeOpacity={0}
              />
            );
          })()}
          {/* CMg = 2x + 4 */}
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 2 * x + 4)}
            color={COLORS.rose}
            weight={2.5}
          />
          {/* Price line */}
          <Line.Segment
            point1={[0, price]}
            point2={[Math.max(xMax, 2), price]}
            color={COLORS.blue}
            style="dashed"
            weight={2}
          />
          {/* Optimal point */}
          {xStar > 0 && <Point x={xStar} y={price} color={COLORS.blue} />}
          {/* Labels */}
          <Text x={Math.max(xMax, 2) * 0.85} y={price + Math.max(price * 0.08, 0.5)} size={12} color={COLORS.blue}>
            {`p = ${price}`}
          </Text>
          {xStar > 0 && (
            <Text x={xStar * 0.4} y={(price + (2 * (xStar * 0.4) + 4)) / 2} size={12} color={COLORS.emerald}>
              EP
            </Text>
          )}
          <Text x={Math.max(xMax, 2) * 0.95} y={-0.5} size={14}>x</Text>
          <Text x={-0.15} y={Math.max(price * 1.3, 10) * 0.95} size={14}>{"€"}</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMg", color: COLORS.rose },
          { label: "Precio", color: COLORS.blue, dashed: true },
          { label: "EP (excedente)", color: COLORS.emerald },
        ]} />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Relaci&oacute;n EP-beneficio
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              {price >= pMinCMe ? (
                <>Con p = {price}€ &gt; {pMinCMe.toFixed(1)}€ = m&iacute;n CMe:
                  la empresa tiene <strong>beneficio positivo</strong>. EP ({EP.toFixed(2)}€) &gt; CF (12€).</>
              ) : price > 4 ? (
                <>Con p = {price}€: m&iacute;n CVMe (4) &lt; p &lt; m&iacute;n CMe ({pMinCMe.toFixed(1)}).
                  <strong> P&eacute;rdidas</strong>, pero menores que cerrar. EP ({EP.toFixed(2)}€) cubre parte de CF (12€).</>
              ) : (
                <>Con p = {price}€ &le; 4 = m&iacute;n CVMe: la empresa <strong>cierra</strong>.</>
              )}
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 6 ============ */}
      <StepCard stepNumber={6} title="Resumen de resultados" variant="result">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ResultCard label="EP con π = 0" value="12€ = CF" />
          <ResultCard label="EP con p = 10" value="9€" />
          <ResultCard label="p de nivelación" value={`${pMinCMe.toFixed(2)}€`} />
          <ResultCard label="Relación clave" value="π = EP - CF" />
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores comunes a evitar
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Confundir EP con beneficio: EP = IT - CV, beneficio = IT - CT.</li>
              <li>Olvidar que con &pi; = 0, EP = CF (no cero).</li>
              <li>Pensar que p&eacute;rdidas implica cerrar: solo cierra si p &lt; m&iacute;n CVMe.</li>
              <li>Calcular la integral desde el m&iacute;n CVMe en vez de desde 0 (hay que integrar desde 0 hasta x*).</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-violet-800 dark:text-violet-200">
            Cierre del curso
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Con este ejercicio completas los tres temas de Microeconomía: has aprendido cómo una empresa
            <strong> produce</strong> (Tema 1), cuánto <strong>le cuesta</strong> (Tema 2), y cuánto{" "}
            <strong>vende y gana</strong> (Tema 3). El excedente del productor conecta todo: mide lo que
            la empresa gana gracias a producir en vez de quedarse quieta.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
