"use client";

import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Ejercicio4() {
  return (
    <ExerciseLayout
      tema={1}
      exerciseNumber={4}
      title="Relaci&oacute;n entre Rendimientos y PMgL"
      difficulty="Alto"
      category="Rendimientos"
      statement={
        <div className="space-y-2">
          <p>
            Para una funci&oacute;n Cobb-Douglas, determine como ser&aacute;n los
            rendimientos a escala (crecientes, decrecientes, constantes) si la
            productividad marginal del trabajo <InlineMath math="L" /> es:
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>Creciente</li>
            <li>Decreciente</li>
            <li>Constante</li>
          </ol>
        </div>
      }
      prevUrl="/tema-1/ejercicio-3"
      nextUrl="/tema-1/ejercicio-5"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio usa los resultados de los{" "}
            <Link href="/tema-1/ejercicio-2" className="text-orange-600 dark:text-orange-400 underline">ejercicios 2</Link>{" "}
            y{" "}
            <Link href="/tema-1/ejercicio-3" className="text-orange-600 dark:text-orange-400 underline">3</Link>.
            Si no recuerdas las condiciones de rendimientos a escala o PMg creciente/decreciente, revísalos primero.
          </p>
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
              La conexi&oacute;n entre dos conceptos diferentes
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Este ejercicio conecta dos ideas que los estudiantes suelen confundir:
            </p>
            <ul className="list-disc pl-4 text-blue-900 dark:text-blue-100 space-y-1">
              <li><strong>PMg creciente/decreciente</strong>: qu&eacute; pasa cuando var&iacute;o <em>un solo</em> input</li>
              <li><strong>Rendimientos a escala</strong>: qu&eacute; pasa cuando var&iacute;o <em>todos</em> los inputs a la vez</li>
            </ul>
            <p className="text-blue-900 dark:text-blue-100">
              La pregunta clave es: <strong>&iquest;saber c&oacute;mo se comporta la PMg me dice algo sobre los rendimientos a escala?</strong>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              Recordemos: PMg_L depende de <InlineMath math="\alpha" />,
              pero los rendimientos dependen de <InlineMath math="\alpha + \beta" />.
              La clave es qu&eacute; sabemos sobre <InlineMath math="\beta" />:
              solo que <InlineMath math="\beta > 0" />.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="Recordatorio: las dos condiciones"
        variant="explanation"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">PMg_L creciente/decreciente</p>
              <p className="text-emerald-900 dark:text-emerald-100 mt-1">Depende de <InlineMath math="\alpha" /> vs 1:</p>
              <ul className="list-disc pl-4 text-emerald-900 dark:text-emerald-100 mt-1 space-y-0.5">
                <li><InlineMath math="\alpha > 1" />: creciente</li>
                <li><InlineMath math="\alpha = 1" />: constante</li>
                <li><InlineMath math="\alpha < 1" />: decreciente</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-amber-800 dark:text-amber-200">Rendimientos a escala</p>
              <p className="text-amber-900 dark:text-amber-100 mt-1">Depende de <InlineMath math="\alpha + \beta" /> vs 1:</p>
              <ul className="list-disc pl-4 text-amber-900 dark:text-amber-100 mt-1 space-y-0.5">
                <li><InlineMath math="\alpha + \beta > 1" />: crecientes</li>
                <li><InlineMath math="\alpha + \beta = 1" />: constantes</li>
                <li><InlineMath math="\alpha + \beta < 1" />: decrecientes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-rose-800 dark:text-rose-200">Dato clave</p>
            <p className="text-rose-900 dark:text-rose-100">
              Solo sabemos que <InlineMath math="\beta > 0" />, pero no sabemos su valor exacto.
              Esto ser&aacute; crucial en los razonamientos que siguen.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title={<>a) PMg_L creciente (<InlineMath math="\alpha > 1" />)</>}
        variant="calculation"
      >
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Razonamiento</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si <InlineMath math="\alpha > 1" />, entonces:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="\alpha > 1 \quad \text{y} \quad \beta > 0" />
        <FormulaDisplay math="\Longrightarrow \quad \alpha + \beta > 1 + 0 = 1" />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
            <p className="text-amber-900 dark:text-amber-100">
              No importa cu&aacute;nto valga <InlineMath math="\beta" /> (siempre que sea positivo):
              la suma siempre supera 1. Los rendimientos son <strong>siempre crecientes</strong>.
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Intuici&oacute;n: si cada trabajador adicional produce m&aacute;s que el anterior (PMg_L creciente),
              y encima a&ntilde;ades m&aacute;s capital, &iexcl;el crecimiento se amplifica!
            </p>
          </CardContent>
        </Card>

        <ResultCard label="Si PMg_L creciente (α > 1)" value="SIEMPRE rendimientos crecientes" />
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title={<>b) PMg_L decreciente (<InlineMath math="0 < \alpha < 1" />)</>}
        variant="calculation"
      >
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Razonamiento</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si <InlineMath math="0 < \alpha < 1" />, la suma <InlineMath math="\alpha + \beta" />{" "}
              puede ser cualquier cosa dependiendo del valor de <InlineMath math="\beta" />:
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-2">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-medium text-emerald-800 dark:text-emerald-200">Ejemplo 1</p>
              <FormulaDisplay math="\alpha = 0.3, \; \beta = 0.5" />
              <p className="text-emerald-900 dark:text-emerald-100">
                <InlineMath math="\alpha+\beta = 0.8 < 1" />
              </p>
              <Badge className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 mt-1">Decrecientes</Badge>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-medium text-emerald-800 dark:text-emerald-200">Ejemplo 2</p>
              <FormulaDisplay math="\alpha = 0.5, \; \beta = 0.5" />
              <p className="text-emerald-900 dark:text-emerald-100">
                <InlineMath math="\alpha+\beta = 1" />
              </p>
              <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mt-1">Constantes</Badge>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-medium text-emerald-800 dark:text-emerald-200">Ejemplo 3</p>
              <FormulaDisplay math="\alpha = 0.5, \; \beta = 2" />
              <p className="text-emerald-900 dark:text-emerald-100">
                <InlineMath math="\alpha+\beta = 2.5 > 1" />
              </p>
              <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 mt-1">Crecientes</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
            <p className="text-amber-900 dark:text-amber-100">
              Con PMg_L decreciente, no podemos saber el tipo de rendimientos.
              La PMg del capital (<InlineMath math="\beta" />) podr&iacute;a &quot;compensar&quot; el efecto.
              Necesitar&iacute;amos saber el valor concreto de <InlineMath math="\beta" />.
            </p>
            <p className="text-amber-900 dark:text-amber-100 mt-1">
              <strong>Analogía:</strong> imagina que cada camarero nuevo en un restaurante es
              menos eficiente que el anterior (PMg_L decreciente). Pero si compras más mesas
              y una cocina más grande (capital), el restaurante puede crecer mucho.
              Todo depende de cuánto contribuye el capital.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="Si PMg_L decreciente (0 < α < 1)" value="INDETERMINADO (puede ser cualquiera)" />
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard
        stepNumber={5}
        title={<>c) PMg_L constante (<InlineMath math="\alpha = 1" />)</>}
        variant="calculation"
      >
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Razonamiento</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si <InlineMath math="\alpha = 1" />, entonces:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="\alpha + \beta = 1 + \beta" />
        <FormulaDisplay math="\beta > 0 \quad \Longrightarrow \quad 1 + \beta > 1" />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
            <p className="text-amber-900 dark:text-amber-100">
              Si cada trabajador produce lo mismo que el anterior (PMg constante),
              y el capital tiene cualquier contribuci&oacute;n positiva (<InlineMath math="\beta > 0" />),
              entonces al escalar todo la producci&oacute;n crece m&aacute;s que proporcionalmente.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="Si PMg_L constante (α = 1)" value="SIEMPRE rendimientos crecientes" />
      </StepCard>

      {/* ============ PASO 6 ============ */}
      <StepCard
        stepNumber={6}
        title="Resumen comparativo"
        variant="result"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="text-left p-2">Condici&oacute;n sobre PMg_L</th>
                <th className="text-center p-2"><InlineMath math="\alpha" /></th>
                <th className="text-center p-2"><InlineMath math="\alpha + \beta" /></th>
                <th className="text-center p-2">Rendimientos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">PMg_L creciente</td>
                <td className="text-center p-2"><InlineMath math="> 1" /></td>
                <td className="text-center p-2"><InlineMath math="> 1" /> siempre</td>
                <td className="text-center p-2">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                    Crecientes
                  </Badge>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">PMg_L decreciente</td>
                <td className="text-center p-2"><InlineMath math="< 1" /></td>
                <td className="text-center p-2">depende de <InlineMath math="\beta" /></td>
                <td className="text-center p-2">
                  <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Indeterminado
                  </Badge>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">PMg_L constante</td>
                <td className="text-center p-2"><InlineMath math="= 1" /></td>
                <td className="text-center p-2"><InlineMath math="1 + \beta > 1" /></td>
                <td className="text-center p-2">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                    Crecientes
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Moraleja del ejercicio
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              PMg_L creciente o constante <strong>garantiza</strong> rendimientos crecientes. Pero PMg_L
              decreciente <strong>no garantiza nada</strong> sobre los rendimientos a escala: depende de
              c&oacute;mo sea la PMg del otro factor.
            </p>
            <p className="text-rose-900 dark:text-rose-100 mt-1">
              <strong>Error t&iacute;pico de examen:</strong> asumir que PMg decreciente implica rendimientos decrecientes. &iexcl;No es as&iacute;!
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            Conexión con el resto del tema
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            La moraleja clave: <strong>rendimientos decrecientes del trabajo NO significan
            rendimientos decrecientes a escala</strong>. Son conceptos diferentes.
            Esto es crucial para el <Link href="/tema-2" className="text-blue-600 dark:text-blue-400 underline">Tema 2 (Costes)</Link>:
            los costes a largo plazo dependen de los rendimientos a escala, mientras que
            los costes a corto plazo dependen de los rendimientos del factor variable.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
