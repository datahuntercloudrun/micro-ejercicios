"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { StepCard } from "@/components/stats/step-card";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, COLORS } from "@/components/charts/econ-chart";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

const quizData = [
  {
    id: 1,
    funcion: "C(x) = 2x",
    contexto: "Tema 2, Ej.1a",
    opciones: ["CMg = 2", "CMg = 2x", "CMg = x", "CMg = 0"],
    correcta: 0,
    explicacion: "Tenemos 2x = 2·x¹. Baja el 1, resta 1 al exponente: 2·1·x⁰ = 2. El coste marginal es constante.",
  },
  {
    id: 2,
    funcion: "C(x) = 2\\sqrt{x} = 2x^{0.5}",
    contexto: "Tema 2, Ej.1c",
    opciones: ["CMg = \\frac{1}{\\sqrt{x}}", "CMg = \\sqrt{x}", "CMg = \\frac{2}{\\sqrt{x}}", "CMg = x^{-1.5}"],
    correcta: 0,
    explicacion: "Regla de la potencia: 2·0.5·x^(0.5-1) = x^(-0.5) = 1/√x. El CMg disminuye con x.",
  },
  {
    id: 3,
    funcion: "f(L) = 40L^2",
    contexto: "Tema 1, Ej.1 corto plazo",
    opciones: ["PMg_L = 80L", "PMg_L = 40L", "PMg_L = 20L^2", "PMg_L = 80L^2"],
    correcta: 0,
    explicacion: "Baja el 2, resta 1: 40·2·L^(2-1) = 80L. Rendimientos crecientes del factor trabajo.",
  },
  {
    id: 4,
    funcion: "C(x) = x^3 - 2x^2 + 2x",
    contexto: "Tema 2, Ej.1d",
    opciones: ["CMg = 3x^2 - 4x + 2", "CMg = 3x^2 - 2x + 2", "CMg = x^2 - 4x + 2", "CMg = 3x^2 - 4x"],
    correcta: 0,
    explicacion: "Derivamos término a término: 3x² de x³, -4x de -2x², y 2 de 2x. Resultado: 3x²-4x+2.",
  },
  {
    id: 5,
    funcion: "C(x) = x^2 + 4x + 4",
    contexto: "Tema 3, Ej.2",
    opciones: ["CMg = 2x + 4", "CMg = 2x + 4x", "CMg = x + 4", "CMg = 2x + 8"],
    correcta: 0,
    explicacion: "De x² sale 2x, de 4x sale 4, y la constante 4 desaparece. El coste fijo no afecta al marginal.",
  },
];

function ResolucionPasoAPaso({ id }: { id: number }) {
  if (id === 1) return (
    <div className="space-y-1">
      <p>Tenemos <InlineMath math="2x = 2 \cdot x^1" /></p>
      <p>Regla: baja el 1, resta 1 al exponente:</p>
      <FormulaDisplay math="CMg = 2 \cdot 1 \cdot x^{1-1} = 2 \cdot x^0 = 2" />
      <p>El coste marginal es constante: cada unidad extra cuesta 2.</p>
    </div>
  );
  if (id === 2) return (
    <div className="space-y-1">
      <p>Tenemos <InlineMath math="2x^{0.5}" /></p>
      <p>Regla de la potencia con factor constante:</p>
      <FormulaDisplay math="CMg = 2 \cdot 0.5 \cdot x^{0.5-1} = x^{-0.5} = \frac{1}{\sqrt{x}}" />
      <p>El coste marginal disminuye: cuanto más produces, más barata es cada unidad extra.</p>
    </div>
  );
  if (id === 3) return (
    <div className="space-y-1">
      <p>Tenemos <InlineMath math="40L^2" /></p>
      <p>Derivamos respecto a L (baja el 2, resta 1):</p>
      <FormulaDisplay math="PMg_L = 40 \cdot 2 \cdot L^{2-1} = 80L" />
      <p>La productividad marginal del trabajo crece con L (rendimientos crecientes del factor).</p>
    </div>
  );
  if (id === 4) return (
    <div className="space-y-1">
      <p>Derivamos cada término por separado:</p>
      <FormulaDisplay math="\frac{d}{dx}(x^3) = 3x^2" />
      <FormulaDisplay math="\frac{d}{dx}(-2x^2) = -2 \cdot 2x = -4x" />
      <FormulaDisplay math="\frac{d}{dx}(2x) = 2" />
      <p>Sumamos:</p>
      <FormulaDisplay math="CMg = 3x^2 - 4x + 2" />
    </div>
  );
  if (id === 5) return (
    <div className="space-y-1">
      <p>Derivamos cada término:</p>
      <FormulaDisplay math="\frac{d}{dx}(x^2) = 2x" />
      <FormulaDisplay math="\frac{d}{dx}(4x) = 4" />
      <FormulaDisplay math="\frac{d}{dx}(4) = 0 \quad \text{(constante, desaparece)}" />
      <p>Sumamos:</p>
      <FormulaDisplay math="CMg = 2x + 4" />
      <p>El &laquo;4&raquo; suelto (coste fijo) no aparece en el marginal.</p>
    </div>
  );
  return null;
}

