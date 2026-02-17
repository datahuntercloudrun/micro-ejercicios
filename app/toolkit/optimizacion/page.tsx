"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { StepCard } from "@/components/stats/step-card";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, COLORS, ChartLegend } from "@/components/charts/econ-chart";
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
          Kit Matemático
        </Badge>
        <h1 className="text-xl sm:text-2xl font-bold">Optimización: máximos y mínimos</h1>
      </div>
      <p className="text-muted-foreground">
        Optimizar es encontrar el mejor resultado posible. Las empresas optimizan constantemente:
        minimizan costes, maximizan beneficios. Aquí aprenderás las herramientas matemáticas para hacerlo.
      </p>

      {/* ========== PASO 1: Que es optimizar ========== */}
      <StepCard stepNumber={1} title="Qué es optimizar" variant="explanation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogía: el punto más alto de una montaña
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que caminas por una montaña y quieres llegar a la <strong>cima</strong> (máximo).
              ¿Cómo sabes que estás en la cima? Porque si das un paso en <strong>cualquier dirección</strong>,
              bajas. La cima es el punto donde <strong>dejas de subir</strong>.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si buscas el <strong>valle</strong> (mínimo), es lo contrario: el punto donde dejas de bajar.
              En ambos casos, en el punto óptimo, la <strong>pendiente es cero</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold">En microeconomía buscamos:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <div className="border rounded-lg p-3">
                <p className="font-medium text-foreground">Maximizar beneficio</p>
                <p>¿Cuántas unidades vender para ganar lo máximo?</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="font-medium text-foreground">Minimizar costes</p>
                <p>¿Qué combinación de factores es la más barata?</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 2: CPO ========== */}
      <StepCard stepNumber={2} title="Condición de Primer Orden (CPO): derivada = 0" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              La regla de oro de la optimización
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Si la derivada es la <strong>pendiente</strong>, y en el máximo/mínimo la pendiente
              es <strong>cero</strong>, entonces:
            </p>
            <FormulaDisplay math="\text{Para encontrar maximo o minimo: } f'(x) = 0" />
            <p className="text-blue-900 dark:text-blue-100">
              Esto se llama <strong>Condición de Primer Orden (CPO)</strong>. Igualamos la derivada
              a cero y despejamos x.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Ejemplo: encontrar el mínimo de CMe
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Tenemos esta función de coste medio: <InlineMath math="CMe(x) = x^2 - 2x + 2" />. Queremos saber para qué cantidad <InlineMath math="x" /> el coste medio es el más bajo posible.
            </p>

            <div className="space-y-3 text-emerald-900 dark:text-emerald-100">
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 1: Derivamos CMe término a término</p>
                <p className="text-xs text-muted-foreground mb-1">Aplicamos la regla de la potencia a cada término por separado:</p>
                <div className="space-y-1 ml-2">
                  <p>Término 1: <InlineMath math="x^2" /> → regla de la potencia: <InlineMath math="2 \cdot x^{2-1} = 2x" /></p>
                  <p>Término 2: <InlineMath math="-2x" /> → la derivada de <InlineMath math="x" /> es 1, así que: <InlineMath math="-2 \cdot 1 = -2" /></p>
                  <p>Término 3: <InlineMath math="+2" /> → la derivada de un número suelto siempre es 0</p>
                </div>
                <p className="mt-1">Juntamos todo:</p>
                <FormulaDisplay math="CMe'(x) = 2x - 2 + 0 = 2x - 2" />
              </div>

              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 2: Igualamos a cero y despejamos x</p>
                <p className="text-xs text-muted-foreground mb-1">Queremos encontrar dónde la pendiente es cero:</p>
                <div className="space-y-1 ml-2">
                  <p>Planteamos la ecuación:</p>
                  <FormulaDisplay math="2x - 2 = 0" />
                  <p>Sumamos 2 a ambos lados:</p>
                  <FormulaDisplay math="2x = 2" />
                  <p>Dividimos ambos lados entre 2:</p>
                  <FormulaDisplay math="x = \frac{2}{2} = 1" />
                </div>
                <p className="mt-1">El punto candidato a mínimo es <InlineMath math="x^* = 1" />.</p>
              </div>

              <div>
                <p className="font-medium">Paso 3: ¿Cuánto vale el CMe en ese punto?</p>
                <p className="text-xs text-muted-foreground mb-1">Sustituimos <InlineMath math="x = 1" /> en la función original:</p>
                <FormulaDisplay math="CMe(1) = (1)^2 - 2 \cdot (1) + 2" />
                <div className="space-y-1 ml-2">
                  <p><InlineMath math="(1)^2 = 1" /></p>
                  <p><InlineMath math="2 \cdot 1 = 2" /></p>
                  <p>Entonces: <InlineMath math="1 - 2 + 2 = 1" /></p>
                </div>
              </div>
            </div>
            <p className="text-emerald-900 dark:text-emerald-100">
              El coste medio mínimo es <strong>1</strong>, y se alcanza produciendo <strong>1 unidad</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 3: CSO ========== */}
      <StepCard stepNumber={3} title="Condición de Segundo Orden (CSO): ¿máximo o mínimo?" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              El problema: derivada = 0 no te dice si es máximo o mínimo
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La cima de una montaña y el fondo de un valle tienen ambos pendiente cero.
              ¿Cómo distinguirlos? Miramos la <strong>segunda derivada</strong> (la derivada de la derivada):
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
                    <th className="text-left py-2">Analogía</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4"><InlineMath math="f''(x^*) > 0" /></td>
                    <td className="py-2 pr-4 font-medium">Mínimo</td>
                    <td className="py-2">Fondo de un valle (curva hacia arriba)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><InlineMath math="f''(x^*) < 0" /></td>
                    <td className="py-2 pr-4 font-medium">Máximo</td>
                    <td className="py-2">Cima de una montaña (curva hacia abajo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Verificación del ejemplo anterior: ¿es mínimo o máximo?
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Ya sabemos que <InlineMath math="CMe'(x) = 2x - 2" />. Ahora derivamos <strong>otra vez</strong> para obtener la segunda derivada:
            </p>
            <div className="space-y-1 ml-2 text-emerald-900 dark:text-emerald-100">
              <p>Derivamos <InlineMath math="2x - 2" /> término a término:</p>
              <p>Término 1: <InlineMath math="2x" /> → la derivada de <InlineMath math="x" /> es 1, así que: <InlineMath math="2 \cdot 1 = 2" /></p>
              <p>Término 2: <InlineMath math="-2" /> → la derivada de un número suelto es 0</p>
            </div>
            <FormulaDisplay math="CMe''(x) = 2" />
            <p className="text-emerald-900 dark:text-emerald-100">
              Como <InlineMath math="2 > 0" />, la curva mira &laquo;hacia arriba&raquo; (forma de U) → es un <strong>mínimo</strong>.
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Confirmado: <InlineMath math="x^* = 1" /> es un mínimo del CMe, no un máximo.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 4: Maximizar beneficio ========== */}
      <StepCard stepNumber={4} title="Aplicación: maximizar el beneficio (Tema 3)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              ¿Cuánto producir para ganar lo máximo?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              El <strong>beneficio</strong> de una empresa es lo que ingresa menos lo que gasta:
            </p>
            <FormulaDisplay math="\pi(x) = \underbrace{p \cdot x}_{\text{ingresos}} - \underbrace{C(x)}_{\text{costes}}" />
            <p className="text-blue-900 dark:text-blue-100">
              Donde <InlineMath math="p" /> es el precio de venta, <InlineMath math="x" /> es la cantidad que produce y <InlineMath math="C(x)" /> es el coste total de producir <InlineMath math="x" /> unidades.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Derivamos el beneficio para encontrar el máximo
            </p>
            <div className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <p>Partimos de <InlineMath math="\pi(x) = p \cdot x - C(x)" /> y derivamos término a término:</p>
              <div className="ml-2 space-y-1">
                <p>Término 1: <InlineMath math="p \cdot x" /> → <InlineMath math="p" /> es un número fijo (la empresa no controla el precio), así que la derivada es simplemente <InlineMath math="p" /></p>
                <p>Término 2: <InlineMath math="-C(x)" /> → la derivada de <InlineMath math="C(x)" /> es <InlineMath math="C'(x)" />, que llamamos <strong>Coste Marginal</strong> (<InlineMath math="CMg" />)</p>
              </div>
              <p>Juntamos:</p>
              <FormulaDisplay math="\pi'(x) = p - CMg(x)" />
              <p>Ahora aplicamos la CPO (igualar a cero):</p>
              <FormulaDisplay math="p - CMg(x) = 0" />
              <p>Sumamos <InlineMath math="CMg(x)" /> a ambos lados:</p>
              <FormulaDisplay math="p = CMg(x)" />
            </div>
            <p className="text-emerald-900 dark:text-emerald-100">
              Esta es la <strong>condición fundamental</strong>: produce hasta que el precio iguale al coste marginal.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-4 text-sm space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              ¿Por qué funciona? Piénsalo así
            </p>
            <div className="text-amber-900 dark:text-amber-100 space-y-2">
              <p>
                Imagina que vendes limonada a 5€ el vaso. Si producir un vaso más te cuesta 3€ (<InlineMath math="CMg = 3" />), te conviene producirlo porque ganas 2€ extra. Seguirás produciendo mientras <InlineMath math="p > CMg" />.
              </p>
              <p>
                Pero si producir un vaso más te cuesta 7€ (<InlineMath math="CMg = 7" />), pierdes 2€. Así que dejas de producir cuando <InlineMath math="p < CMg" />.
              </p>
              <p>
                El punto óptimo es exactamente donde <InlineMath math="p = CMg" />: la última unidad ni gana ni pierde, y todas las anteriores sí ganaron.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              CSO: ¿seguro que es un máximo y no un mínimo?
            </p>
            <div className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <p>Derivamos otra vez. Partimos de <InlineMath math="\pi'(x) = p - CMg(x)" />:</p>
              <div className="ml-2 space-y-1">
                <p>Término 1: <InlineMath math="p" /> → la derivada de un número fijo es 0</p>
                <p>Término 2: <InlineMath math="-CMg(x)" /> → la derivada es <InlineMath math="-CMg'(x)" /></p>
              </div>
              <FormulaDisplay math="\pi''(x) = 0 - CMg'(x) = -CMg'(x)" />
              <p>Para que sea un <strong>máximo</strong>, necesitamos <InlineMath math="\pi''(x) < 0" />:</p>
              <FormulaDisplay math="-CMg'(x) < 0 \implies CMg'(x) > 0" />
              <p>
                Esto significa que el CMg debe ser <strong>creciente</strong> en ese punto. Si el CMg estuviera bajando, sería un mínimo del beneficio (lo peor), no un máximo.
              </p>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 5: Grafico interactivo beneficio ========== */}
      <StepCard stepNumber={5} title="Visualización: el beneficio según el precio" variant="explanation">
        <p className="text-sm text-muted-foreground mb-2">
          Con <InlineMath math="C(x) = x^3 - 2x^2 + 2x" />, mueve el precio para ver cómo
          cambia el beneficio.
        </p>

        <EconChart xRange={[-0.2, 4]} yRange={[-3, 15]}>
          <Plot.OfX y={cme} color={COLORS.blue} weight={2.5} />
          <Plot.OfX y={cmg} color={COLORS.emerald} weight={2.5} />
          <Plot.OfX y={() => pSlider} color={COLORS.rose} weight={2} style="dashed" />
          <Point x={1} y={1} color={COLORS.amber} />
          <Text x={1.3} y={0.2} size={12} color={COLORS.amber}>Min CMe</Text>
          <Text x={3} y={cme(3) + 0.5} size={12} color={COLORS.blue}>CMe</Text>
          <Text x={2.5} y={cmg(2.5) + 0.5} size={12} color={COLORS.emerald}>CMg</Text>
          <Text x={3.5} y={pSlider + 0.5} size={12} color={COLORS.rose}>p = {pSlider}</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMe (Coste Medio)", color: COLORS.blue },
          { label: "CMg (Coste Marginal)", color: COLORS.emerald },
          { label: `Precio p = ${pSlider}`, color: COLORS.rose, dashed: true },
          { label: "Mín CMe (1, 1) — punto de nivelación", color: COLORS.amber },
        ]} />

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
                <>Con p = {pSlider}, el precio está por debajo del mínimo CMe (1). La empresa no produce.</>
              ) : pSlider === 1 ? (
                <>Con p = 1 = mínimo CMe, la empresa tiene beneficio cero (punto de nivelación).</>
              ) : (
                <>Con p = {pSlider} {`>`} 1 = mínimo CMe, la empresa produce donde p = CMg y tiene beneficio positivo.</>
              )}
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== PASO 6: Minimizar costes con restriccion ========== */}
      <StepCard stepNumber={6} title="Optimización con restricción: el Lagrangiano (Tema 2)" variant="calculation">
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Analogía: la dieta más barata
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que quieres la dieta más barata que te dé 2000 calorías. No puedes gastar
              lo mínimo posible sin restricción (eso sería no comer). Necesitas <strong>gastar lo
              mínimo que cumpla la restricción</strong> de las 2000 calorías.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              En microeconomía: la empresa quiere <strong>minimizar el coste</strong> pero necesita
              <strong> producir una cantidad q</strong>. El Lagrangiano es la herramienta para esto.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              El método del Lagrangiano en 4 pasos
            </p>
            <div className="space-y-4 text-emerald-900 dark:text-emerald-100">
              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 1: Plantear el problema</p>
                <p className="text-xs text-muted-foreground mb-1">Queremos gastar lo mínimo en trabajo (<InlineMath math="L" />) y capital (<InlineMath math="K" />), pero produciendo exactamente <InlineMath math="q" /> unidades:</p>
                <FormulaDisplay math="\min_{L,K} \; \underbrace{wL + rK}_{\text{coste total}} \quad \text{sujeto a} \quad \underbrace{f(L,K) = q}_{\text{producir q unidades}}" />
                <p className="text-xs text-muted-foreground"><InlineMath math="w" /> = salario por trabajador, <InlineMath math="r" /> = coste por unidad de capital</p>
              </div>

              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 2: Escribir el Lagrangiano</p>
                <p className="text-xs text-muted-foreground mb-1">Metemos la restricción dentro de la función usando un &laquo;ayudante&raquo; <InlineMath math="\lambda" /> (lambda):</p>
                <FormulaDisplay math="\mathcal{L} = wL + rK - \lambda\left(f(L,K) - q\right)" />
                <p className="text-xs text-muted-foreground">
                  ¿Por qué funciona? Si la restricción se cumple, <InlineMath math="f(L,K) - q = 0" /> y el último término desaparece. Lambda &laquo;castiga&raquo; las soluciones que no cumplen la restricción.
                </p>
              </div>

              <div className="border-b pb-3 border-emerald-200 dark:border-emerald-700">
                <p className="font-medium">Paso 3: Derivamos respecto a cada variable e igualamos a cero</p>
                <p className="text-xs text-muted-foreground mb-2">Tenemos 3 variables (<InlineMath math="L, K, \lambda" />), así que derivamos 3 veces:</p>

                <div className="ml-2 space-y-3">
                  <div>
                    <p className="text-xs font-medium">Derivada respecto a L (tratamos K y <InlineMath math="\lambda" /> como constantes):</p>
                    <p className="text-xs ml-2">
                      De <InlineMath math="wL" /> obtenemos <InlineMath math="w" /> (la derivada de <InlineMath math="L" /> es 1).{" "}
                      De <InlineMath math="rK" /> obtenemos 0 (K es constante).{" "}
                      De <InlineMath math="-\lambda \cdot f(L,K)" /> obtenemos <InlineMath math="-\lambda \cdot \frac{\partial f}{\partial L}" />, que es <InlineMath math="-\lambda \cdot PMg_L" />.
                    </p>
                    <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial L} = w - \lambda \cdot PMg_L = 0" />
                  </div>

                  <div>
                    <p className="text-xs font-medium">Derivada respecto a K (tratamos L y <InlineMath math="\lambda" /> como constantes):</p>
                    <p className="text-xs ml-2">
                      De <InlineMath math="wL" /> obtenemos 0 (L es constante).{" "}
                      De <InlineMath math="rK" /> obtenemos <InlineMath math="r" />.{" "}
                      De <InlineMath math="-\lambda \cdot f(L,K)" /> obtenemos <InlineMath math="-\lambda \cdot PMg_K" />.
                    </p>
                    <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial K} = r - \lambda \cdot PMg_K = 0" />
                  </div>

                  <div>
                    <p className="text-xs font-medium">Derivada respecto a <InlineMath math="\lambda" /> (tratamos L y K como constantes):</p>
                    <p className="text-xs ml-2">
                      De <InlineMath math="wL + rK" /> obtenemos 0. De <InlineMath math="-\lambda(f(L,K) - q)" />, la derivada respecto a <InlineMath math="\lambda" /> es simplemente <InlineMath math="-(f(L,K) - q)" />.
                    </p>
                    <FormulaDisplay math="\frac{\partial \mathcal{L}}{\partial \lambda} = -(f(L,K) - q) = 0 \implies f(L,K) = q" />
                    <p className="text-xs text-muted-foreground">(Esto simplemente nos dice que la restricción se cumple)</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-medium">Paso 4: Despejamos lambda de las dos primeras ecuaciones</p>
                <div className="ml-2 space-y-2">
                  <p className="text-xs">De la primera ecuación, despejamos <InlineMath math="\lambda" />:</p>
                  <FormulaDisplay math="w - \lambda \cdot PMg_L = 0 \implies w = \lambda \cdot PMg_L \implies \lambda = \frac{w}{PMg_L}" />
                  <p className="text-xs">De la segunda ecuación, también despejamos <InlineMath math="\lambda" />:</p>
                  <FormulaDisplay math="r - \lambda \cdot PMg_K = 0 \implies r = \lambda \cdot PMg_K \implies \lambda = \frac{r}{PMg_K}" />
                  <p className="text-xs">Como ambas expresiones son iguales a <InlineMath math="\lambda" />, las igualamos entre sí:</p>
                  <FormulaDisplay math="\frac{w}{PMg_L} = \frac{r}{PMg_K}" />
                  <p className="text-xs">Reorganizamos (multiplicamos en cruz):</p>
                  <FormulaDisplay math="w \cdot PMg_K = r \cdot PMg_L \implies \frac{PMg_L}{PMg_K} = \frac{w}{r}" />
                </div>
                <p className="mt-2">
                  Esta es la <strong>condición de tangencia</strong>: la RMST debe igualar la relación de precios de los factores. Es la condición fundamental del Tema 2.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              ¿Qué significa intuitivamente?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La empresa busca el punto donde la <strong>relación de productividades</strong> de los
              factores (cuánto produce cada uno) coincide con la <strong>relación de precios</strong>
              (cuánto cuesta cada uno). Si un factor es relativamente más productivo que caro,
              conviene usar más de ese factor.
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
              La <strong>integral</strong> calcula el <strong>área</strong> bajo una curva.
              Es la operación &laquo;inversa&raquo; de la derivada.
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
              La regla de la potencia al revés
            </p>
            <FormulaDisplay math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" />
            <p className="text-emerald-900 dark:text-emerald-100">
              &laquo;Suma 1 al exponente y divide por el nuevo exponente&raquo;.
              La C es una constante que no importa cuando calculamos áreas definidas.
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para el <strong>Excedente del Productor</strong>: EP = área entre la línea de
              precio y la curva de CMg. En la práctica, se calcula como:
            </p>
            <FormulaDisplay math="EP = p \cdot x^* - \int_0^{x^*} CMg(x) \, dx" />
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-4 text-sm space-y-3">
            <p className="font-semibold">Ejemplo paso a paso</p>
            <p className="text-muted-foreground">
              Si <InlineMath math="CMg(x) = 2x + 4" />, la empresa produce <InlineMath math="x^* = 3" /> unidades al precio <InlineMath math="p = 10" />.
            </p>

            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="font-medium text-sm">Paso 1: Encontrar la antiderivada (integral indefinida)</p>
                <p className="text-xs text-muted-foreground mb-1">Aplicamos la regla de la potencia al revés a cada término:</p>
                <div className="ml-2 space-y-1 text-xs">
                  <p>Término 1: <InlineMath math="2x = 2x^1" /> → sumamos 1 al exponente: <InlineMath math="x^{1+1} = x^2" />, dividimos por el nuevo exponente: <InlineMath math="\frac{x^2}{2}" />, multiplicamos por el 2 de delante: <InlineMath math="2 \cdot \frac{x^2}{2} = x^2" /></p>
                  <p>Término 2: <InlineMath math="4 = 4x^0" /> → sumamos 1: <InlineMath math="x^{0+1} = x^1 = x" />, dividimos por 1: <InlineMath math="\frac{x}{1} = x" />, multiplicamos por el 4: <InlineMath math="4x" /></p>
                </div>
                <p className="text-xs mt-1">La antiderivada es:</p>
                <FormulaDisplay math="\int (2x + 4)\,dx = x^2 + 4x" />
              </div>

              <div className="border-b pb-2">
                <p className="font-medium text-sm">Paso 2: Evaluar entre los límites (de 0 a 3)</p>
                <p className="text-xs text-muted-foreground mb-1">Sustituimos el límite superior (3) y le restamos el límite inferior (0):</p>
                <FormulaDisplay math="\left[x^2 + 4x\right]_0^3 = \bigl(\underbrace{3^2 + 4 \cdot 3}_{\text{x = 3}}\bigr) - \bigl(\underbrace{0^2 + 4 \cdot 0}_{\text{x = 0}}\bigr)" />
                <div className="ml-2 space-y-1 text-xs">
                  <p>Con <InlineMath math="x = 3" />: <InlineMath math="3^2 = 9" /> y <InlineMath math="4 \cdot 3 = 12" />, así que <InlineMath math="9 + 12 = 21" /></p>
                  <p>Con <InlineMath math="x = 0" />: <InlineMath math="0^2 = 0" /> y <InlineMath math="4 \cdot 0 = 0" />, así que <InlineMath math="0 + 0 = 0" /></p>
                </div>
                <FormulaDisplay math="\int_0^3 (2x+4)\,dx = 21 - 0 = 21" />
              </div>

              <div>
                <p className="font-medium text-sm">Paso 3: Calcular el Excedente del Productor</p>
                <p className="text-xs text-muted-foreground mb-1">EP = Ingresos totales menos el área bajo el CMg:</p>
                <FormulaDisplay math="EP = \underbrace{p \cdot x^*}_{\text{ingresos}} - \underbrace{\int_0^{x^*} CMg\,dx}_{\text{coste variable}} = 10 \cdot 3 - 21 = 30 - 21 = 9" />
                <p className="text-xs text-muted-foreground">
                  Gráficamente, el EP es el área entre la línea horizontal de precio (p = 10) y la curva de CMg, desde 0 hasta <InlineMath math="x^*" />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </StepCard>

      {/* ========== Resumen final ========== */}
      <StepCard stepNumber={8} title="Resumen: las 3 herramientas de optimización" variant="result">
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4 text-sm space-y-2">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Herramienta</th>
                    <th className="text-left py-2 pr-4">¿Qué hace?</th>
                    <th className="text-left py-2">¿Dónde se usa?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">CPO: f&apos;(x) = 0</td>
                    <td className="py-2 pr-4">Encuentra máximos y mínimos</td>
                    <td className="py-2">Mín CMe, Máx beneficio</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">CSO: f&apos;&apos;(x)</td>
                    <td className="py-2 pr-4">Distingue máximo de mínimo</td>
                    <td className="py-2">Verificar que p = CMg es máximo</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Lagrangiano</td>
                    <td className="py-2 pr-4">Optimiza con restricciones</td>
                    <td className="py-2">Minimizar costes produciendo q</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Integral</td>
                    <td className="py-2 pr-4">Calcula áreas bajo curvas</td>
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
              Con derivadas, derivadas parciales y estas herramientas de optimización,
              puedes resolver <strong>cualquier ejercicio</strong> del curso. Ahora ve a los
              temas y compruébalo.
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
          Tema 1: Producción <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
