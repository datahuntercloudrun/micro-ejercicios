"use client";

import { useState } from "react";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

interface VFCardProps {
  id: string;
  statement: string;
  answer: "VERDADERO" | "FALSO";
  explanation: React.ReactNode;
}

function VFCard({ id, statement, answer, explanation }: VFCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Card className="border">
      <CardContent className="p-3 sm:p-5 space-y-3">
        <div className="flex items-start gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-bold">
            {id}
          </span>
          <p className="text-sm sm:text-base font-medium pt-0.5">{statement}</p>
        </div>

        {!revealed ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRevealed(true)}
            className="ml-10"
          >
            <Eye className="h-4 w-4 mr-2" />
            Ver respuesta
          </Button>
        ) : (
          <div className="ml-10 space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                className={
                  answer === "FALSO"
                    ? "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200"
                    : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200"
                }
              >
                {answer}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRevealed(false)}
                className="h-7 px-2"
              >
                <EyeOff className="h-3.5 w-3.5" />
              </Button>
            </div>
            <Card
              className={
                answer === "FALSO"
                  ? "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800"
                  : "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
              }
            >
              <CardContent className="p-3 text-sm space-y-2">
                {explanation}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Ejercicio3() {
  return (
    <ExerciseLayout
      tema={2}
      exerciseNumber={3}
      title="Verdadero o Falso sobre Costes"
      difficulty="Medio-Alto"
      category="Teoría de costes"
      statement={
        <p>
          Discuta ayud&aacute;ndose de gr&aacute;ficos, la veracidad de las
          siguientes afirmaciones:
        </p>
      }
      prevUrl="/tema-2/ejercicio-2"
      nextUrl="/tema-2/test"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio requiere entender bien las relaciones entre CMe, CVMe y CMg del{" "}
            <Link href="/tema-2/ejercicio-1" className="text-orange-600 dark:text-orange-400 underline">Ejercicio 1</Link>.
            Si no recuerdas cuándo CMg corta a CMe en su mínimo, repásalo antes.
          </p>
        </CardContent>
      </Card>

      {/* ============ PASO 1: ¿Qué vamos a aprender? ============ */}
      <StepCard
        stepNumber={1}
        title="¿Qué vamos a aprender?"
        variant="explanation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Las relaciones entre las tres curvas de costes a CP
            </p>
            <p>
              A corto plazo, hay <strong>tres curvas de costes</strong> clave
              que debemos dominar. Entender cómo se relacionan es fundamental
              para el análisis económico.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-3">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold">Las tres curvas y sus relaciones</p>
            <ul className="list-disc pl-4 text-muted-foreground space-y-1">
              <li>
                <strong>CMe (CTMe)</strong> = Coste Total Medio ={" "}
                <InlineMath math="\frac{CT}{x} = CVMe + \frac{CF}{x}" />
              </li>
              <li>
                <strong>CVMe</strong> = Coste Variable Medio ={" "}
                <InlineMath math="\frac{CV}{x}" />
              </li>
              <li>
                <strong>CMg</strong> = Coste Marginal ={" "}
                <InlineMath math="\frac{dCT}{dx} = \frac{dCV}{dx}" />
              </li>
            </ul>
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
              <CardContent className="p-2 text-sm">
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>Propiedades clave:</strong> (1) CMe &gt; CVMe
                  siempre (porque CMe = CVMe + CF/x). (2) CMg corta a CVMe
                  en su mínimo. (3) CMg corta a CMe en su mínimo. (4) El
                  mínimo de CVMe ocurre ANTES que el mínimo de CMe.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2: Las 6 afirmaciones ============ */}
      <StepCard
        stepNumber={2}
        title="Análisis de cada afirmación"
        variant="calculation"
      >
        <p className="text-sm text-muted-foreground mb-3">
          Pulsa &laquo;Ver respuesta&raquo; para descubrir si cada afirmación es
          verdadera o falsa. Intenta razonarla tú primero.
        </p>

        <div className="space-y-3">
          {/* a) Si CMe decreciente → CVMe decreciente? */}
          <VFCard
            id="a"
            statement="Si el CMe es decreciente, el CVMe también lo es."
            answer="FALSO"
            explanation={
              <>
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  ¿Por qué es falso?
                </p>
                <p className="text-muted-foreground">
                  Recuerda que <InlineMath math="CMe = CVMe + \frac{CF}{x}" />.
                  El CMe puede decrecer porque el término{" "}
                  <InlineMath math="\frac{CF}{x}" /> baja rápidamente (al
                  repartir los costes fijos entre más unidades), incluso si el
                  CVMe ya está subiendo.
                </p>
                <p className="text-muted-foreground mt-1">
                  <strong>Contraejemplo:</strong> Imagina que el CVMe ya está
                  en su tramo creciente (ha pasado su mínimo), pero el CMe
                  todavía baja porque el &laquo;reparto&raquo; de costes fijos
                  compensa la subida del CVMe. Esto ocurre en la zona entre el
                  mínimo de CVMe y el mínimo de CMe.
                </p>
              </>
            }
          />

          {/* b) Si CMe creciente → CVMe creciente? */}
          <VFCard
            id="b"
            statement="Si el CMe es creciente, el CVMe también lo es."
            answer="VERDADERO"
            explanation={
              <>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  ¿Por qué es verdadero?
                </p>
                <p className="text-muted-foreground">
                  Sabemos que el mínimo de CVMe ocurre <strong>antes</strong>{" "}
                  que el mínimo de CMe (a un x menor). Por tanto, si estamos
                  en un punto donde CMe ya es creciente, significa que hemos
                  superado el mínimo de CMe, que está a la{" "}
                  <strong>derecha</strong> del mínimo de CVMe. Así que el CVMe
                  ya pasó su mínimo hace rato y también está creciendo.
                </p>
                <FormulaDisplay math="x_{min CVMe} < x_{min CMe}" />
                <p className="text-muted-foreground">
                  Si <InlineMath math="x > x_{min CMe}" /> entonces{" "}
                  <InlineMath math="x > x_{min CVMe}" />, y ambos son
                  crecientes.
                </p>
              </>
            }
          />

          {/* c) Min CMe > Min CVMe en producción */}
          <VFCard
            id="c"
            statement="El nivel de producción que minimiza CMe a corto plazo es mayor que el nivel de producción donde CVMe es mínimo."
            answer="VERDADERO"
            explanation={
              <>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  ¿Por qué es verdadero?
                </p>
                <p className="text-muted-foreground">
                  El CMg corta <strong>primero</strong> al CVMe (en su mínimo) y{" "}
                  <strong>después</strong> al CMe (en su mínimo). ¿Por qué?
                  Porque CMe = CVMe + CF/x, y CMe &gt; CVMe siempre. La curva
                  CMg, que viene desde abajo, cruza primero la curva más baja
                  (CVMe) y luego la más alta (CMe).
                </p>
                <FormulaDisplay math="x_{min CVMe} < x_{min CMe}" />
                <p className="text-muted-foreground">
                  Dicho de otro modo: cuando CMg ya ha superado al CVMe (CVMe
                  empieza a subir), el CMe todavía puede seguir bajando gracias
                  a que CF/x sigue decreciendo.
                </p>
              </>
            }
          />

          {/* d) Si CMg creciente → CVMe creciente? */}
          <VFCard
            id="d"
            statement="Si el CMg es creciente, el CVMe también lo es."
            answer="FALSO"
            explanation={
              <>
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  ¿Por qué es falso?
                </p>
                <p className="text-muted-foreground">
                  El CMg puede estar creciendo pero todavía estar{" "}
                  <strong>por debajo</strong> del CVMe. En ese caso, aunque el
                  CMg suba, cada unidad extra sigue siendo más barata que la
                  media variable, así que el CVMe sigue bajando.
                </p>
                <p className="text-muted-foreground mt-1">
                  <strong>Analogía:</strong> Si tu nota media es 7 y sacas un
                  5.5, tu media baja. Si en el siguiente examen sacas un 6
                  (mejor que el 5.5, o sea &laquo;marginal creciente&raquo;), tu
                  media <strong>sigue bajando</strong> porque 6 &lt; 7. El
                  marginal crece pero la media baja.
                </p>
                <p className="text-muted-foreground mt-1">
                  Solo cuando CMg supera al CVMe (lo cruza), el CVMe empieza a
                  subir.
                </p>
              </>
            }
          />

          {/* e) Si CMg decreciente → CMe y CVMe decrecientes? */}
          <VFCard
            id="e"
            statement="Si el CMg es decreciente, el CMe y el CVMe también lo son."
            answer="VERDADERO"
            explanation={
              <>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                  ¿Por qué es verdadero?
                </p>
                <p className="text-muted-foreground">
                  Si el CMg es decreciente, significa que todavía no ha
                  alcanzado su mínimo. El CMg corta al CVMe y al CMe en sus
                  respectivos mínimos, y esos mínimos ocurren{" "}
                  <strong>después</strong> del mínimo del CMg.
                </p>
                <FormulaDisplay math="x_{min CMg} < x_{min CVMe} < x_{min CMe}" />
                <p className="text-muted-foreground">
                  Si el CMg está decreciendo, estamos a la izquierda de{" "}
                  <InlineMath math="x_{min CMg}" />, que está a la izquierda de
                  los mínimos de CVMe y CMe. Por tanto, tanto el CVMe como el
                  CMe están en su tramo decreciente.
                </p>
                <p className="text-muted-foreground mt-1">
                  Intuitivamente: si cada unidad adicional cuesta menos que la
                  anterior, y encima cada vez menos, es imposible que la media
                  suba.
                </p>
              </>
            }
          />

          {/* f) Rendimientos crecientes → CMe < CMg? */}
          <VFCard
            id="f"
            statement="Si una empresa produce con rendimientos crecientes a escala, entonces CMe < CMg."
            answer="FALSO"
            explanation={
              <>
                <p className="font-semibold text-rose-800 dark:text-rose-200">
                  ¿Por qué es falso? Es exactamente al revés.
                </p>
                <p className="text-muted-foreground">
                  Con rendimientos crecientes a escala, producir más es cada vez{" "}
                  <strong>más eficiente</strong>. Eso significa que el CMe es
                  decreciente, lo que implica que{" "}
                  <InlineMath math="CMg < CMe" />, no al revés.
                </p>
                <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-2">
                  <CardContent className="p-2 text-sm">
                    <p className="text-rose-800 dark:text-rose-200">
                      <strong>Cuidado con esta trampa:</strong> La afirmación
                      invierte la desigualdad. Lo correcto es:
                    </p>
                    <ul className="list-disc pl-4 text-rose-700 dark:text-rose-300 mt-1">
                      <li>
                        Rendimientos crecientes:{" "}
                        <InlineMath math="CMg < CMe" /> (CMe decrece)
                      </li>
                      <li>
                        Rendimientos decrecientes:{" "}
                        <InlineMath math="CMg > CMe" /> (CMe crece)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </>
            }
          />
        </div>
      </StepCard>

      {/* ============ PASO 3: Resumen visual ============ */}
      <StepCard
        stepNumber={3}
        title="Resumen: orden de los mínimos"
        variant="result"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Orden de los mínimos en curvas con forma de U
            </p>
            <FormulaDisplay math="x_{min\,CMg} \;<\; x_{min\,CVMe} \;<\; x_{min\,CMe}" />
            <p className="text-muted-foreground">
              El CMg alcanza su mínimo primero, luego el CVMe, y por último el
              CMe. El CMg &laquo;corta&raquo; a cada curva de medios en su
              mínimo respectivo.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
          <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-bold text-rose-800 dark:text-rose-200">FALSO</p>
              <p className="text-muted-foreground">a, d, f</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-bold text-emerald-800 dark:text-emerald-200">VERDADERO</p>
              <p className="text-muted-foreground">b, c, e</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-3 text-sm text-center">
              <p className="font-bold text-amber-800 dark:text-amber-200">Patrón</p>
              <p className="text-muted-foreground">Alternado: F V V F V F</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Error más común en examen
            </p>
            <p className="text-muted-foreground">
              Confundir la dirección de la relación. Recuerda: &laquo;CMg
              creciente&raquo; NO implica &laquo;CVMe creciente&raquo; (puede
              estar debajo de la media). Pero &laquo;CMg decreciente&raquo; SI
              implica &laquo;CMe y CVMe decrecientes&raquo; (porque aún no ha
              llegado a ningún mínimo).
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el Tema 3 */}
      <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-emerald-800 dark:text-emerald-200">
            Conexión con el Tema 3
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Estas relaciones entre CMg, CVMe y CMe son la base para entender la{" "}
            <strong>curva de oferta</strong> en el{" "}
            <Link href="/tema-3" className="text-emerald-600 dark:text-emerald-400 underline">Tema 3</Link>.
            La oferta de la empresa es el tramo creciente del CMg por encima del mínimo CVMe.
            ¡Exactamente lo que acabas de practicar aquí!
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