function QuizPractica() {
  const [respuestas, setRespuestas] = useState<Record<number, number | null>>({});

  const handleSelect = (preguntaId: number, opcionIdx: number) => {
    if (respuestas[preguntaId] !== undefined && respuestas[preguntaId] !== null) return;
    setRespuestas((prev) => ({ ...prev, [preguntaId]: opcionIdx }));
  };

  const acertadas = quizData.filter((q) => respuestas[q.id] === q.correcta).length;
  const respondidas = Object.values(respuestas).filter((v) => v !== null).length;

  return (
    <div className="space-y-4">
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 text-sm">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            Selecciona la derivada correcta de cada funci&oacute;n.
          </p>
          <p className="text-blue-900 dark:text-blue-100 mt-1">
            Intenta razonar antes de pulsar. No hay truco: aplica la regla de la potencia.
          </p>
        </CardContent>
      </Card>

      {quizData.map((q) => {
        const seleccion = respuestas[q.id] ?? null;
        const respondida = seleccion !== null;
        const esCorrecta = seleccion === q.correcta;

        return (
          <Card
            key={q.id}
            className={`border transition-colors ${
              respondida
                ? esCorrecta
                  ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-950/10"
                  : "border-rose-300 dark:border-rose-700 bg-rose-50/30 dark:bg-rose-950/10"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            <CardContent className="p-4 text-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold">
                  {q.id}) <InlineMath math={q.funcion} />{" "}
                  <span className="text-muted-foreground font-normal">({q.contexto})</span>
                </p>
                {respondida && (
                  <div className={`flex items-center gap-1 shrink-0 text-xs font-bold px-2 py-1 rounded-full ${
                    esCorrecta
                      ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                      : "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300"
                  }`}>
                    {esCorrecta ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    {esCorrecta ? "Correcto" : "Incorrecto"}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.opciones.map((op, idx) => {
                  const esEstaCorrecta = idx === q.correcta;
                  const esEstaSeleccionada = seleccion === idx;
                  let estilo = "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 cursor-pointer";

                  if (respondida) {
                    if (esEstaCorrecta) {
                      estilo = "border-emerald-400 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 ring-1 ring-emerald-400/50";
                    } else if (esEstaSeleccionada && !esEstaCorrecta) {
                      estilo = "border-rose-400 dark:border-rose-600 bg-rose-50 dark:bg-rose-950/30 ring-1 ring-rose-400/50";
                    } else {
                      estilo = "border-gray-200 dark:border-gray-800 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(q.id, idx)}
                      disabled={respondida}
                      className={`w-full text-left border rounded-lg px-3 py-2.5 text-sm transition-all ${estilo} ${respondida ? "cursor-default" : ""}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold shrink-0 ${
                          respondida && esEstaCorrecta
                            ? "bg-emerald-500 text-white"
                            : respondida && esEstaSeleccionada
                            ? "bg-rose-500 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        }`}>
                          {respondida && esEstaCorrecta ? <Check className="h-3 w-3" /> : respondida && esEstaSeleccionada ? <X className="h-3 w-3" /> : String.fromCharCode(97 + idx)}
                        </span>
                        <InlineMath math={op} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {respondida && (
                <div className="space-y-2">
                  <div className={`text-xs leading-relaxed p-2.5 rounded-lg ${
                    esCorrecta
                      ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200"
                      : "bg-rose-100/50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-200"
                  }`}>
                    {q.explicacion}
                  </div>
                  <details className="group">
                    <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium text-xs hover:underline">
                      Ver resolución paso a paso
                    </summary>
                    <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 text-sm space-y-1">
                      <ResolucionPasoAPaso id={q.id} />
                    </div>
                  </details>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {respondidas === quizData.length && (
        <Card className={`border-2 ${
          acertadas === quizData.length
            ? "border-emerald-400 dark:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20"
            : acertadas >= 3
            ? "border-amber-400 dark:border-amber-600 bg-amber-50/50 dark:bg-amber-950/20"
            : "border-rose-400 dark:border-rose-600 bg-rose-50/50 dark:bg-rose-950/20"
        }`}>
          <CardContent className="p-4 text-center space-y-1">
            <p className="text-2xl font-bold">
              {acertadas}/{quizData.length}
            </p>
            <p className="text-sm text-muted-foreground">
              {acertadas === quizData.length
                ? "Perfecto. Dominas la regla de la potencia."
                : acertadas >= 3
                ? "Casi. Repasa las que fallaste arriba."
                : "Vuelve a leer los pasos 3-5 y repite."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

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
          Kit Matemático
        </Badge>
        <h1 className="text-xl sm:text-2xl font-bold">Derivadas desde cero</h1>
      </div>
      <p className="text-muted-foreground">
        No necesitas saber nada de matemáticas para entender esta página. Empezamos
        desde el principio absoluto y terminamos sabiendo derivar cualquier función
        que aparezca en el curso.
      </p>

      {/* ========== PASO 1: Que es una funcion ========== */}
      <StepCard stepNumber={1} title="Qué es una función" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogía: una máquina expendedora
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina una máquina donde metes un número y sale otro número.
              Metes un <strong>2</strong>, sale un <strong>4</strong>.
              Metes un <strong>3</strong>, sale un <strong>9</strong>.
              Metes un <strong>5</strong>, sale un <strong>25</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Esa máquina tiene una <strong>regla</strong>: eleva al cuadrado lo que le metes.
              En matemáticas escribimos:
            </p>
            <FormulaDisplay math="f(x) = x^2" />
            <p className="text-blue-900 dark:text-blue-100">
              Esto se lee: &laquo;la función f de x es igual a x al cuadrado&raquo;. Simplemente
              significa: <strong>mete x, y te devuelve x multiplicado por sí mismo</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">Ejemplos de funciones económicas</p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <InlineMath math="C(x) = 2x" /> = &laquo;el coste de producir x unidades es
                el doble de x&raquo;. Si produces 10, cuesta 20.
              </p>
              <p>
                <InlineMath math="f(L) = 40L^2" /> = &laquo;la producción con L trabajadores es
                40 por L al cuadrado&raquo;. Con 3 trabajadores: 40 &times; 9 = 360 unidades.
              </p>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 2: Que es la pendiente ========== */}
      <StepCard stepNumber={2} title="Qué es la pendiente" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogía: subir una cuesta
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Piensa en caminar por una calle. Si la calle es <strong>plana</strong>,
              no subes ni bajas: la pendiente es <strong>0</strong>. Si subes una
              colina empinada, la pendiente es <strong>grande</strong>. Si bajas, la
              pendiente es <strong>negativa</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La pendiente mide <strong>cuánto sube (o baja) algo por cada paso
              que das hacia la derecha</strong>. En fórmulas:
            </p>
            <FormulaDisplay math="\text{pendiente} = \frac{\text{cuanto subo}}{\text{cuanto avanzo}} = \frac{\Delta y}{\Delta x}" />
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Ejemplo numérico</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si una empresa produce 100 unidades con coste 200, y luego produce
              110 unidades con coste 230:
            </p>
            <FormulaDisplay math="\text{pendiente} = \frac{230 - 200}{110 - 100} = \frac{30}{10} = 3" />
            <p className="text-emerald-900 dark:text-emerald-100">
              Esto significa: <strong>por cada unidad extra que produce, el coste sube 3</strong>.
              Eso es exactamente el <strong>coste marginal</strong> (lo verás en el Tema 2).
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
              Una línea recta tiene la misma pendiente en todos sus puntos. Pero una
              <strong> curva</strong> (como <InlineMath math="f(x) = x^2" />) cambia
              de pendiente en cada punto: al principio sube poco, luego sube mucho.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La <strong>derivada</strong> resuelve esto: te dice <strong>la pendiente
              de la curva en CADA punto</strong>. Es como tener un &laquo;inclinómetro&raquo;
              que mide la inclinación exacta donde estés parado.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Definición en lenguaje simple
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La <strong>derivada</strong> de una función en un punto es
              la <strong>pendiente de la recta tangente</strong> a la curva en ese punto.
              Se escribe:
            </p>
            <FormulaDisplay math="f'(x) = \frac{df}{dx} = \text{« pendiente de } f \text{ en el punto } x \text{ »}" />
            <p className="text-amber-900 dark:text-amber-100">
              El símbolo <InlineMath math="f'(x)" /> se lee &laquo;f prima de x&raquo;.
              El símbolo <InlineMath math="\frac{df}{dx}" /> se lee &laquo;de-efe de-equis&raquo;
              y significa exactamente lo mismo.
            </p>
          </CardContent>
        </Card>

        {/* Interactive tangent line graph */}
        <p className="text-sm font-semibold mt-4 mb-1">
          Gráfico interactivo: la recta tangente
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Mueve la barra para ver cómo cambia la pendiente (derivada) en cada punto
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
              En el siguiente paso aprenderemos <strong>por qué</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 4: La regla de la potencia ========== */}
      <StepCard stepNumber={4} title="La regla de la potencia (la más importante)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La única regla que necesitas para el 80% del curso
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si tienes <InlineMath math="f(x) = x^n" /> (x elevado a cualquier número n),
              su derivada es:
            </p>
            <FormulaDisplay math="\frac{d}{dx}\left(x^n\right) = n \cdot x^{n-1}" />
            <p className="text-blue-900 dark:text-blue-100">
              En palabras: <strong>baja el exponente delante y réstale 1 al exponente</strong>.
              Es así de simple.
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
                  (Esto confirma lo que vimos en el gráfico: la derivada de <InlineMath math="x^2" /> es <InlineMath math="2x" />)
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
                  Lógico: la función <InlineMath math="f(x) = x" /> es una recta con pendiente 1.
                </p>
              </div>

              {/* Example 4 */}
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">4) <InlineMath math="f(x) = \sqrt{x}" /> (la raíz cuadrada)</p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  Este ejemplo parece diferente, pero es exactamente la misma regla. Solo necesitamos
                  un truco previo: <strong>reescribir la raíz como potencia</strong>.
                </p>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
                  <CardContent className="p-3 text-sm space-y-1">
                    <p className="font-semibold text-amber-800 dark:text-amber-200">Truco clave: raíz = exponente fraccionario</p>
                    <p className="text-amber-900 dark:text-amber-100">
                      La raíz cuadrada de x es lo mismo que elevar x a <strong>1/2</strong> (o 0.5):
                    </p>
                    <FormulaDisplay math="\sqrt{x} = x^{1/2} = x^{0.5}" />
                    <p className="text-amber-900 dark:text-amber-100 text-xs">
                      Compruébalo: <InlineMath math="\sqrt{9} = 3" /> y <InlineMath math="9^{0.5} = 3" />. Es lo mismo.
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
                      <p className="font-semibold text-amber-800 dark:text-amber-200">¿Qué significa un exponente negativo?</p>
                      <p className="text-amber-900 dark:text-amber-100">
                        Un exponente negativo &laquo;baja&raquo; el término al denominador de una fracción:
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
                  Esto aparece en el Tema 2 (Ejercicio 1c) cuando la función de costes es <InlineMath math="C(x) = 2\sqrt{x}" />.
                </p>
              </div>

              {/* Example 5 - constant */}
              <div>
                <p className="font-medium">5) <InlineMath math="f(x) = 7" /> (una constante)</p>
                <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                  Un número sin x es como <InlineMath math="7 \cdot x^0" />, exponente <strong>0</strong>:
                </p>
                <FormulaDisplay math="f'(x) = 0 \cdot x^{-1} = 0" />
                <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                  Lógico: una constante es una línea horizontal, pendiente 0. No cambia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 5: Tres reglas extra sencillas ========== */}
      <StepCard stepNumber={5} title="Tres reglas extra (muy fáciles)" variant="calculation">
        <div className="grid grid-cols-1 gap-3">
          {/* Rule 1: constant factor */}
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Regla 1: Si hay un número multiplicando, se queda
              </p>
              <FormulaDisplay math="\frac{d}{dx}\left(a \cdot f(x)\right) = a \cdot f'(x)" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo: <InlineMath math="\frac{d}{dx}(5x^3) = 5 \cdot 3x^2 = 15x^2" />
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo económico: <InlineMath math="\frac{d}{dx}(2x^2) = 2 \cdot 2x = 4x" />.
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
            <CardContent className="p-4 text-sm space-y-3">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                Regla 3: Las constantes sueltas desaparecen
              </p>
              <FormulaDisplay math="\frac{d}{dx}\left(f(x) + c\right) = f'(x)" />
              <p className="text-emerald-900 dark:text-emerald-100">
                Ejemplo: <InlineMath math="\frac{d}{dx}(x^2 + 4x + 4) = 2x + 4" />.
                El &laquo;+4&raquo; suelto desaparece.
              </p>
              <div className="bg-white/60 dark:bg-white/5 rounded-lg p-3 space-y-2 border border-emerald-200/50 dark:border-emerald-700/30">
                <p className="font-medium text-emerald-800 dark:text-emerald-200">¿Por qué las constantes desaparecen al derivar?</p>
                <p className="text-emerald-900 dark:text-emerald-100 leading-relaxed">
                  La derivada mide <strong>cuánto cambia</strong> la función cuando x varía. Una constante, por definición, <strong>no cambia nunca</strong>: vale lo mismo cuando x = 1 que cuando x = 1000. Si algo no cambia, su tasa de cambio es cero.
                </p>
                <p className="font-medium text-emerald-800 dark:text-emerald-200 pt-1">¿Y qué tiene que ver con los costes fijos?</p>
                <p className="text-emerald-900 dark:text-emerald-100 leading-relaxed">
                  Imagina que alquilas un local por 500 &euro;/mes. Produzcas 1 unidad o 10.000, el alquiler es el mismo: 500 &euro;. Ese coste fijo no cambia al producir una unidad más, así que cuando calculas el <strong>coste marginal</strong> (= derivada del coste total), el alquiler desaparece. Solo influyen los costes que <em>sí</em> varían con la cantidad: materias primas, horas extra, electricidad de las máquinas...
                </p>
                <p className="text-emerald-900/70 dark:text-emerald-100/70 text-xs italic">
                  Por eso en microeconomía la decisión de &laquo;¿produzco una unidad más?&raquo; solo depende de los costes variables, nunca de los fijos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </StepCard>

      {/* ========== PASO 6: Practica con funciones del curso ========== */}
      <StepCard stepNumber={6} title="Práctica: funciones que aparecen en el curso" variant="result">
        <QuizPractica />
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
                    <th className="text-left py-2 pr-4">Fórmula</th>
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
              Significado económico de la derivada
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>
                <strong>Derivada de costes</strong> = Coste Marginal (CMg): cuánto cuesta producir una unidad más.
              </li>
              <li>
                <strong>Derivada de producción</strong> = Productividad Marginal (PMg): cuánto produce un trabajador más.
              </li>
              <li>
                <strong>Derivada de beneficio</strong> = Beneficio Marginal: cuánta ganancia da una unidad más.
              </li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Link href="/toolkit" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Kit Matemático
        </Link>
        <Link href="/toolkit/derivadas-parciales" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          Derivadas parciales <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
