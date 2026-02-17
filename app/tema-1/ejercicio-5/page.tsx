"use client";

import Link from "next/link";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plot, Text } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

export default function Ejercicio5() {

  return (
    <ExerciseLayout
      tema={1}
      exerciseNumber={5}
      title="Funci&oacute;n con Par&aacute;metros"
      difficulty="Alto"
      category="Producci&oacute;n"
      statement={
        <div className="space-y-2">
          <p>
            Considere una empresa que produce con la siguiente funci&oacute;n de
            producci&oacute;n:{" "}
            <InlineMath math="f(K,L) = \beta L^{1/4} K^\alpha" />, donde{" "}
            <InlineMath math="\beta > 0" /> y <InlineMath math="\alpha > 0" />.
          </p>
          <p className="font-semibold text-sm">a. Determine todos los valores de los par&aacute;metros <InlineMath math="\alpha" /> y <InlineMath math="\beta" /> para los que:</p>
          <ol className="list-[lower-roman] pl-5 space-y-1">
            <li>Los rendimientos a escala son decrecientes.</li>
            <li>La productividad marginal del capital es decreciente en <InlineMath math="K" />.</li>
            <li>La RMST es decreciente en <InlineMath math="L" />.</li>
            <li>La productividad marginal del trabajo es decreciente en <InlineMath math="L" />.</li>
            <li>La productividad marginal del trabajo es creciente en <InlineMath math="L" />.</li>
          </ol>
          <p className="font-semibold text-sm mt-2">b. Suponga <InlineMath math="\alpha = 1" />, <InlineMath math="\beta = 10" />. Actualmente, la empresa produce 40 unidades de bien empleando <InlineMath math="L=1" />, <InlineMath math="K=4" />. En el corto plazo, la empresa no puede modificar el capital:</p>
          <ol className="list-[lower-roman] pl-5 space-y-1">
            <li>Si en el corto plazo la empresa quiere duplicar la producci&oacute;n, &iquest;qu&eacute; cantidad de trabajo deber&iacute;a emplear?</li>
            <li>En el largo plazo, &iquest;qu&eacute; combinaciones de factores <InlineMath math="(L,K)" /> permiten producir 40 unidades de bien?</li>
            <li>En el largo plazo, &iquest;es posible duplicar la producci&oacute;n sin duplicar los factores?</li>
          </ol>
        </div>
      }
      prevUrl="/tema-1/ejercicio-4"
      nextUrl="/tema-1/test"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio integra <strong>todo el Tema 1</strong>. Necesitarás saber derivar,
            calcular segundas derivadas y resolver ecuaciones con potencias. Si alguno de estos te resulta
            difícil, revisa las herramientas antes de seguir.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas →
              </Badge>
            </Link>
            <Link href="/toolkit/derivadas-parciales">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas parciales →
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
              Un ejercicio que integra todo el tema
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Este problema combina <strong>todos los conceptos</strong> del Tema 1: rendimientos a escala,
              productividades marginales, RMST, corto y largo plazo. La funci&oacute;n tiene par&aacute;metros
              que hay que determinar seg&uacute;n cada condici&oacute;n.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Piensa en esto como un &quot;men&uacute; de configuraci&oacute;n&quot; de una f&aacute;brica: dependiendo
              de c&oacute;mo sea el par&aacute;metro <InlineMath math="\alpha" /> (la &quot;sensibilidad&quot; al capital),
              la f&aacute;brica se comporta de formas diferentes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold">Datos de partida</p>
            <FormulaDisplay math="f(K, L) = \beta L^{1/4} K^\alpha" />
            <p className="text-muted-foreground">
              Exponente de L fijo en <InlineMath math="1/4" />. Exponente de K es el par&aacute;metro{" "}
              <InlineMath math="\alpha" /> que debemos analizar.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ TABS ============ */}
      <Tabs defaultValue="parte-a" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="parte-a">Parte A (Par&aacute;metros)</TabsTrigger>
          <TabsTrigger value="parte-b">Parte B (Num&eacute;rico)</TabsTrigger>
        </TabsList>

        {/* ========== PARTE A ========== */}
        <TabsContent value="parte-a" className="space-y-3 sm:space-y-4 mt-3">

          {/* --- A.i --- */}
          <StepCard
            stepNumber={2}
            title="(i) Rendimientos decrecientes a escala"
            variant="calculation"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">Condici&oacute;n</p>
                <p className="text-blue-900 dark:text-blue-100">
                  Rendimientos decrecientes: la suma de exponentes debe ser menor que 1.
                </p>
              </CardContent>
            </Card>

            <FormulaDisplay math="\frac{1}{4} + \alpha < 1" />
            <FormulaDisplay math="\alpha < \frac{3}{4}" />

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
                <p className="text-amber-900 dark:text-amber-100">
                  Si el capital contribuye poco a la producci&oacute;n (<InlineMath math="\alpha < 3/4" />),
                  y el trabajo tambi&eacute;n contribuye poco (exponente 1/4),
                  duplicar todo da menos del doble: la f&aacute;brica tiene deseconom&iacute;as de escala.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="Rendimientos decrecientes" value="α < 3/4" />
          </StepCard>

          {/* --- A.ii --- */}
          <StepCard
            stepNumber={3}
            title="(ii) PMg_K decreciente"
            variant="calculation"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">Condici&oacute;n</p>
                <p className="text-blue-900 dark:text-blue-100">
                  PMg_K decreciente significa que la segunda derivada respecto a K es negativa.
                </p>
              </CardContent>
            </Card>

            <p className="text-sm mt-2">Calculamos las derivadas:</p>

            <FormulaDisplay math="PMg_K = \frac{\partial f}{\partial K} = \alpha \beta L^{1/4} K^{\alpha - 1}" />
            <FormulaDisplay math="\frac{\partial^2 f}{\partial K^2} = \alpha(\alpha - 1) \beta L^{1/4} K^{\alpha - 2}" />

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
                <p className="text-emerald-900 dark:text-emerald-100">
                  Para que sea negativa: <InlineMath math="\alpha(\alpha - 1) < 0" />.
                  Como <InlineMath math="\alpha > 0" />, necesitamos <InlineMath math="\alpha - 1 < 0" />,
                  es decir, <InlineMath math="\alpha < 1" />.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="PMg_K decreciente" value="α < 1" />
          </StepCard>

          {/* --- A.iii --- */}
          <StepCard
            stepNumber={4}
            title="(iii) RMST decreciente en L"
            variant="calculation"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">Condici&oacute;n</p>
                <p className="text-blue-900 dark:text-blue-100">
                  Que la RMST disminuya cuando aumenta L (isocuantas convexas).
                </p>
              </CardContent>
            </Card>

            <p className="text-sm mt-2">Calculamos la RMST:</p>

            <FormulaDisplay math="PMg_L = \frac{1}{4}\beta L^{-3/4} K^\alpha" />
            <FormulaDisplay math="PMg_K = \alpha \beta L^{1/4} K^{\alpha-1}" />
            <FormulaDisplay math="RMST = \frac{PMg_L}{PMg_K} = \frac{\frac{1}{4}\beta L^{-3/4} K^\alpha}{\alpha \beta L^{1/4} K^{\alpha-1}} = \frac{1}{4\alpha} \cdot \frac{K}{L}" />

            <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
              <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                ¿Cómo se simplifica esa fracción?
              </summary>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <p>Paso a paso:</p>
                <p>1. Los <InlineMath math="\beta" /> se cancelan (arriba y abajo).</p>
                <p>2. <InlineMath math="\frac{L^{-3/4}}{L^{1/4}} = L^{-3/4 - 1/4} = L^{-1} = \frac{1}{L}" /></p>
                <p>3. <InlineMath math="\frac{K^\alpha}{K^{\alpha-1}} = K^{\alpha - (\alpha-1)} = K^1 = K" /></p>
                <p>4. Los números: <InlineMath math="\frac{1/4}{\alpha} = \frac{1}{4\alpha}" /></p>
                <p>Juntando todo: <InlineMath math="\frac{1}{4\alpha} \cdot \frac{K}{L}" /></p>
              </div>
            </details>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis</p>
                <p className="text-emerald-900 dark:text-emerald-100">
                  A lo largo de una isocuanta, cuando L aumenta, K disminuye.
                  Por tanto <InlineMath math="K/L" /> disminuye (numerador baja, denominador sube).
                  La RMST <strong>siempre es decreciente en L</strong> independientemente del valor de{" "}
                  <InlineMath math="\alpha" />.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="RMST decreciente en L" value="SIEMPRE (para todo α > 0)" />
          </StepCard>

          {/* --- A.iv --- */}
          <StepCard
            stepNumber={5}
            title="(iv) PMg_L decreciente"
            variant="calculation"
          >
            <FormulaDisplay math="PMg_L = \frac{1}{4}\beta L^{-3/4} K^\alpha" />
            <FormulaDisplay math="\frac{\partial^2 f}{\partial L^2} = \frac{1}{4}\left(-\frac{3}{4}\right)\beta L^{-7/4} K^\alpha = -\frac{3}{16}\beta L^{-7/4} K^\alpha" />

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
                <p className="text-emerald-900 dark:text-emerald-100">
                  El factor <InlineMath math="-3/16" /> es siempre negativo. Los dem&aacute;s t&eacute;rminos (
                  <InlineMath math="\beta, L^{-7/4}, K^\alpha" />) son positivos para{" "}
                  <InlineMath math="L, K > 0" />.
                </p>
                <p className="text-emerald-900 dark:text-emerald-100">
                  Por tanto <InlineMath math="\frac{\partial^2 f}{\partial L^2} < 0" />{" "}
                  <strong>siempre</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Por qu&eacute;?</p>
                <p className="text-amber-900 dark:text-amber-100">
                  El exponente de L es <InlineMath math="1/4 < 1" />. Como vimos en el Ejercicio 3,
                  PMg_L es decreciente siempre que el exponente sea menor que 1. Como 1/4 es fijo
                  y siempre menor que 1, PMg_L es siempre decreciente.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="PMg_L decreciente" value="SIEMPRE (exponente 1/4 < 1)" />
          </StepCard>

          {/* --- A.v --- */}
          <StepCard
            stepNumber={6}
            title="(v) PMg_L creciente"
            variant="calculation"
          >
            <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  &iexcl;Atenci&oacute;n! Es imposible
                </p>
                <p className="text-rose-900 dark:text-rose-100">
                  Acabamos de demostrar que PMg_L es <strong>siempre decreciente</strong> (la segunda
                  derivada es siempre negativa). Por tanto, PMg_L creciente es{" "}
                  <strong>imposible</strong> para cualquier valor de <InlineMath math="\alpha" />.
                </p>
                <p className="text-rose-900 dark:text-rose-100">
                  Esto se debe a que el exponente de L est&aacute; fijado en 1/4 &lt; 1.
                  Para que PMg_L fuera creciente, necesitar&iacute;amos un exponente de L mayor que 1.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="PMg_L creciente" value="NUNCA (imposible con exponente 1/4)" />
          </StepCard>

          {/* --- Resumen Parte A --- */}
          <StepCard
            stepNumber={7}
            title="Resumen Parte A"
            variant="result"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <ResultCard label="(i) Rend. decrecientes" value="α < 3/4" />
              <ResultCard label="(ii) PMg_K decreciente" value="α < 1" />
              <ResultCard label="(iii) RMST decrec. en L" value="Siempre" />
              <ResultCard label="(iv) PMg_L decreciente" value="Siempre" />
              <ResultCard label="(v) PMg_L creciente" value="Nunca" />
            </div>
          </StepCard>
        </TabsContent>

        {/* ========== PARTE B ========== */}
        <TabsContent value="parte-b" className="space-y-3 sm:space-y-4 mt-3">

          <Card className="bg-gray-50 dark:bg-gray-800 border">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold">Funci&oacute;n con valores concretos</p>
              <p className="text-muted-foreground">
                Con <InlineMath math="\alpha = 1" /> y <InlineMath math="\beta = 10" />:
              </p>
              <FormulaDisplay math="f(K, L) = 10 L^{1/4} K" />
            </CardContent>
          </Card>

          {/* --- B.i --- */}
          <StepCard
            stepNumber={8}
            title={<>(i) Corto plazo: <InlineMath math="\bar{K} = 1" /></>}
            variant="calculation"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  &iquest;Qu&eacute; nos piden?
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  Con K fijo en 1, &iquest;cu&aacute;nto trabajo necesitamos para <strong>duplicar</strong>{" "}
                  la producci&oacute;n que obten&iacute;amos con L=1?
                </p>
              </CardContent>
            </Card>

            <p className="text-sm mt-2">Con <InlineMath math="\bar{K} = 1" />:</p>
            <FormulaDisplay math="x = 10L^{1/4} \cdot 1 = 10L^{1/4}" />

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
              <CardContent className="p-3 text-sm space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  Producci&oacute;n con L=1
                </p>
                <FormulaDisplay math="x(L=1) = 10 \cdot 1^{1/4} = 10" />
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 mt-2">
                  Queremos x = 20 (el doble)
                </p>
                <FormulaDisplay math="20 = 10L^{1/4}" />
                <FormulaDisplay math="L^{1/4} = 2" />

                <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
                  <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
                    ¿Cómo paso de L^(1/4) = 2 a L = 16?
                  </summary>
                  <div className="mt-2 space-y-2 text-muted-foreground">
                    <p>
                      <InlineMath math="L^{1/4}" /> significa &quot;la raíz cuarta de L&quot;.
                      Para &quot;deshacer&quot; una raíz cuarta, elevamos ambos lados a la potencia 4:
                    </p>
                    <FormulaDisplay math="(L^{1/4})^4 = 2^4" />
                    <p>
                      A la izquierda: <InlineMath math="(L^{1/4})^4 = L^{(1/4) \times 4} = L^1 = L" />
                    </p>
                    <p>
                      A la derecha: <InlineMath math="2^4 = 2 \times 2 \times 2 \times 2 = 16" />
                    </p>
                  </div>
                </details>

                <FormulaDisplay math="L = 2^4 = 16" />
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
                <p className="text-amber-900 dark:text-amber-100">
                  Para duplicar la producci&oacute;n, necesitamos <strong>16 veces</strong> m&aacute;s trabajo
                  (de L=1 a L=16). Esto refleja los rendimientos muy decrecientes del trabajo
                  (exponente 1/4): cada trabajador extra aporta muy poco.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="L necesario para duplicar x" value="L = 16 (16 veces más trabajo)" />
          </StepCard>

          {/* --- B.ii --- */}
          <StepCard
            stepNumber={9}
            title="(ii) Isocuanta x = 40"
            variant="calculation"
          >
            <p className="text-sm">
              Despejamos K de <InlineMath math="40 = 10L^{1/4}K" />:
            </p>

            <FormulaDisplay math="K = \frac{40}{10L^{1/4}} = \frac{4}{L^{1/4}}" />

            <div className="mt-3">
              <EconChart xRange={[-0.3, 8.5]} yRange={[-1, 16]}>
                <Plot.OfX
                  y={(L) => (L <= 0.01 ? NaN : 4 / Math.pow(L, 0.25))}
                  color={COLORS.blue}
                  weight={2.5}
                />
                <Plot.OfX
                  y={(L) => (L <= 0.01 ? NaN : 8 / Math.pow(L, 0.25))}
                  color={COLORS.violet}
                  weight={2.5}
                />
                <Text x={5} y={3.8} size={13} color={COLORS.blue}>x = 40</Text>
                <Text x={5} y={7.5} size={13} color={COLORS.violet}>x = 80</Text>
                <Text x={8.2} y={-0.5} size={14}>L</Text>
                <Text x={-0.15} y={15.5} size={14}>K</Text>
              </EconChart>
              <ChartLegend items={[
                { label: "x = 40", color: COLORS.blue },
                { label: "x = 80", color: COLORS.violet },
              ]} />
            </div>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; observamos?</p>
                <p className="text-amber-900 dark:text-amber-100">
                  La isocuanta es decreciente y convexa. Dado que la funci&oacute;n es lineal en K
                  (exponente 1), la isocuanta cae r&aacute;pidamente: el capital es muy sustituible por trabajo.
                  Se incluye tambi&eacute;n la isocuanta x=80 como referencia.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="Isocuanta x=40" value="K = 4/L^(1/4)" />
          </StepCard>

          {/* --- B.iii --- */}
          <StepCard
            stepNumber={10}
            title="(iii) Factor para duplicar producci&oacute;n en LP"
            variant="calculation"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 text-sm">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  &iquest;Qu&eacute; nos piden?
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  En largo plazo (ambos inputs variables), &iquest;por qu&eacute; factor <InlineMath math="t" />{" "}
                  debemos multiplicar <strong>ambos</strong> inputs para que la producci&oacute;n se duplique?
                </p>
              </CardContent>
            </Card>

            <p className="text-sm mt-2">Primero, determinamos los rendimientos a escala:</p>
            <FormulaDisplay math="\text{Suma de exponentes} = \frac{1}{4} + 1 = \frac{5}{4} > 1 \quad \text{(crecientes)}" />

            <p className="text-sm mt-2">Planteamos la ecuaci&oacute;n:</p>
            <FormulaDisplay math="f(tL, tK) = t^{5/4} \cdot f(L,K) = 2 \cdot f(L,K)" />
            <FormulaDisplay math="t^{5/4} = 2" />
            <FormulaDisplay math="t = 2^{4/5} = 2^{0.8} \approx 1.741" />

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">Verificaci&oacute;n</p>
                <p className="text-emerald-900 dark:text-emerald-100">
                  <InlineMath math="1.741^{5/4} = 1.741^{1.25} \approx 2.0" />. Correcto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
                <p className="text-amber-900 dark:text-amber-100">
                  Solo necesitamos multiplicar los inputs por <strong>1.741</strong> (un 74.1% m&aacute;s)
                  para obtener el doble de producci&oacute;n. Esto es menos que duplicar: refleja las{" "}
                  <strong>econom&iacute;as de escala</strong> (<InlineMath math="\alpha + 1/4 = 5/4 > 1" />).
                </p>
                <p className="text-amber-900 dark:text-amber-100 mt-1">
                  Comparaci&oacute;n: con rendimientos constantes necesitar&iacute;amos t=2 (el doble), y con
                  rendimientos decrecientes necesitar&iacute;amos t&gt;2.
                </p>
              </CardContent>
            </Card>

            <ResultCard label="Factor t para duplicar" value="t = 2^(4/5) ≈ 1.741" />
          </StepCard>

          {/* --- Resumen Parte B --- */}
          <StepCard
            stepNumber={11}
            title="Resumen Parte B"
            variant="result"
          >
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              <ResultCard label="Función" value="f = 10L^(1/4)K" />
              <ResultCard label="CP (K̄=1): L para duplicar" value="L = 16" />
              <ResultCard label="Isocuanta x=40" value="K = 4/L^(1/4)" />
              <ResultCard label="LP: factor para duplicar" value="t = 2^(4/5) ≈ 1.741" />
            </div>

            <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
              <CardContent className="p-3 text-sm space-y-1">
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  Contraste CP vs LP
                </p>
                <p className="text-rose-900 dark:text-rose-100">
                  En <strong>corto plazo</strong> (solo L variable), duplicar la producci&oacute;n requiere
                  16x m&aacute;s trabajo: muy ineficiente. En <strong>largo plazo</strong> (ambos inputs variables),
                  solo necesitamos 1.74x m&aacute;s de cada input. Conclusi&oacute;n: la flexibilidad del largo plazo
                  es enormemente m&aacute;s eficiente.
                </p>
              </CardContent>
            </Card>
          </StepCard>
        </TabsContent>
      </Tabs>

      {/* Conexión con el tema */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-4">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            Conexión con los demás temas
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            Este ejercicio cierra el Tema 1. Has aprendido a analizar cualquier función de producción
            Cobb-Douglas: rendimientos, productividades, RMST, corto y largo plazo.
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            En el <Link href="/tema-2" className="text-blue-600 dark:text-blue-400 underline">Tema 2 (Costes)</Link>,
            la empresa usará esta información para decidir <strong>cuánto gastar</strong> en cada factor
            y encontrar la combinación más barata. Cada concepto de producción tiene un &quot;espejo&quot; en costes:
            la isocuanta se convierte en <strong>isocosto</strong>, y la RMST se iguala a la{" "}
            <strong>razón de precios de los factores</strong>.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
