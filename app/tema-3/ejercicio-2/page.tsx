"use client";

import { useState } from "react";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

export default function Ejercicio2() {
  const [price, setPrice] = useState(18);

  // At current price: x* = p/6
  const xStar = price / 6;
  const CT = 3 * xStar * xStar + 3;
  const IT = price * xStar;
  const profit = IT - CT;
  const CV = 3 * xStar * xStar;
  const EP = IT - CV;

  return (
    <ExerciseLayout
      tema={3}
      exerciseNumber={2}
      title="Coste y Oferta en Corto Plazo"
      difficulty="Medio"
      category="Oferta CP"
      statement={
        <div className="space-y-2">
          <p>
            Considere una empresa precio-aceptante con tecnolog&iacute;a dada por
            la funci&oacute;n de producci&oacute;n{" "}
            <InlineMath math="x = L^{1/2}K^{1/2}" />. Los precios de los
            factores <InlineMath math="L" /> y <InlineMath math="K" /> son,
            respectivamente, <InlineMath math="w = 9" /> y{" "}
            <InlineMath math="r = 1" />.
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              Determine la funci&oacute;n de costes y la curva de oferta a corto
              plazo de la empresa, si el stock de capital disponible para la
              empresa es <InlineMath math="K = 3" />.
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-3/ejercicio-1"
      nextUrl="/tema-3/ejercicio-3"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio conecta los tres temas: parte de una <strong>función de producción</strong>{" "}
            (Tema 1), obtiene la <strong>función de costes</strong> (Tema 2), y luego la{" "}
            <strong>curva de oferta</strong> (Tema 3). Necesitarás derivar y despejar variables.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
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
              De la producci&oacute;n a la oferta: el camino completo
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina una <strong>granja</strong>: sabes cu&aacute;nto trigo produces con cierta
              tierra y trabajadores (funci&oacute;n de producci&oacute;n). A partir de ah&iacute;,
              calculas cu&aacute;nto cuesta producir cada kilo (funci&oacute;n de costes).
              Finalmente, mirando el precio del mercado, decides cu&aacute;nto producir (curva de oferta).
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Cu&aacute;l es la cadena l&oacute;gica?</p>
            <p className="text-muted-foreground">
              Funci&oacute;n de producci&oacute;n &rarr; demanda de factor (L) &rarr; funci&oacute;n de costes &rarr;
              CMg &rarr; curva de oferta. La oferta nos dice cu&aacute;nto produce la empresa
              a cada precio del mercado.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="a) Funci&oacute;n de costes a corto plazo"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Paso clave: despejar L en funci&oacute;n de x
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Con <InlineMath math="\bar{K} = 3" /> fijo, la producci&oacute;n depende solo de L.
              Necesitamos expresar <em>cu&aacute;nto trabajo necesitamos</em> para producir x unidades,
              y luego multiplicar por el precio del trabajo.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm font-medium mt-3">Sustituir K fijo en la funci&oacute;n de producci&oacute;n:</p>
        <FormulaDisplay math="x = L^{1/2} \cdot 3^{1/2} = \sqrt{3}\sqrt{L}" />
        <FormulaDisplay math="\sqrt{L} = \frac{x}{\sqrt{3}} \implies L = \frac{x^2}{3}" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            ¿Cómo se despeja L y se llega a CT?
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>1. Con K=3: <InlineMath math="x = L^{1/2} \cdot 3^{1/2} = \sqrt{3} \cdot \sqrt{L}" /></p>
            <p>2. Dividimos por <InlineMath math="\sqrt{3}" />: <InlineMath math="\sqrt{L} = \frac{x}{\sqrt{3}}" /></p>
            <p>3. Elevamos al cuadrado ambos lados: <InlineMath math="L = \frac{x^2}{3}" /></p>
            <p>4. Coste total = coste del trabajo + coste del capital:</p>
            <FormulaDisplay math="CT = wL + rK = 9 \cdot \frac{x^2}{3} + 1 \cdot 3 = 3x^2 + 3" />
          </div>
        </details>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Funci&oacute;n de costes
            </p>
            <FormulaDisplay math="CT(x) = wL + r\bar{K} = 9 \cdot \frac{x^2}{3} + 1 \cdot 3 = 3x^2 + 3" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CF</p>
              <FormulaDisplay math="3" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CV</p>
              <FormulaDisplay math="3x^2" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CVMe</p>
              <FormulaDisplay math="3x" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CMg</p>
              <FormulaDisplay math="6x" />
            </CardContent>
          </Card>
        </div>

        <p className="text-sm font-medium mt-3">Coste medio total:</p>
        <FormulaDisplay math="CMe = \frac{CT}{x} = \frac{3x^2 + 3}{x} = 3x + \frac{3}{x}" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            ¿De dónde sale CMg = 6x?
          </summary>
          <div className="mt-2 space-y-1 text-muted-foreground">
            <p>Derivamos <InlineMath math="CT = 3x^2 + 3" />:</p>
            <p><InlineMath math="3x^2 \to 3 \times 2 \cdot x = 6x" /> (regla de la potencia)</p>
            <p><InlineMath math="3 \to 0" /> (la derivada de una constante es cero)</p>
            <p>Resultado: <InlineMath math="CMg = 6x" /></p>
          </div>
        </details>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; significan estos costes?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              El CVMe = 3x es una recta creciente (no tiene m&iacute;nimo finito, empieza en 0).
              El CMg = 6x crece el doble de r&aacute;pido. Esto implica que el CMg siempre est&aacute;
              por encima del CVMe: la empresa siempre produce si p &gt; 0.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm font-semibold mt-4 mb-2">Curvas de costes</p>
        <EconChart xRange={[0, 6]} yRange={[0, 40]}>
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 3 * x + 3 / x)}
            color={COLORS.blue}
            weight={2.5}
          />
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 3 * x)}
            color={COLORS.emerald}
            weight={2.5}
          />
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 6 * x)}
            color={COLORS.rose}
            weight={2.5}
          />
          <Text x={4.5} y={18} size={13} color={COLORS.blue}>CMe</Text>
          <Text x={5} y={15} size={13} color={COLORS.emerald}>CVMe</Text>
          <Text x={4.5} y={30} size={13} color={COLORS.rose}>CMg</Text>
          <Text x={5.8} y={-1.5} size={14}>x</Text>
          <Text x={-0.2} y={39} size={14}>€</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMe", color: COLORS.blue },
          { label: "CVMe", color: COLORS.emerald },
          { label: "CMg", color: COLORS.rose },
        ]} />
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title="b) Curva de oferta a corto plazo"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;C&oacute;mo se obtiene la curva de oferta?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La empresa maximiza beneficio produciendo donde <InlineMath math="p = CMg" />,
              siempre que el precio cubra los costes variables. Igualamos p al CMg y
              despejamos x.
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="p = CMg = 6x \implies x^*(p) = \frac{p}{6}" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              &iquest;Hay condici&oacute;n de cierre?
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              CVMe = 3x, que parte de 0 y siempre crece. Su m&iacute;nimo es 0 (en x=0).
              Como cualquier precio p &gt; 0 supera este m&iacute;nimo, la empresa <strong>siempre produce</strong>.
            </p>
            <FormulaDisplay math="\min CVMe = 0 \implies \text{la empresa produce } \forall \, p > 0" />
          </CardContent>
        </Card>

        <ResultCard label="Curva de oferta CP" value="x*(p) = p/6 para todo p > 0" />
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title="c) Interpretaci&oacute;n interactiva"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Mueve el precio y observa qu&eacute; pasa
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Arrastra el deslizador para cambiar el precio del mercado. Ver&aacute;s c&oacute;mo
              cambia la cantidad producida, el ingreso, los costes y el excedente del productor.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-3 mt-3">
          <label className="text-sm font-medium whitespace-nowrap">
            Precio: <span className="font-bold text-blue-600 dark:text-blue-400">{price}€</span>
          </label>
          <input
            type="range"
            min={1}
            max={36}
            step={1}
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
              <p className="text-emerald-800 dark:text-emerald-200 text-xs">IT</p>
              <p className="font-bold text-emerald-900 dark:text-emerald-100">{IT.toFixed(2)}€</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-2 text-sm text-center">
              <p className="text-emerald-800 dark:text-emerald-200 text-xs">CT</p>
              <p className="font-bold text-emerald-900 dark:text-emerald-100">{CT.toFixed(2)}€</p>
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
        </div>

        <p className="text-sm font-semibold mt-4 mb-2">Excedente del productor (EP)</p>
        <EconChart xRange={[0, Math.max(xStar * 1.3, 2)]} yRange={[0, Math.max(price * 1.3, 6)]}>
          {/* CMg curve */}
          <Plot.OfX
            y={(x) => (x <= 0.01 ? NaN : 6 * x)}
            color={COLORS.rose}
            weight={2.5}
          />
          {/* Horizontal price line */}
          <Line.Segment
            point1={[0, price]}
            point2={[Math.max(xStar * 1.3, 2), price]}
            color={COLORS.blue}
            style="dashed"
            weight={2}
            opacity={0.8}
          />
          {/* Vertical line at x* down to axis */}
          <Line.Segment
            point1={[xStar, 0]}
            point2={[xStar, price]}
            color={COLORS.slate}
            style="dashed"
            weight={1.5}
            opacity={0.5}
          />
          {/* Intersection point p = CMg */}
          <Point x={xStar} y={price} color={COLORS.blue} />
          {/* Labels */}
          <Text x={Math.max(xStar * 1.15, 1.5)} y={price * 1.08} size={13} color={COLORS.blue}>
            p = {price}
          </Text>
          <Text x={Math.max(xStar * 0.8, 0.6)} y={price * 0.55} size={13} color={COLORS.rose}>
            CMg
          </Text>
          <Text x={xStar} y={-price * 0.08} size={12} color={COLORS.slate}>
            x*={xStar.toFixed(1)}
          </Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMg = 6x", color: COLORS.rose },
          { label: `Precio = ${price}€`, color: COLORS.blue, dashed: true },
        ]} />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; observamos?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              El &aacute;rea verde es el <strong>excedente del productor</strong>: lo que gana
              la empresa por encima de sus costes variables. Con p={price}€,
              EP = {EP.toFixed(2)}€.
              {profit < 0 && (
                <span> Nota que aunque hay EP positivo, el beneficio es negativo
                ({profit.toFixed(2)}€) porque los CF={3}€ no est&aacute;n cubiertos completamente.</span>
              )}
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard stepNumber={5} title="Resumen de resultados" variant="result">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ResultCard label="CT(x)" value="3x² + 3" />
          <ResultCard label="CMg(x)" value="6x" />
          <ResultCard label="CVMe(x)" value="3x" />
          <ResultCard label="CMe(x)" value="3x + 3/x" />
          <ResultCard label="Oferta CP" value="x*(p) = p/6" />
          <ResultCard label="Min CMe" value="6 (en x = 1)" />
        </div>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Conclusi&oacute;n econ&oacute;mica
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La oferta <InlineMath math="x = p/6" /> es lineal y creciente: a mayor precio,
              m&aacute;s produce. Si el salario w subiese, el CMg ser&iacute;a m&aacute;s empinado y la
              oferta se contraer&iacute;a (menos producci&oacute;n al mismo precio).
            </p>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores comunes a evitar
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Olvidar sustituir K fijo antes de despejar L.</li>
              <li>No verificar la condici&oacute;n de cierre (aqu&iacute; m&iacute;n CVMe = 0, siempre produce).</li>
              <li>Confundir la oferta (funci&oacute;n de p) con la curva CMg (funci&oacute;n de x).</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-violet-800 dark:text-violet-200">
            Conexión con el resto del tema
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Has completado el camino completo: producción → costes → oferta.
            En el <Link href="/tema-3/ejercicio-3" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 3</Link>{" "}
            veremos cómo los <strong>impuestos</strong> afectan a esta oferta, y en el{" "}
            <Link href="/tema-3/ejercicio-4" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 4</Link>{" "}
            calcularemos el <strong>excedente del productor</strong>.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
