"use client";

import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Ejercicio2() {
  return (
    <ExerciseLayout
      tema={1}
      exerciseNumber={2}
      title="Rendimientos a Escala"
      difficulty="Bajo"
      category="Rendimientos"
      statement={
        <div className="space-y-2">
          <p>
            Suponga que la tecnolog&iacute;a accesible para producir el bien
            &ldquo;y&rdquo; est&aacute; representada por la funci&oacute;n de
            producci&oacute;n <InlineMath math="y = 10L^{0.5}K^{0.5}" />, donde{" "}
            <InlineMath math="L" /> y <InlineMath math="K" /> indican
            respectivamente las cantidades de trabajo y capital utilizadas en la
            producci&oacute;n del bien &ldquo;y&rdquo;.
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              Determine qu&eacute; tipos de rendimientos a escala posee dicha
              funci&oacute;n de producci&oacute;n.
            </li>
            <li>
              Determine qu&eacute; tipo de rendimientos a escala posee la
              funci&oacute;n de producci&oacute;n del bien &ldquo;x&rdquo; del
              ejercicio 1.
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-1/ejercicio-1"
      nextUrl="/tema-1/ejercicio-3"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio usa <strong>propiedades de potencias</strong> (como{" "}
            <InlineMath math="(tL)^\alpha = t^\alpha L^\alpha" />). Si las potencias te resultan
            confusas, revisa el apartado de regla de la potencia en el kit matem&aacute;tico.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Regla de la potencia &rarr;
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
              &iquest;Qu&eacute; son los rendimientos a escala?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina una f&aacute;brica de coches. Si <strong>duplicas todo</strong> (el doble de
              trabajadores, el doble de m&aacute;quinas, el doble de f&aacute;brica), &iquest;produces
              exactamente el doble de coches?
            </p>
            <ul className="list-disc pl-4 text-blue-900 dark:text-blue-100 space-y-1">
              <li><strong>S&iacute;, exactamente el doble</strong>: rendimientos <strong>constantes</strong> a escala</li>
              <li><strong>M&aacute;s del doble</strong>: rendimientos <strong>crecientes</strong> (econom&iacute;as de escala)</li>
              <li><strong>Menos del doble</strong>: rendimientos <strong>decrecientes</strong> (deseconom&iacute;as de escala)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              &iquest;Es eficiente crecer? Si hay rendimientos crecientes, crecer es
              &quot;barato&quot; (produces m&aacute;s por euro invertido). Si son decrecientes,
              crecer tiene costes cada vez mayores.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="El m&eacute;todo: multiplicar todos los inputs por t"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Procedimiento para Cobb-Douglas
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Para una funci&oacute;n <InlineMath math="f(L,K) = AL^\alpha K^\beta" />,
              multiplicamos <strong>ambos inputs</strong> por un factor{" "}
              <InlineMath math="t > 1" />:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="f(tL, tK) = A(tL)^\alpha(tK)^\beta = At^\alpha L^\alpha \cdot t^\beta K^\beta = t^{\alpha+\beta} \cdot AL^\alpha K^\beta = t^{\alpha+\beta} \cdot f(L,K)" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            No entiendo estos pasos &iquest;de d&oacute;nde sale cada igualdad?
          </summary>
          <div className="mt-2 space-y-3 text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Paso 1: sustituimos</p>
              <p>Donde pone L ponemos tL, donde pone K ponemos tK:</p>
              <FormulaDisplay math="A(tL)^\alpha(tK)^\beta" />
            </div>
            <div>
              <p className="font-medium text-foreground">Paso 2: separamos las potencias</p>
              <p>Regla: <InlineMath math="(ab)^n = a^n \cdot b^n" />. Aplicamos:</p>
              <FormulaDisplay math="(tL)^\alpha = t^\alpha \cdot L^\alpha" />
              <FormulaDisplay math="(tK)^\beta = t^\beta \cdot K^\beta" />
            </div>
            <div>
              <p className="font-medium text-foreground">Paso 3: juntamos las t</p>
              <p>Regla: <InlineMath math="t^a \cdot t^b = t^{a+b}" />. Las t se juntan:</p>
              <FormulaDisplay math="t^\alpha \cdot t^\beta = t^{\alpha + \beta}" />
            </div>
            <div>
              <p className="font-medium text-foreground">Paso 4: reconocemos f(L,K)</p>
              <p>Lo que queda sin las t es exactamente la funci&oacute;n original:</p>
              <FormulaDisplay math="AL^\alpha K^\beta = f(L,K)" />
            </div>
          </div>
        </details>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-3">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                <InlineMath math="\alpha + \beta = 1" />
              </p>
              <Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 mt-1">
                Constantes
              </Badge>
              <p className="text-xs text-emerald-900 dark:text-emerald-100 mt-1">
                Duplico inputs, duplico output
              </p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-semibold text-amber-800 dark:text-amber-200">
                <InlineMath math="\alpha + \beta > 1" />
              </p>
              <Badge className="bg-amber-200 dark:bg-amber-800/40 text-amber-800 dark:text-amber-200 mt-1">
                Crecientes
              </Badge>
              <p className="text-xs text-amber-900 dark:text-amber-100 mt-1">
                Duplico inputs, m&aacute;s del doble de output
              </p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-semibold text-rose-800 dark:text-rose-200">
                <InlineMath math="\alpha + \beta < 1" />
              </p>
              <Badge className="bg-rose-200 dark:bg-rose-800/40 text-rose-800 dark:text-rose-200 mt-1">
                Decrecientes
              </Badge>
              <p className="text-xs text-rose-900 dark:text-rose-100 mt-1">
                Duplico inputs, menos del doble de output
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Atajo para Cobb-Douglas
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              En una Cobb-Douglas, solo necesitas <strong>sumar los exponentes</strong>.
              No hace falta hacer todo el desarrollo cada vez. Pero para el examen,
              conviene mostrar el procedimiento completo al menos una vez.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title={<>a) <InlineMath math="y = 10L^{0.5}K^{0.5}" /></>}
        variant="calculation"
      >
        <p className="text-sm">
          Sustituimos <InlineMath math="L" /> por <InlineMath math="tL" /> y{" "}
          <InlineMath math="K" /> por <InlineMath math="tK" />:
        </p>

        <FormulaDisplay math="f(tL, tK) = 10(tL)^{0.5}(tK)^{0.5}" />
        <FormulaDisplay math="= 10 \cdot t^{0.5} L^{0.5} \cdot t^{0.5} K^{0.5}" />
        <FormulaDisplay math="= t^{0.5 + 0.5} \cdot 10L^{0.5}K^{0.5}" />
        <FormulaDisplay math="= t^1 \cdot f(L,K)" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              C&aacute;lculo r&aacute;pido
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              <InlineMath math="\alpha + \beta = 0.5 + 0.5 = 1" />
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; significa?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Si <InlineMath math="t = 2" /> (duplicamos L y K), la producci&oacute;n se multiplica
              por <InlineMath math="2^1 = 2" />: exactamente el doble. Si triplicas inputs, triplicas output.
              La empresa crece proporcionalmente.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="Rendimientos" value="Constantes a escala (α+β = 1)" />
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title={<>b) <InlineMath math="x = 10L^2K" /></>}
        variant="calculation"
      >
        <p className="text-sm">
          Sustituimos <InlineMath math="L" /> por <InlineMath math="tL" /> y{" "}
          <InlineMath math="K" /> por <InlineMath math="tK" />:
        </p>

        <FormulaDisplay math="f(tL, tK) = 10(tL)^2(tK)" />
        <FormulaDisplay math="= 10 \cdot t^2 L^2 \cdot t \cdot K" />
        <FormulaDisplay math="= t^{2+1} \cdot 10L^2K" />
        <FormulaDisplay math="= t^3 \cdot f(L,K)" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              C&aacute;lculo r&aacute;pido
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              <InlineMath math="\alpha + \beta = 2 + 1 = 3 > 1" />
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; significa?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Si <InlineMath math="t = 2" /> (duplicamos L y K), la producci&oacute;n se multiplica
              por <InlineMath math="2^3 = 8" />: &iexcl;ocho veces m&aacute;s! Duplicar los inputs
              produce mucho m&aacute;s del doble. Hay fuertes <strong>econom&iacute;as de escala</strong>:
              a esta empresa le conviene crecer.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="Rendimientos" value="Crecientes a escala (α+β = 3 > 1)" />
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard
        stepNumber={5}
        title="Resumen comparativo"
        variant="result"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="text-left p-2">Funci&oacute;n</th>
                <th className="text-center p-2"><InlineMath math="\alpha" /></th>
                <th className="text-center p-2"><InlineMath math="\beta" /></th>
                <th className="text-center p-2"><InlineMath math="\alpha + \beta" /></th>
                <th className="text-center p-2">Rendimientos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2"><InlineMath math="10L^{0.5}K^{0.5}" /></td>
                <td className="text-center p-2">0.5</td>
                <td className="text-center p-2">0.5</td>
                <td className="text-center p-2 font-bold">1</td>
                <td className="text-center p-2">
                  <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200">
                    Constantes
                  </Badge>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2"><InlineMath math="10L^2K" /></td>
                <td className="text-center p-2">2</td>
                <td className="text-center p-2">1</td>
                <td className="text-center p-2 font-bold">3</td>
                <td className="text-center p-2">
                  <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                    Crecientes
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold">Recuerda para el examen</p>
            <p className="text-muted-foreground">
              En una Cobb-Douglas <InlineMath math="f = AL^\alpha K^\beta" />, los
              rendimientos a escala dependen &uacute;nicamente de la suma <InlineMath math="\alpha + \beta" />.
              El par&aacute;metro <InlineMath math="A" /> (tecnolog&iacute;a) no afecta al tipo de rendimientos.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            Conexi&oacute;n con el resto del tema
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            Los rendimientos a escala determinan si a una empresa le conviene crecer.
            En el <Link href="/tema-2" className="text-blue-600 dark:text-blue-400 underline">Tema 2 (Costes)</Link>,
            veremos que rendimientos crecientes implican que el <strong>coste medio baja</strong> al producir m&aacute;s,
            y rendimientos decrecientes hacen que el coste medio suba.
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            <strong>Ejemplos reales:</strong> las tecnol&oacute;gicas (Google, Meta) tienen rendimientos
            crecientes &mdash; el coste de un usuario extra es casi cero. Los restaurantes artesanales
            tienen rendimientos decrecientes &mdash; crecer demasiado reduce la calidad.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
