"use client";

import Link from "next/link";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Ejercicio3() {
  return (
    <ExerciseLayout
      tema={1}
      exerciseNumber={3}
      title="Propiedades de la Cobb-Douglas"
      difficulty="Medio-Alto"
      category="Teor&iacute;a"
      statement={
        <div className="space-y-2">
          <p>
            Para una funci&oacute;n de producci&oacute;n Cobb-Douglas, discuta en
            funci&oacute;n del valor de los par&aacute;metros{" "}
            <InlineMath math="A" />, <InlineMath math="\alpha" /> y{" "}
            <InlineMath math="\beta" /> cuando:
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              Los rendimientos a escala son crecientes, decrecientes y constantes.
            </li>
            <li>Las productividades marginales son positivas.</li>
            <li>Las productividades medias son positivas.</li>
            <li>
              La productividad marginal del trabajo es creciente en{" "}
              <InlineMath math="L" />.
            </li>
            <li>
              La productividad marginal del capital es creciente en{" "}
              <InlineMath math="K" />.
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-1/ejercicio-2"
      nextUrl="/tema-1/ejercicio-4"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio usa <strong>derivadas parciales</strong> y <strong>segundas derivadas</strong>.
            Si no est&aacute;s c&oacute;modo con estos conceptos, revisa estas herramientas primero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/toolkit/derivadas">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas desde cero &rarr;
              </Badge>
            </Link>
            <Link href="/toolkit/derivadas-parciales">
              <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">
                Derivadas parciales &rarr;
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
              &iquest;Por qu&eacute; demostrar propiedades generales?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La funci&oacute;n Cobb-Douglas <InlineMath math="Y = AL^\alpha K^\beta" /> es el modelo
              de producci&oacute;n m&aacute;s usado en microeconom&iacute;a. Entender sus propiedades generales
              significa que podr&aacute;s resolver <strong>cualquier ejercicio</strong> con esta funci&oacute;n
              sin volver a derivar desde cero.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Piensa en estas propiedades como &quot;reglas universales&quot;: una vez demostradas,
              las aplicas directamente mirando los exponentes <InlineMath math="\alpha" /> y{" "}
              <InlineMath math="\beta" />.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              Dado que conozco los par&aacute;metros <InlineMath math="A, \alpha, \beta" />,
              &iquest;qu&eacute; puedo afirmar <em>sin hacer c&aacute;lculos</em> sobre el comportamiento
              de la producci&oacute;n?
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="a) Rendimientos a escala"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; queremos demostrar?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Que al multiplicar todos los inputs por <InlineMath math="t" />, el output se multiplica
              por <InlineMath math="t^{\alpha+\beta}" />, y por tanto el tipo de rendimientos depende de
              si <InlineMath math="\alpha + \beta" /> es igual, mayor o menor que 1.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm mt-2">Sustituimos <InlineMath math="L \to tL" /> y <InlineMath math="K \to tK" />:</p>

        <FormulaDisplay math="f(tL, tK) = A(tL)^\alpha(tK)^\beta = At^\alpha L^\alpha \cdot t^\beta K^\beta" />
        <FormulaDisplay math="= t^{\alpha+\beta} \cdot AL^\alpha K^\beta = t^{\alpha+\beta} \cdot f(L,K)" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">Conclusi&oacute;n</p>
            <ul className="list-disc pl-4 text-emerald-900 dark:text-emerald-100 space-y-1">
              <li><InlineMath math="\alpha + \beta = 1" />: <InlineMath math="f(tL,tK) = t \cdot f(L,K)" /> &rarr; <strong>constantes</strong></li>
              <li><InlineMath math="\alpha + \beta > 1" />: <InlineMath math="f(tL,tK) > t \cdot f(L,K)" /> &rarr; <strong>crecientes</strong></li>
              <li><InlineMath math="\alpha + \beta < 1" />: <InlineMath math="f(tL,tK) < t \cdot f(L,K)" /> &rarr; <strong>decrecientes</strong></li>
            </ul>
          </CardContent>
        </Card>

        <ResultCard label="Rendimientos" value="Dependen de α+β vs 1" />
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title="b) PMg > 0 si A, α, β > 0"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; queremos demostrar?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Que a&ntilde;adir m&aacute;s de cualquier input <strong>siempre aumenta</strong> la producci&oacute;n
              (la productividad marginal es positiva).
            </p>
          </CardContent>
        </Card>

        <p className="text-sm mt-2">Calculamos las derivadas parciales:</p>

        <FormulaDisplay math="PMg_L = \frac{\partial Y}{\partial L} = \alpha A L^{\alpha-1} K^\beta" />
        <FormulaDisplay math="PMg_K = \frac{\partial Y}{\partial K} = \beta A L^\alpha K^{\beta-1}" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;C&oacute;mo se obtienen estas derivadas?
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Para <InlineMath math="PMg_L" />: derivamos <InlineMath math="AL^\alpha K^\beta" /> respecto a L,
              tratando <InlineMath math="AK^\beta" /> como constante:
            </p>
            <p>
              <strong>Regla de la potencia:</strong> el exponente <InlineMath math="\alpha" /> baja multiplicando,
              y el exponente se reduce en 1:
            </p>
            <FormulaDisplay math="\frac{\partial}{\partial L}(AL^\alpha K^\beta) = A K^\beta \cdot \alpha L^{\alpha - 1} = \alpha A L^{\alpha-1} K^\beta" />
            <p>An&aacute;logo para <InlineMath math="PMg_K" />, intercambiando los roles de L y K.</p>
          </div>
        </details>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Si <InlineMath math="A > 0" />, <InlineMath math="\alpha > 0" />,{" "}
              <InlineMath math="\beta > 0" />, y <InlineMath math="L, K > 0" /> (cantidades f&iacute;sicas),
              entonces todos los t&eacute;rminos del producto son positivos.
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Por tanto: <InlineMath math="PMg_L > 0" /> y <InlineMath math="PMg_K > 0" />.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
            <p className="text-amber-900 dark:text-amber-100">
              En la Cobb-Douglas, nunca se llega a un punto donde a&ntilde;adir m&aacute;s trabajo o capital
              sea contraproducente. La producci&oacute;n <strong>siempre crece</strong> con m&aacute;s inputs
              (aunque puede crecer cada vez m&aacute;s lentamente).
            </p>
          </CardContent>
        </Card>

        <ResultCard label="PMg_L y PMg_K" value="Siempre positivos (si A, α, β > 0)" />
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title="c) PMe > 0 si A > 0"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; queremos demostrar?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Que la producci&oacute;n promedio por unidad de factor es siempre positiva.
              Esto es intuitivo: si produces algo positivo con inputs positivos, el promedio es positivo.
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="PMe_L = \frac{Y}{L} = \frac{AL^\alpha K^\beta}{L} = AL^{\alpha-1}K^\beta" />
        <FormulaDisplay math="PMe_K = \frac{Y}{K} = \frac{AL^\alpha K^\beta}{K} = AL^\alpha K^{\beta-1}" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Con <InlineMath math="A > 0" /> y <InlineMath math="L, K > 0" />,
              las potencias de n&uacute;meros positivos son siempre positivas,
              independientemente de los exponentes. Por tanto{" "}
              <InlineMath math="PMe_L > 0" /> y <InlineMath math="PMe_K > 0" />.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-amber-800 dark:text-amber-200">Nota</p>
            <p className="text-amber-900 dark:text-amber-100">
              Solo necesitamos <InlineMath math="A > 0" /> (no hace falta condici&oacute;n sobre{" "}
              <InlineMath math="\alpha" /> o <InlineMath math="\beta" />). Esto es porque las potencias
              de n&uacute;meros positivos siempre dan resultado positivo,
              sin importar si el exponente es mayor o menor que 1.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="PMe_L y PMe_K" value="Siempre positivos (si A > 0)" />
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard
        stepNumber={5}
        title="d) PMg_L creciente si α > 1"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; queremos demostrar?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Que la productividad del &uacute;ltimo trabajador contratado <strong>aumenta</strong>{" "}
              a medida que contratamos m&aacute;s. Esto implica que la segunda derivada respecto a L es positiva.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm mt-2">
          Partimos de <InlineMath math="PMg_L = \alpha A L^{\alpha-1} K^\beta" /> y derivamos respecto a L:
        </p>

        <FormulaDisplay math="\frac{\partial PMg_L}{\partial L} = \frac{\partial^2 Y}{\partial L^2} = \alpha(\alpha-1) A L^{\alpha-2} K^\beta" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;C&oacute;mo se obtiene la segunda derivada?
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Partimos de <InlineMath math="PMg_L = \alpha A L^{\alpha-1} K^\beta" /> y derivamos
              OTRA VEZ respecto a L:
            </p>
            <p>
              <strong>Regla de la potencia:</strong> el exponente <InlineMath math="(\alpha-1)" /> baja
              multiplicando al <InlineMath math="\alpha A K^\beta" /> que ya estaba delante:
            </p>
            <FormulaDisplay math="\frac{\partial}{\partial L}(\alpha A L^{\alpha-1} K^\beta) = \alpha A K^\beta \cdot (\alpha-1) L^{(\alpha-1)-1} = \alpha(\alpha-1) A L^{\alpha-2} K^\beta" />
            <p>
              El signo depende de <InlineMath math="\alpha(\alpha-1)" />: si ambos son positivos (&rarr; positivo),
              si uno es negativo (&rarr; negativo).
            </p>
          </div>
        </details>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para que <InlineMath math="\frac{\partial^2 Y}{\partial L^2} > 0" />,
              necesitamos que <InlineMath math="\alpha(\alpha - 1) > 0" /> (el resto de factores son positivos).
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Esto ocurre cuando ambos factores tienen el mismo signo. Como{" "}
              <InlineMath math="\alpha > 0" />, necesitamos <InlineMath math="\alpha - 1 > 0" />,
              es decir, <InlineMath math="\alpha > 1" />.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-amber-800 dark:text-amber-200">&iquest;Qu&eacute; significa?</p>
            <p className="text-amber-900 dark:text-amber-100">
              Si <InlineMath math="\alpha > 1" />, cada trabajador adicional es <strong>m&aacute;s productivo</strong>{" "}
              que el anterior. Si <InlineMath math="\alpha < 1" />, ocurre lo contrario: PMg_L es decreciente
              (ley de rendimientos decrecientes). El caso <InlineMath math="\alpha = 1" /> da PMg_L constante.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="PMg_L creciente" value="α > 1" />
      </StepCard>

      {/* ============ PASO 6 ============ */}
      <StepCard
        stepNumber={6}
        title="e) PMg_K creciente si β > 1"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Razonamiento an&aacute;logo al del trabajo
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              El mismo razonamiento del apartado anterior se aplica al capital, intercambiando{" "}
              <InlineMath math="\alpha" /> por <InlineMath math="\beta" />.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm mt-2">
          Partimos de <InlineMath math="PMg_K = \beta A L^\alpha K^{\beta-1}" /> y derivamos respecto a K:
        </p>

        <FormulaDisplay math="\frac{\partial PMg_K}{\partial K} = \frac{\partial^2 Y}{\partial K^2} = \beta(\beta-1) A L^\alpha K^{\beta-2}" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">An&aacute;lisis de signo</p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para <InlineMath math="\frac{\partial^2 Y}{\partial K^2} > 0" />:
              necesitamos <InlineMath math="\beta(\beta - 1) > 0" />.
              Como <InlineMath math="\beta > 0" />, necesitamos <InlineMath math="\beta > 1" />.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="PMg_K creciente" value="β > 1" />

        {/* ============ RESUMEN FINAL ============ */}
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold mb-3">Resumen de propiedades de la Cobb-Douglas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <ResultCard label="Rendimientos a escala" value="Dependen de α+β vs 1" />
            <ResultCard label="PMg > 0" value="Siempre (si A, α, β > 0)" />
            <ResultCard label="PMe > 0" value="Siempre (si A > 0)" />
            <ResultCard label="PMg_L creciente" value="α > 1" />
            <ResultCard label="PMg_L decreciente" value="0 < α < 1" />
            <ResultCard label="PMg_K creciente" value="β > 1" />
          </div>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores frecuentes
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Confundir rendimientos a escala (ambos inputs escalan) con PMg creciente/decreciente (un solo input var&iacute;a).</li>
              <li>Olvidar que PMg creciente requiere <InlineMath math="\alpha > 1" />, NO <InlineMath math="\alpha + \beta > 1" />.</li>
              <li>Pensar que PMe positiva necesita condiciones sobre los exponentes: solo necesita <InlineMath math="A > 0" />.</li>
            </ul>
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
            Estas propiedades son tu &quot;chuleta universal&quot; para la Cobb-Douglas.
            En el <Link href="/tema-1/ejercicio-4" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 4</Link>{" "}
            las usaremos para responder si saber algo sobre la PMg nos dice algo sobre los rendimientos a escala.
            Y en el <Link href="/tema-1/ejercicio-5" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 5</Link>{" "}
            aplicaremos todo junto a una funci&oacute;n concreta con par&aacute;metros.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
