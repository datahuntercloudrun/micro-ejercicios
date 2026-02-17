"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { StepCard } from "@/components/stats/step-card";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, COLORS } from "@/components/charts/econ-chart";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Derivadas() {
  const [tangentX, setTangentX] = useState(2);

  // f(x) = x^2, f'(x) = 2x
  const f = (x: number) => x * x;
  const fPrime = (x: number) => 2 * x;

  // Tangent line at tangentX
  const slope = fPrime(tangentX);
  const yAtPoint = f(tangentX);
  const tangentLine = (x: number) => slope * (x - tangentX) + yAtPoint;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-base px-3 py-1">
          Kit Matematico
        </Badge>
        <h1 className="text-xl sm:text-2xl font-bold">Derivadas desde cero</h1>
      </div>
      <p className="text-muted-foreground">
        No necesitas saber nada de matematicas para entender esta pagina. Empezamos
        desde el principio absoluto y terminamos sabiendo derivar cualquier funcion
        que aparezca en el curso.
      </p>

      {/* ========== PASO 1: Que es una funcion ========== */}
      <StepCard stepNumber={1} title="Que es una funcion" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: una maquina expendedora
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina una maquina donde metes un numero y sale otro numero.
              Metes un <strong>2</strong>, sale un <strong>4</strong>.
              Metes un <strong>3</strong>, sale un <strong>9</strong>.
              Metes un <strong>5</strong>, sale un <strong>25</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Esa maquina tiene una <strong>regla</strong>: eleva al cuadrado lo que le metes.
              En matematicas escribimos:
            </p>
            <FormulaDisplay math="f(x) = x^2" />
            <p className="text-blue-900 dark:text-blue-100">
              Esto se lee: &laquo;la funcion f de x es igual a x al cuadrado&raquo;. Simplemente
              significa: <strong>mete x, y te devuelve x multiplicado por si mismo</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">Ejemplos de funciones economicas</p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <InlineMath math="C(x) = 2x" /> = &laquo;el coste de producir x unidades es
                el doble de x&raquo;. Si produces 10, cuesta 20.
              </p>
              <p>
                <InlineMath math="f(L) = 40L^2" /> = &laquo;la produccion con L trabajadores es
                40 por L al cuadrado&raquo;. Con 3 trabajadores: 40 &times; 9 = 360 unidades.
              </p>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 2: Que es la pendiente ========== */}
      <StepCard stepNumber={2} title="Que es la pendiente" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: subir una cuesta
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Piensa en caminar por una calle. Si la calle es <strong>plana</strong>,
              no subes ni bajas: la pendiente es <strong>0</strong>. Si subes una
              colina empinada, la pendiente es <strong>grande</strong>. Si bajas, la
              pendiente es <strong>negativa</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La pendiente mide <strong>cuanto sube (o baja) algo por cada paso
              que das hacia la derecha</strong>. En formulas:
            </p>
            <FormulaDisplay math="\text{pendiente} = \frac{\text{cuanto subo}}{\text{cuanto avanzo}} = \frac{\Delta y}{\Delta x}" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Ejemplo numerico</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si una empresa produce 100 unidades con coste 200, y luego produce
              110 unidades con coste 230:
            </p>
            <FormulaDisplay math="\text{pendiente} = \frac{230 - 200}{110 - 100} = \frac{30}{10} = 3" />
            <p className="text-emerald-900 dark:text-emerald-100">
              Esto significa: <strong>por cada unidad extra que produce, el coste sube 3</strong>.
              Eso es exactamente el <strong>coste marginal</strong> (lo veras en el Tema 2).
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 3: De la pendiente a la derivada ========== */}
      <StepCard stepNumber={3} title="De la pendiente a la derivada" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              El problema: las curvas no tienen UNA sola pendiente
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Una linea recta tiene la misma pendiente en todos sus puntos. Pero una
              <strong> curva</strong> (como <InlineMath math="f(x) = x^2" />) cambia
              de pendiente en cada punto: al principio sube poco, luego sube mucho.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La <strong>derivada</strong> resuelve esto: te dice <strong>la pendiente
              de la curva en CADA punto</strong>. Es como tener un &laquo;inclinometro&raquo;
              que mide la inclinacion exacta donde estes parado.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Definicion en lenguaje simple
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La <strong>derivada</strong> de una funcion en un punto es
              la <strong>pendiente de la recta tangente</strong> a la curva en ese punto.
              Se escribe:
            </p>
            <FormulaDisplay math="f'(x) = \frac{df}{dx} = \text{« pendiente de } f \text{ en el punto } x \text{ »}" />
            <p className="text-amber-900 dark:text-amber-100">
              El simbolo <InlineMath math="f'(x)" /> se lee &laquo;f prima de x&raquo;.
              El simbolo <InlineMath math="\frac{df}{dx}" /> se lee &laquo;de-efe de-equis&raquo;
              y significa exactamente lo mismo.
            </p>
          </CardContent>
        </Card>

        {/* Interactive tangent line graph */}
        <p className="text-sm font-semibold mt-4 mb-1">
          Grafico interactivo: la recta tangente
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Mueve la barra para ver como cambia la pendiente (derivada) en cada punto
          de <InlineMath math="f(x) = x^2" />.
        </p>
        <EconChart xRange={[-0.5, 5]} yRange={[-2, 20]}>
          {/* The curve f(x) = x^2 */}
          <Plot.OfX y={f} color={COLORS.blue} weight={2.5} />
          {/* Tangent line */}
          <Plot.OfX y={tangentLine} color={COLORS.rose} weight={2} style="dashed" />
          {/* Point on curve */}
          <Point x={tangentX} y={yAtPoint} color={COLORS.rose} />
          {/* Labels */}
          <Text x={4} y={17} size={13} color={COLORS.blue}>f(x) = x²</Text>
          <Text x={Math.min(tangentX + 0.8, 4)} y={Math.min(yAtPoint + 1.5, 18)} size={12} color={COLORS.rose}>
            pendiente = {slope.toFixed(1)}
          </Text>
        </EconChart>

        <div className="px-1 mt-2">
          <p className="font-semibold mb-2">
            Punto: x = <strong className="text-blue-600 dark:text-blue-400">{tangentX.toFixed(1)}</strong>,
            pendiente (derivada) = <strong className="text-rose-600 dark:text-rose-400">{slope.toFixed(1)}</strong>
          </p>
          <input
            type="range"
            min={0.5}
            max={4}
            step={0.1}
            value={tangentX}
            onChange={(e) => setTangentX(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-rose-500"
          />
        </div>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-3 text-sm">
            <p className="text-emerald-900 dark:text-emerald-100">
              Observa: en x=1, la pendiente es 2. En x=2, la pendiente es 4. En x=3, la
              pendiente es 6. La derivada de <InlineMath math="x^2" /> es <InlineMath math="2x" />.
              En el siguiente paso aprenderemos <strong>por que</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 4: La regla de la potencia ========== */}
      <StepCard stepNumber={4} title="La regla de la potencia (la mas importante)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La unica regla que necesitas para el 80% del curso
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si tienes <InlineMath math="f(x) = x^n" /> (x elevado a cualquier numero n),
              su derivada es:
            </p>
            <FormulaDisplay math="\frac{d}{dx}\left(x^n\right) = n \cdot x^{n-1}" />
            <p className="text-blue-900 dark:text-blue-100">
              En palabras: <strong>baja el exponente delante y restale 1 al exponente</strong>.
              Es asi de simple.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Ejemplos paso a paso
            </p>

            <div className="space-y-4">
              {/* Example 1 */}
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">1) <InlineMath math="f(x) = x^3" /></p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  El exponente es <strong>3</strong>. Lo bajamos y restamos 1:
                </p>
                <FormulaDisplay math="f'(x) = 3 \cdot x^{3-1} = 3x^2" />
              </div>

              {/* Example 2 */}
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">2) <InlineMath math="f(x) = x^2" /></p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  El exponente es <strong>2</strong>:
                </p>
                <FormulaDisplay math="f'(x) = 2 \cdot x^{2-1} = 2x^1 = 2x" />
                <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                  (Esto confirma lo que vimos en el grafico: la derivada de <InlineMath math="x^2" /> es <InlineMath math="2x" />)
                </p>
              </div>

              {/* Example 3 */}
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">3) <InlineMath math="f(x) = x^1 = x" /></p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  El exponente es <strong>1</strong>:
                </p>
                <FormulaDisplay math="f'(x) = 1 \cdot x^{1-1} = 1 \cdot x^0 = 1 \cdot 1 = 1" />
                <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                  Logico: la funcion <InlineMath math="f(x) = x" /> es una recta con pendiente 1.
                </p>
              </div>

              {/* Example 4 */}
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">4) <InlineMath math="f(x) = \sqrt{x}" /> (la raiz cuadrada)</p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  Este ejemplo parece diferente, pero es exactamente la misma regla. Solo necesitamos
                  un truco previo: <strong>reescribir la raiz como potencia</strong>.
                </p>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
                  <CardContent className="p-3 text-sm space-y-1">
                    <p className="font-semibold text-amber-800 dark:text-amber-200">Truco clave: raiz = exponente fraccionario</p>
                    <p className="text-amber-900 dark:text-amber-100">
                      La raiz cuadrada de x es lo mismo que elevar x a <strong>1/2</strong> (o 0.5):
                    </p>
                    <FormulaDisplay math="\sqrt{x} = x^{1/2} = x^{0.5}" />
                    <p className="text-amber-900 dark:text-amber-100 text-xs">
                      Compruebalo: <InlineMath math="\sqrt{9} = 3" /> y <InlineMath math="9^{0.5} = 3" />. Es lo mismo.
                    </p>
                  </CardContent>
                </Card>

                <p className="text-emerald-900 dark:text-emerald-100 mt-2 font-medium">
                  Ahora aplicamos la regla de la potencia con n = 0.5:
                </p>

                <div className="space-y-2 mt-1">
                  <p className="text-emerald-900 dark:text-emerald-100 text-sm">
                    <strong>Paso 1:</strong> Bajamos el exponente (0.5) y restamos 1 al exponente:
                  </p>
                  <FormulaDisplay math="f'(x) = 0.5 \cdot x^{0.5 - 1} = 0.5 \cdot x^{-0.5}" />

                  <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                    <CardContent className="p-3 text-sm space-y-1">
                      <p className="font-semibold text-amber-800 dark:text-amber-200">Que significa un exponente negativo?</p>
                      <p className="text-amber-900 dark:text-amber-100">
                        Un exponente negativo &laquo;baja&raquo; el termino al denominador de una fraccion:
                      </p>
                      <FormulaDisplay math="x^{-0.5} = \frac{1}{x^{0.5}} = \frac{1}{\sqrt{x}}" />
                      <p className="text-amber-900 dark:text-amber-100 text-xs">
                        En general: <InlineMath math="x^{-n} = \frac{1}{x^n}" />. El signo negativo significa &laquo;ponlo abajo&raquo;.
                      </p>
                    </CardContent>
                  </Card>

                  <p className="text-emerald-900 dark:text-emerald-100 text-sm">
                    <strong>Paso 2:</strong> Sustituimos <InlineMath math="x^{-0.5}" /> por <InlineMath math="\frac{1}{\sqrt{x}}" />:
                  </p>
                  <FormulaDisplay math="f'(x) = 0.5 \cdot \frac{1}{\sqrt{x}} = \frac{0.5}{\sqrt{x}}" />

                  <p className="text-emerald-900 dark:text-emerald-100 text-sm">
                    <strong>Paso 3:</strong> Simplificamos 0.5 como 1/2:
                  </p>
                  <FormulaDisplay math="f'(x) = \frac{1}{2\sqrt{x}}" />
                </div>

                <p className="text-emerald-900 dark:text-emerald-100 text-xs mt-2">
                  Esto aparece en el Tema 2 (Ejercicio 1c) cuando la funcion de costes es <InlineMath math="C(x) = 2\sqrt{x}" />.
                </p>
              </div>

              {/* Example 5 - constant */}
              <div>
                <p className="font-medium">5) <InlineMath math="f(x) = 7" /> (una constante)</p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  Un numero sin x es como <InlineMath math="7 \cdot x^0" />, exponente <strong>0</strong>:
                </p>
                <FormulaDisplay math="f'(x) = 0 \cdot x^{-1} = 0" />
                <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                  Logico: una constante es una linea horizontal, pendiente 0. No cambia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 5: Tres reglas extra sencillas ========== */}
      <StepCard stepNumber={5} title="Tres reglas extra (muy faciles)" variant="calculation">
        <div className="grid grid-cols-1 gap-3">
          {/* Rule 1: constant factor */}
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Regla 1: Si hay un numero multiplicando, se queda
              </p>
              <FormulaDisplay math="\frac{d}{dx}\left(a \cdot f(x)\right) = a \cdot f'(x)" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo: <InlineMath math="\frac{d}{dx}(5x^3) = 5 \cdot 3x^2 = 15x^2" />
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo economico: <InlineMath math="\frac{d}{dx}(2x^2) = 2 \cdot 2x = 4x" />.
                Esto aparece en el Tema 2 cuando calculamos el CMg de <InlineMath math="C(x) = 2x^2" />.
              </p>
            </CardContent>
          </Card>

          {/* Rule 2: sum */}
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Regla 2: Si hay una suma, se deriva cada trozo por separado
              </p>
              <FormulaDisplay math="\frac{d}{dx}\left(f(x) + g(x)\right) = f'(x) + g'(x)" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo: <InlineMath math="\frac{d}{dx}(x^3 - 2x^2 + 2x)" />
              </p>
              <FormulaDisplay math="= 3x^2 - 2 \cdot 2x + 2 = 3x^2 - 4x + 2" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Esto es exactamente el CMg de <InlineMath math="C(x) = x^3 - 2x^2 + 2x" /> (Tema 2, Ejercicio 1d).
              </p>
            </CardContent>
          </Card>

          {/* Rule 3: constant disappears */}
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Regla 3: Las constantes sueltas desaparecen
              </p>
              <FormulaDisplay math="\frac{d}{dx}\left(f(x) + c\right) = f'(x)" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo: <InlineMath math="\frac{d}{dx}(x^2 + 4x + 4) = 2x + 4" />.
                El &laquo;+4&raquo; suelto desaparece. Los costes fijos no afectan al coste marginal.
              </p>
            </CardContent>
          </Card>
        </div>
      </StepCard>

      {/* ========== PASO 6: Practica con funciones del curso ========== */}
      <StepCard stepNumber={6} title="Practica: funciones que aparecen en el curso" variant="result">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Ahora toca practicar. Intenta derivar estas funciones antes de mirar la solucion.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 mt-3">
          {/* Practice 1 */}
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                1) <InlineMath math="C(x) = 2x" /> (Tema 2, Ej.1a)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion paso a paso
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Tenemos <InlineMath math="2x = 2 \cdot x^1" /></p>
                  <p>Regla: baja el 1, resta 1 al exponente:</p>
                  <FormulaDisplay math="CMg = 2 \cdot 1 \cdot x^{1-1} = 2 \cdot x^0 = 2" />
                  <p>El coste marginal es constante: cada unidad extra cuesta 2.</p>
                </div>
              </details>
            </CardContent>
          </Card>

          {/* Practice 2 */}
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                2) <InlineMath math="C(x) = 2\sqrt{x} = 2x^{0.5}" /> (Tema 2, Ej.1c)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion paso a paso
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Tenemos <InlineMath math="2x^{0.5}" /></p>
                  <p>Regla de la potencia con factor constante:</p>
                  <FormulaDisplay math="CMg = 2 \cdot 0.5 \cdot x^{0.5-1} = x^{-0.5} = \frac{1}{\sqrt{x}}" />
                  <p>El coste marginal disminuye: cuanto mas produces, mas barata es cada unidad extra.</p>
                </div>
              </details>
            </CardContent>
          </Card>

          {/* Practice 3 */}
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                3) <InlineMath math="f(L) = 40L^2" /> (Tema 1, Ej.1 corto plazo)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion paso a paso
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Tenemos <InlineMath math="40L^2" /></p>
                  <p>Derivamos respecto a L (baja el 2, resta 1):</p>
                  <FormulaDisplay math="PMg_L = 40 \cdot 2 \cdot L^{2-1} = 80L" />
                  <p>La productividad marginal del trabajo crece con L (rendimientos crecientes del factor).</p>
                </div>
              </details>
            </CardContent>
          </Card>

          {/* Practice 4 */}
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                4) <InlineMath math="C(x) = x^3 - 2x^2 + 2x" /> (Tema 2, Ej.1d)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion paso a paso
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Derivamos cada termino por separado:</p>
                  <FormulaDisplay math="\frac{d}{dx}(x^3) = 3x^2" />
                  <FormulaDisplay math="\frac{d}{dx}(-2x^2) = -2 \cdot 2x = -4x" />
                  <FormulaDisplay math="\frac{d}{dx}(2x) = 2" />
                  <p>Sumamos:</p>
                  <FormulaDisplay math="CMg = 3x^2 - 4x + 2" />
                </div>
              </details>
            </CardContent>
          </Card>

          {/* Practice 5 */}
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                5) <InlineMath math="C(x) = x^2 + 4x + 4" /> (Tema 3, Ej.2)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion paso a paso
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Derivamos cada termino:</p>
                  <FormulaDisplay math="\frac{d}{dx}(x^2) = 2x" />
                  <FormulaDisplay math="\frac{d}{dx}(4x) = 4" />
                  <FormulaDisplay math="\frac{d}{dx}(4) = 0 \quad \text{(constante, desaparece)}" />
                  <p>Sumamos:</p>
                  <FormulaDisplay math="CMg = 2x + 4" />
                  <p>El &laquo;4&raquo; suelto (coste fijo) no aparece en el marginal.</p>
                </div>
              </details>
            </CardContent>
          </Card>
        </div>
      </StepCard>

      {/* ========== PASO 7: Resumen ========== */}
      <StepCard stepNumber={7} title="Resumen: lo que necesitas recordar" variant="result">
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Las 4 reglas que cubren todo el curso
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Regla</th>
                    <th className="text-left py-2 pr-4">Formula</th>
                    <th className="text-left py-2">Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Potencia</td>
                    <td className="py-2 pr-4"><InlineMath math="(x^n)' = nx^{n-1}" /></td>
                    <td className="py-2"><InlineMath math="(x^3)' = 3x^2" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Constante &times;</td>
                    <td className="py-2 pr-4"><InlineMath math="(af)' = af'" /></td>
                    <td className="py-2"><InlineMath math="(5x^3)' = 15x^2" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Suma</td>
                    <td className="py-2 pr-4"><InlineMath math="(f+g)' = f'+g'" /></td>
                    <td className="py-2"><InlineMath math="(x^2+3x)' = 2x+3" /></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Constante sola</td>
                    <td className="py-2 pr-4"><InlineMath math="(c)' = 0" /></td>
                    <td className="py-2"><InlineMath math="(7)' = 0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Significado economico de la derivada
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>
                <strong>Derivada de costes</strong> = Coste Marginal (CMg): cuanto cuesta producir una unidad mas.
              </li>
              <li>
                <strong>Derivada de produccion</strong> = Productividad Marginal (PMg): cuanto produce un trabajador mas.
              </li>
              <li>
                <strong>Derivada de beneficio</strong> = Beneficio Marginal: cuanto ganancia da una unidad mas.
              </li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Link href="/toolkit" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Kit Matematico
        </Link>
        <Link href="/toolkit/derivadas-parciales" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          Derivadas parciales <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
