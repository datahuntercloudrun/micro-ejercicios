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

export default function DerivadasParciales() {
  const [kFijo, setKFijo] = useState(4);

  // f(L, K) = 10L^2 * K (del Ejercicio 1 del Tema 1)
  const fCP = (L: number) => 10 * L * L * kFijo;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-base px-3 py-1">
          Kit Matematico
        </Badge>
        <h1 className="text-xl sm:text-2xl font-bold">Derivadas parciales</h1>
      </div>
      <p className="text-muted-foreground">
        Si ya entiendes las derivadas normales (pagina anterior), las parciales son
        casi lo mismo pero con funciones que dependen de <strong>dos o mas variables</strong>.
      </p>

      {/* ========== PASO 1: Funciones de varias variables ========== */}
      <StepCard stepNumber={1} title="Funciones de varias variables" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: una receta de cocina
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que haces galletas. El resultado (cuantas galletas salen) depende de
              <strong> dos ingredientes</strong>: harina y huevos. Si cambias la cantidad de
              harina, cambia el resultado. Si cambias los huevos, tambien cambia.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              En microeconomia es igual: la <strong>produccion</strong> depende de dos factores:
              <strong> trabajo (L)</strong> y <strong>capital (K)</strong>.
            </p>
            <FormulaDisplay math="x = f(L, K) = 10L^2K" />
            <p className="text-blue-900 dark:text-blue-100">
              Con 3 trabajadores y 2 maquinas: <InlineMath math="x = 10 \cdot 3^2 \cdot 2 = 10 \cdot 9 \cdot 2 = 180" /> unidades.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              La pregunta clave
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Si contrato <strong>un trabajador mas</strong> (sin cambiar las maquinas),
              ¿cuanto mas produzco? Y si compro <strong>una maquina mas</strong> (sin
              cambiar los trabajadores), ¿cuanto mas produzco?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Para responder, necesitamos <strong>derivadas parciales</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 2: La idea central ========== */}
      <StepCard stepNumber={2} title="La idea: cambia UNA variable, congela la otra" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: cambiar UN ingrediente de la receta
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si quieres saber como afecta <strong>solo la harina</strong> al resultado,
              mantienes los huevos fijos y cambias solo la harina. Ignoras completamente
              los huevos, como si fueran un numero fijo.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La <strong>derivada parcial respecto a L</strong> es exactamente eso:
              derivar como si K fuera un <strong>numero cualquiera</strong> (una constante),
              no una variable.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Notacion
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              En derivadas normales usabamos <InlineMath math="\frac{df}{dx}" /> (d recta).
              En parciales usamos <InlineMath math="\frac{\partial f}{\partial L}" /> (d rizada).
              La &laquo;d rizada&raquo; (<InlineMath math="\partial" />) simplemente avisa de que
              hay <strong>mas variables</strong> pero solo estamos moviendo una.
            </p>
            <FormulaDisplay math="\frac{\partial f}{\partial L} = \text{« cuanto cambia } f \text{ si muevo } L \text{ y congelo todo lo demás »}" />
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 3: Como calcularla ========== */}
      <StepCard stepNumber={3} title="Como se calcula (es mas facil de lo que parece)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              El metodo en 2 pasos
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-blue-900 dark:text-blue-100">
              <li><strong>Decide que variable mueves</strong> (por ejemplo, L).</li>
              <li><strong>Trata TODAS las demas como numeros</strong> (K es un numero fijo, no una variable). Luego deriva normalmente con las reglas de la pagina anterior.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-4">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Ejemplo completo: <InlineMath math="f(L,K) = 10L^2K" />
            </p>

            {/* Partial wrt L */}
            <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
              <p className="font-medium">Derivada parcial respecto a L:</p>
              <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                &laquo;K es un numero fijo&raquo;. Entonces <InlineMath math="10K" /> es un numero
                fijo que multiplica a <InlineMath math="L^2" />.
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Aplicamos la regla de la potencia a <InlineMath math="L^2" />:
              </p>
              <FormulaDisplay math="\frac{\partial f}{\partial L} = 10K \cdot 2L^{2-1} = 20LK" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                Esto es la <strong>Productividad Marginal del Trabajo (PMg_L)</strong>:
                cuanto mas produce un trabajador adicional.
              </p>
            </div>

            {/* Partial wrt K */}
            <div>
              <p className="font-medium">Derivada parcial respecto a K:</p>
              <p className="text-emerald-900 dark:text-emerald-100 mt-1">
                Ahora &laquo;L es un numero fijo&raquo;. Entonces <InlineMath math="10L^2" /> es un numero
                fijo que multiplica a <InlineMath math="K^1" />.
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Aplicamos la regla de la potencia a <InlineMath math="K^1" />:
              </p>
              <FormulaDisplay math="\frac{\partial f}{\partial K} = 10L^2 \cdot 1 \cdot K^{1-1} = 10L^2" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                Esto es la <strong>Productividad Marginal del Capital (PMg_K)</strong>:
                cuanto mas produce una maquina adicional.
              </p>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 4: Grafico interactivo ========== */}
      <StepCard stepNumber={4} title="Visualizacion: el corto plazo como un corte" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Fijar K es como tomar un &laquo;corte&raquo; de la funcion
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La funcion <InlineMath math="f(L,K) = 10L^2K" /> vive en 3 dimensiones (L, K, produccion).
              Si fijamos K en un valor concreto, nos quedamos con una curva en 2D que solo depende de L.
              Eso es exactamente el <strong>corto plazo</strong>.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm font-semibold mt-3 mb-1">
          Produccion a corto plazo con K = {kFijo}
        </p>
        <EconChart xRange={[-0.2, 4.5]} yRange={[-30, 700]}>
          <Plot.OfX y={fCP} color={COLORS.blue} weight={2.5} />
          <Text x={3} y={fCP(3) + 40} size={13} color={COLORS.blue}>
            f(L) = {10 * kFijo}L²
          </Text>
        </EconChart>

        <div className="px-1 mt-2">
          <p className="font-semibold mb-2">
            Capital fijo: K = <strong className="text-blue-600 dark:text-blue-400">{kFijo}</strong>
          </p>
          <input
            type="range"
            min={1}
            max={8}
            step={1}
            value={kFijo}
            onChange={(e) => setKFijo(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-blue-500"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Mueve para cambiar el nivel de capital fijo y ver como cambia la curva de produccion.
          </p>
        </div>

        {/* De la curva a la pregunta economica */}
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              ¿Que podemos hacer con esta curva?
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Con K={kFijo}, la funcion de dos variables se convierte en una de <strong>una sola variable</strong>:
            </p>
            <FormulaDisplay math={`f(L) = ${10 * kFijo}L^2`} />
            <p className="text-emerald-900 dark:text-emerald-100">
              Y como ya solo depende de L, podemos hacerle una <strong>derivada normal</strong> (como en
              la pagina anterior). Pero, ¿que nos dice esa derivada?
            </p>
          </CardContent>
        </Card>

        {/* Introduccion suave a PMgL */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La pregunta del empresario
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que tienes una fabrica con {kFijo} maquinas y ya has contratado varios trabajadores.
              Tu pregunta como empresario es: <strong>&laquo;Si contrato UN trabajador mas, ¿cuanta
              produccion adicional gano?&raquo;</strong>
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La respuesta es exactamente la <strong>derivada de la produccion respecto al
              trabajo</strong>: mide la tasa a la que crece la produccion cuando anado un poquito
              mas de L.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              En economia, esta idea tiene nombre propio: se llama <strong>Productividad Marginal
              del Trabajo</strong>, o abreviado <InlineMath math="PMg_L" />. Es simplemente la
              derivada parcial <InlineMath math="\frac{\partial f}{\partial L}" /> con un nombre
              mas descriptivo.
            </p>
          </CardContent>
        </Card>

        {/* Calculo paso a paso */}
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Calculemosla con K = {kFijo}
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Partimos de <InlineMath math={`f(L) = ${10 * kFijo}L^2`} /> y derivamos respecto a L
              con la regla de la potencia:
            </p>
            <FormulaDisplay math={`PMg_L = \\frac{df}{dL} = ${10 * kFijo} \\cdot 2L^{2-1} = ${20 * kFijo}L`} />
            <p className="text-emerald-900 dark:text-emerald-100">
              Fijate que usamos <InlineMath math="\frac{df}{dL}" /> (d recta, no rizada) porque al fijar
              K ya solo queda <strong>una variable</strong>. Es una derivada completamente normal.
            </p>
          </CardContent>
        </Card>

        {/* Interpretacion economica */}
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              ¿Que significa el resultado?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              <InlineMath math={`PMg_L = ${20 * kFijo}L`} /> nos dice que la produccion
              extra de un trabajador adicional <strong>depende de cuantos trabajadores ya
              tengas</strong>. Con K={kFijo}:
            </p>
            <ul className="list-disc pl-5 text-amber-900 dark:text-amber-100 space-y-1">
              <li>Si tienes 1 trabajador: <InlineMath math={`PMg_L = ${20 * kFijo} \\cdot 1 = ${20 * kFijo}`} /> unidades extra.</li>
              <li>Si tienes 2: <InlineMath math={`PMg_L = ${20 * kFijo} \\cdot 2 = ${40 * kFijo}`} /> unidades extra.</li>
              <li>Si tienes 3: <InlineMath math={`PMg_L = ${20 * kFijo} \\cdot 3 = ${60 * kFijo}`} /> unidades extra.</li>
            </ul>
            <p className="text-amber-900 dark:text-amber-100">
              En este caso, cada trabajador nuevo aporta <strong>mas que el anterior</strong>
              (productividad marginal creciente). Mueve el slider de arriba y veras que con mas
              maquinas, cada trabajador es aun mas productivo.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 5: Cobb-Douglas ========== */}
      <StepCard stepNumber={5} title="Caso estrella: la Cobb-Douglas" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La funcion mas usada en el curso
            </p>
            <FormulaDisplay math="f(L,K) = A \cdot L^\alpha \cdot K^\beta" />
            <p className="text-blue-900 dark:text-blue-100">
              Donde A, <InlineMath math="\alpha" /> y <InlineMath math="\beta" /> son numeros
              positivos. Esta funcion aparece en <strong>practicamente todos los ejercicios</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-4">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Derivadas parciales de la Cobb-Douglas
            </p>

            <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
              <p className="font-medium">Respecto a L:</p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Tratamos <InlineMath math="A \cdot K^\beta" /> como constante, derivamos <InlineMath math="L^\alpha" />:
              </p>
              <FormulaDisplay math="\frac{\partial f}{\partial L} = A \cdot \alpha L^{\alpha-1} \cdot K^\beta = \alpha \cdot \frac{f(L,K)}{L}" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                Resultado bonito: <InlineMath math="PMg_L = \alpha \cdot PMe_L" />. La marginal es <InlineMath math="\alpha" /> veces la media.
              </p>
            </div>

            <div>
              <p className="font-medium">Respecto a K:</p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Tratamos <InlineMath math="A \cdot L^\alpha" /> como constante, derivamos <InlineMath math="K^\beta" />:
              </p>
              <FormulaDisplay math="\frac{\partial f}{\partial K} = A \cdot L^\alpha \cdot \beta K^{\beta-1} = \beta \cdot \frac{f(L,K)}{K}" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">
                Igualmente: <InlineMath math="PMg_K = \beta \cdot PMe_K" />.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">Truco rapido para la Cobb-Douglas</p>
            <p className="text-muted-foreground">
              Para derivar <InlineMath math="L^\alpha \cdot K^\beta" /> respecto a L:
              baja el <InlineMath math="\alpha" />, restale 1 al exponente de L,
              y deja K intacto. Es la misma regla de la potencia, solo que K no se toca.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 6: Practica ========== */}
      <StepCard stepNumber={6} title="Practica con funciones del curso" variant="result">
        <div className="space-y-4">
          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                1) <InlineMath math="f(L,K) = L^{0.5}K^{0.5}" /> (Tema 2)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <FormulaDisplay math="\frac{\partial f}{\partial L} = 0.5 \cdot L^{-0.5} \cdot K^{0.5} = \frac{K^{0.5}}{2L^{0.5}} = \frac{1}{2}\sqrt{\frac{K}{L}}" />
                  <FormulaDisplay math="\frac{\partial f}{\partial K} = L^{0.5} \cdot 0.5 \cdot K^{-0.5} = \frac{L^{0.5}}{2K^{0.5}} = \frac{1}{2}\sqrt{\frac{L}{K}}" />
                </div>
              </details>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                2) <InlineMath math="f(L,K) = LK" /> (Tema 2, Ej.2)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <p>Es <InlineMath math="L^1 \cdot K^1" />, asi que <InlineMath math="\alpha = \beta = 1" />:</p>
                  <FormulaDisplay math="\frac{\partial f}{\partial L} = 1 \cdot K = K \qquad \frac{\partial f}{\partial K} = L \cdot 1 = L" />
                  <p>La PMg de cada factor es simplemente la cantidad del otro factor.</p>
                </div>
              </details>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-4 text-sm space-y-2">
              <p className="font-semibold">
                3) <InlineMath math="f(L,K) = 2L^{1/4}K^{1/2}" /> (Tema 3)
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                  Ver solucion
                </summary>
                <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-700 space-y-1">
                  <FormulaDisplay math="\frac{\partial f}{\partial L} = 2 \cdot \frac{1}{4} \cdot L^{-3/4} \cdot K^{1/2} = \frac{K^{1/2}}{2L^{3/4}}" />
                  <FormulaDisplay math="\frac{\partial f}{\partial K} = 2 \cdot L^{1/4} \cdot \frac{1}{2} \cdot K^{-1/2} = \frac{L^{1/4}}{K^{1/2}}" />
                </div>
              </details>
            </CardContent>
          </Card>
        </div>
      </StepCard>

      {/* ========== PASO 7: Resumen ========== */}
      <StepCard stepNumber={7} title="Resumen" variant="result">
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Lo esencial
            </p>
            <ul className="list-disc pl-4 text-amber-900 dark:text-amber-100 space-y-1">
              <li>Una derivada parcial es una derivada normal donde <strong>congelas las demas variables</strong>.</li>
              <li>Se escribe con <InlineMath math="\partial" /> en vez de d para recordar que hay mas variables.</li>
              <li><InlineMath math="\frac{\partial f}{\partial L}" /> = Productividad Marginal del Trabajo.</li>
              <li><InlineMath math="\frac{\partial f}{\partial K}" /> = Productividad Marginal del Capital.</li>
              <li>Para Cobb-Douglas: <InlineMath math="PMg_L = \alpha \cdot PMe_L" /> y <InlineMath math="PMg_K = \beta \cdot PMe_K" />.</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Link href="/toolkit/derivadas" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Derivadas
        </Link>
        <Link href="/toolkit/optimizacion" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          Optimizacion <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
