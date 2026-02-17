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

export default function Optimizacion() {
  const [pSlider, setPSlider] = useState(8);

  // CMe = x² - 2x + 2, CMg = 3x² - 4x + 2 (del Tema 2 Ej.1d)
  const cme = (x: number) => x * x - 2 * x + 2;
  const cmg = (x: number) => 3 * x * x - 4 * x + 2;

  // Beneficio = p*x - C(x) where C(x) = x³ - 2x² + 2x
  const beneficio = (x: number) => pSlider * x - (x * x * x - 2 * x * x + 2 * x);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-base px-3 py-1">
          Kit Matematico
        </Badge>
        <h1 className="text-xl sm:text-2xl font-bold">Optimizacion: maximos y minimos</h1>
      </div>
      <p className="text-muted-foreground">
        Optimizar es encontrar el mejor resultado posible. Las empresas optimizan constantemente:
        minimizan costes, maximizan beneficios. Aqui aprenderas las herramientas matematicas para hacerlo.
      </p>

      {/* ========== PASO 1: Que es optimizar ========== */}
      <StepCard stepNumber={1} title="Que es optimizar" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: el punto mas alto de una montana
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que caminas por una montana y quieres llegar a la <strong>cima</strong> (maximo).
              ¿Como sabes que estas en la cima? Porque si das un paso en <strong>cualquier direccion</strong>,
              bajas. La cima es el punto donde <strong>dejas de subir</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si buscas el <strong>valle</strong> (minimo), es lo contrario: el punto donde dejas de bajar.
              En ambos casos, en el punto optimo, la <strong>pendiente es cero</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">En microeconomia buscamos:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <div className="border rounded-lg p-3">
                <p className="font-medium text-foreground">Maximizar beneficio</p>
                <p>¿Cuantas unidades vender para ganar lo maximo?</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="font-medium text-foreground">Minimizar costes</p>
                <p>¿Que combinacion de factores es la mas barata?</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 2: CPO ========== */}
      <StepCard stepNumber={2} title="Condicion de Primer Orden (CPO): derivada = 0" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La regla de oro de la optimizacion
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si la derivada es la <strong>pendiente</strong>, y en el maximo/minimo la pendiente
              es <strong>cero</strong>, entonces:
            </p>
            <FormulaDisplay math="\text{Para encontrar maximo o minimo: } f'(x) = 0" />
            <p className="text-blue-900 dark:text-blue-100">
              Esto se llama <strong>Condicion de Primer Orden (CPO)</strong>. Igualamos la derivada
              a cero y despejamos x.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Ejemplo: encontrar el minimo de CMe
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Con <InlineMath math="CMe(x) = x^2 - 2x + 2" />, buscamos el minimo:
            </p>
            <div className="space-y-1">
              <p className="text-emerald-900 dark:text-emerald-100">Paso 1: Derivamos CMe:</p>
              <FormulaDisplay math="CMe'(x) = 2x - 2" />
              <p className="text-emerald-900 dark:text-emerald-100">Paso 2: Igualamos a cero:</p>
              <FormulaDisplay math="2x - 2 = 0 \implies 2x = 2 \implies x^* = 1" />
              <p className="text-emerald-900 dark:text-emerald-100">Paso 3: Evaluamos el CMe en ese punto:</p>
              <FormulaDisplay math="CMe(1) = 1^2 - 2(1) + 2 = 1" />
            </div>
            <p className="text-emerald-900 dark:text-emerald-100">
              El coste medio minimo es <strong>1</strong>, y se alcanza produciendo <strong>1 unidad</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 3: CSO ========== */}
      <StepCard stepNumber={3} title="Condicion de Segundo Orden (CSO): ¿maximo o minimo?" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              El problema: derivada = 0 no te dice si es maximo o minimo
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La cima de una montana y el fondo de un valle tienen ambos pendiente cero.
              ¿Como distinguirlos? Miramos la <strong>segunda derivada</strong> (la derivada de la derivada):
            </p>
            <FormulaDisplay math="f''(x) = \frac{d^2f}{dx^2} = \text{derivada de } f'(x)" />
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              La regla de la segunda derivada
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Segunda derivada</th>
                    <th className="text-left py-2 pr-4">Tipo de punto</th>
                    <th className="text-left py-2">Analogia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4"><InlineMath math="f''(x^*) > 0" /></td>
                    <td className="py-2 pr-4 font-medium">Minimo</td>
                    <td className="py-2">Fondo de un valle (curva hacia arriba)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><InlineMath math="f''(x^*) < 0" /></td>
                    <td className="py-2 pr-4 font-medium">Maximo</td>
                    <td className="py-2">Cima de una montana (curva hacia abajo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Verificacion del ejemplo anterior
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              <InlineMath math="CMe'(x) = 2x - 2" />, segunda derivada:
            </p>
            <FormulaDisplay math="CMe''(x) = 2 > 0 \implies \text{es un MINIMO}" />
            <p className="text-emerald-900 dark:text-emerald-100">
              Confirmado: <InlineMath math="x^* = 1" /> es un minimo del CMe, no un maximo.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 4: Maximizar beneficio ========== */}
      <StepCard stepNumber={4} title="Aplicacion: maximizar el beneficio (Tema 3)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              ¿Cuanto producir para ganar lo maximo?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              El beneficio es: <InlineMath math="\pi(x) = p \cdot x - C(x)" /> (ingresos menos costes).
              Para maximizarlo, aplicamos la CPO:
            </p>
            <FormulaDisplay math="\pi'(x) = p - CMg(x) = 0 \implies p = CMg(x)" />
            <p className="text-blue-900 dark:text-blue-100">
              Esta es la condicion fundamental de la oferta competitiva: <strong>produce
              hasta que el precio iguale al coste marginal</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              ¿Por que funciona?
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si el precio es mayor que el CMg, te conviene producir una unidad mas
              (ganas mas de lo que cuesta). Si el CMg supera al precio, esa unidad
              te cuesta mas de lo que ganas. El optimo esta donde se igualan.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              CSO: ¿seguro que es un maximo?
            </p>
            <FormulaDisplay math="\pi''(x) = -CMg'(x) < 0 \iff CMg'(x) > 0" />
            <p className="text-emerald-900 dark:text-emerald-100">
              El beneficio se maximiza donde el CMg es <strong>creciente</strong>.
              Si el CMg fuera decreciente, no seria un maximo sino un minimo del beneficio.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 5: Grafico interactivo beneficio ========== */}
      <StepCard stepNumber={5} title="Visualizacion: el beneficio segun el precio" variant="explanation">
        <p className="text-sm text-muted-foreground mb-2">
          Con <InlineMath math="C(x) = x^3 - 2x^2 + 2x" />, mueve el precio para ver como
          cambia el beneficio.
        </p>

        <EconChart xRange={[-0.2, 4]} yRange={[-3, 15]}>
          <Plot.OfX y={cme} color={COLORS.blue} weight={2.5} />
          <Plot.OfX y={cmg} color={COLORS.emerald} weight={2.5} />
          <Plot.OfX y={() => pSlider} color={COLORS.rose} weight={2} style="dashed" />
          <Point x={1} y={1} color={COLORS.amber} />
          <Text x={3} y={cme(3) + 0.5} size={12} color={COLORS.blue}>CMe</Text>
          <Text x={2.5} y={cmg(2.5) + 0.5} size={12} color={COLORS.emerald}>CMg</Text>
          <Text x={3.5} y={pSlider + 0.5} size={12} color={COLORS.rose}>p = {pSlider}</Text>
        </EconChart>

        <div className="px-1 mt-2">
          <p className="font-semibold mb-2">
            Precio: p = <strong className="text-rose-600 dark:text-rose-400">{pSlider}</strong>
          </p>
          <input
            type="range"
            min={0}
            max={14}
            step={0.5}
            value={pSlider}
            onChange={(e) => setPSlider(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-rose-500"
          />
        </div>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm">
            <p className="text-amber-900 dark:text-amber-100">
              {pSlider < 1 ? (
                <>Con p = {pSlider}, el precio esta por debajo del minimo CMe (1). La empresa no produce.</>
              ) : pSlider === 1 ? (
                <>Con p = 1 = minimo CMe, la empresa tiene beneficio cero (punto de nivelacion).</>
              ) : (
                <>Con p = {pSlider} {`>`} 1 = minimo CMe, la empresa produce donde p = CMg y tiene beneficio positivo.</>
              )}
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 6: Minimizar costes con restriccion ========== */}
      <StepCard stepNumber={6} title="Optimizacion con restriccion: el Lagrangiano (Tema 2)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogia: la dieta mas barata
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que quieres la dieta mas barata que te de 2000 calorias. No puedes gastar
              lo minimo posible sin restriccion (eso seria no comer). Necesitas <strong>gastar lo
              minimo que cumpla la restriccion</strong> de las 2000 calorias.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              En microeconomia: la empresa quiere <strong>minimizar el coste</strong> pero necesita
              <strong> producir una cantidad q</strong>. El Lagrangiano es la herramienta para esto.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              El metodo del Lagrangiano en 4 pasos
            </p>
            <div className="space-y-3 text-emerald-900 dark:text-emerald-100">
              <div className="border-b pb-2 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 1: Plantear el problema</p>
                <FormulaDisplay math="\min_{L,K} \; wL + rK \quad \text{sujeto a} \quad f(L,K) = q" />
              </div>
              <div className="border-b pb-2 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 2: Escribir el Lagrangiano</p>
                <FormulaDisplay math="\mathcal{L} = wL + rK - \lambda\left(f(L,K) - q\right)" />
                <p className="text-xs">
                  <InlineMath math="\lambda" /> (lambda) es un &laquo;ayudante&raquo; que nos garantiza que la restriccion se cumple.
                </p>
              </div>
              <div className="border-b pb-2 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 3: Derivar e igualar a cero (CPO)</p>
                <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial L} = w - \lambda \cdot PMg_L = 0" />
                <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial K} = r - \lambda \cdot PMg_K = 0" />
                <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial \lambda} = f(L,K) - q = 0" />
              </div>
              <div>
                <p className="font-medium">Paso 4: De las dos primeras ecuaciones:</p>
                <FormulaDisplay math="\frac{w}{PMg_L} = \frac{r}{PMg_K} = \lambda \implies \frac{PMg_L}{PMg_K} = \frac{w}{r}" />
                <p>
                  Esta es la <strong>condicion de tangencia</strong>: la RMST debe igualar la relacion de precios
                  de los factores. Es la condicion fundamental del Tema 2.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              ¿Que significa intuitivamente?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La empresa busca el punto donde la <strong>relacion de productividades</strong> de los
              factores (cuanto produce cada uno) coincide con la <strong>relacion de precios</strong>
              (cuanto cuesta cada uno). Si un factor es relativamente mas productivo que caro,
              conviene usar mas de ese factor.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 7: Integral (para excedente) ========== */}
      <StepCard stepNumber={7} title="Bonus: la integral (area bajo la curva)" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Solo necesitas esto para el Excedente del Productor (Tema 3)
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La <strong>integral</strong> calcula el <strong>area</strong> bajo una curva.
              Es la operacion &laquo;inversa&raquo; de la derivada.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si la derivada de <InlineMath math="x^2" /> es <InlineMath math="2x" />,
              entonces la integral de <InlineMath math="2x" /> es <InlineMath math="x^2" />.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              La regla de la potencia al reves
            </p>
            <FormulaDisplay math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" />
            <p className="text-emerald-900 dark:text-emerald-100">
              &laquo;Suma 1 al exponente y divide por el nuevo exponente&raquo;.
              La C es una constante que no importa cuando calculamos areas definidas.
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para el <strong>Excedente del Productor</strong>: EP = area entre la linea de
              precio y la curva de CMg. En la practica, se calcula como:
            </p>
            <FormulaDisplay math="EP = p \cdot x^* - \int_0^{x^*} CMg(x) \, dx" />
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">Ejemplo rapido</p>
            <p className="text-muted-foreground">
              Si <InlineMath math="CMg = 2x + 4" /> y <InlineMath math="x^* = 3" />, <InlineMath math="p = 10" />:
            </p>
            <FormulaDisplay math="\int_0^3 (2x+4)\,dx = \left[x^2 + 4x\right]_0^3 = (9+12) - (0+0) = 21" />
            <FormulaDisplay math="EP = 10 \cdot 3 - 21 = 30 - 21 = 9" />
            <p className="text-muted-foreground">
              Graficamente, es el area del triangulo entre la recta de precio (p=10) y la curva CMg.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== Resumen final ========== */}
      <StepCard stepNumber={8} title="Resumen: las 3 herramientas de optimizacion" variant="result">
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4 text-sm space-y-2">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Herramienta</th>
                    <th className="text-left py-2 pr-4">¿Que hace?</th>
                    <th className="text-left py-2">¿Donde se usa?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">CPO: f&apos;(x) = 0</td>
                    <td className="py-2 pr-4">Encuentra maximos y minimos</td>
                    <td className="py-2">Min CMe, Max beneficio</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">CSO: f&apos;&apos;(x)</td>
                    <td className="py-2 pr-4">Distingue maximo de minimo</td>
                    <td className="py-2">Verificar que p = CMg es maximo</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Lagrangiano</td>
                    <td className="py-2 pr-4">Optimiza con restricciones</td>
                    <td className="py-2">Minimizar costes produciendo q</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Integral</td>
                    <td className="py-2 pr-4">Calcula areas bajo curvas</td>
                    <td className="py-2">Excedente del productor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Ya tienes todo lo que necesitas
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              Con derivadas, derivadas parciales y estas herramientas de optimizacion,
              puedes resolver <strong>cualquier ejercicio</strong> del curso. Ahora ve a los
              temas y compruebalo.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Link href="/toolkit/derivadas-parciales" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Derivadas parciales
        </Link>
        <Link href="/tema-1" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          Tema 1: Produccion <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
