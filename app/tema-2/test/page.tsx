"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestQuestion } from "@/components/stats/test-question";
import { InlineMath, FormulaDisplay } from "@/components/stats/formula-display";
import Link from "next/link";
import { ArrowLeft, ClipboardCheck } from "lucide-react";

export default function TestTema2() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20">
          <ClipboardCheck className="h-6 w-6 text-amber-500" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            Test: Tema 2 - La Funcion de Costes
          </h1>
          <p className="text-sm text-muted-foreground">
            8 preguntas de autoevaluacion
          </p>
        </div>
      </div>

      <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
        <CardContent className="p-3 sm:p-4 text-sm text-amber-800 dark:text-amber-200">
          Selecciona una respuesta y pulsa &laquo;Comprobar&raquo;. Si fallas,
          revisa la explicacion antes de continuar.
        </CardContent>
      </Card>

      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de hacer el test
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este test cubre <strong>funciones de coste</strong> (CT, CMe, CMg, CVMe), la <strong>relacion entre CP y LP</strong>, la <strong>envolvente</strong> y los <strong>rendimientos a escala y costes</strong>. Si no dominas estos conceptos, repasa los ejercicios primero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-2/ejercicio-1"><Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-300 cursor-pointer">Ej.1 Funciones de coste</Badge></Link>
            <Link href="/tema-2/ejercicio-2"><Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-300 cursor-pointer">Ej.2 Minimo CMe LP</Badge></Link>
            <Link href="/tema-2/ejercicio-3"><Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-300 cursor-pointer">Ej.3 V/F costes</Badge></Link>
            <Link href="/toolkit/derivadas"><Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">Kit: Derivadas</Badge></Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {/* P1: CMg corta al CMe en su mínimo */}
        <TestQuestion
          number={1}
          question={
            <span>
              ¿Que relacion existe entre el CMg y el CMe a corto plazo?
            </span>
          }
          options={[
            { label: "a", text: "El CMe corta al CMg en su minimo" },
            { label: "b", text: "El CMg corta al CMe en su minimo" },
            { label: "c", text: "Si el CMg es creciente, el CMe es decreciente" },
            { label: "d", text: "Si el CMg es menor al CMe, el CMe es creciente" },
          ]}
          correctAnswer="b"
          explanation={
            <div className="space-y-2">
              <p>
                Es como tus notas del curso: si tu ultima nota (la marginal) es mas alta que tu media, la media sube; si es mas baja, la media baja. El punto donde la nueva nota coincide exactamente con la media es donde la media deja de bajar y empieza a subir, es decir, su <strong>minimo</strong>.
              </p>
              <p>
                Matematicamente: el <strong>CMg corta al CMe en su minimo</strong>. Cuando <InlineMath math="CMg < CMe" />, el CMe esta bajando; cuando <InlineMath math="CMg > CMe" />, el CMe sube. En el punto de corte, el CMe esta en su valor mas bajo.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: invierte la relacion. Es el CMg quien corta al CMe, no al reves. El CMg &laquo;arrastra&raquo; al CMe, no viceversa.</li>
                <li><strong>b)</strong> Correcta: el CMg corta al CMe en su minimo, por la logica marginal-media explicada arriba.</li>
                <li><strong>c)</strong> Incorrecta: que el CMg crezca no implica que el CMe baje. Si CMg crece pero sigue por debajo del CMe, el CMe aun baja.</li>
                <li><strong>d)</strong> Incorrecta: si CMg &lt; CMe, el CMe esta bajando, no subiendo.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-1" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 1</Link> donde se calculan CMe y CMg para varias funciones de coste.
              </p>
            </div>
          }
        />

        {/* P2: La senda de expansión contiene la misma info que CT */}
        <TestQuestion
          number={2}
          question={
            <span>
              ¿Cual de las siguientes afirmaciones respecto a la senda de
              expansion es correcta?
            </span>
          }
          options={[
            {
              label: "a",
              text: "Contiene la misma informacion que la curva de coste marginal",
            },
            {
              label: "b",
              text: "Contiene la misma informacion que la curva de coste medio",
            },
            {
              label: "c",
              text: "Contiene la misma informacion que la curva de coste fijo",
            },
            {
              label: "d",
              text: "Contiene la misma informacion que la curva de coste total",
            },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina que mapeas en un GPS todas las rutas mas baratas para llegar a cada destino (cada nivel de produccion). Ese mapa de &laquo;rutas optimas&raquo; es la <strong>senda de expansion</strong>. De el puedes deducir el coste total de cada viaje, porque sabes exactamente cuanto L y K usas en cada punto.
              </p>
              <p>
                Formalmente, la senda de expansion une las combinaciones optimas <InlineMath math="(L^*, K^*)" /> para cada nivel de produccion. A partir de ella se obtiene directamente la funcion de costes totales a LP: <InlineMath math="C^L(x) = wL^*(x) + rK^*(x)" />. Conociendo una puedes deducir la otra: son dos caras de la misma moneda.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: el coste marginal es la derivada del CT, pierde informacion sobre el nivel absoluto de costes (no puedes reconstruir CT solo con CMg sin conocer la constante).</li>
                <li><strong>b)</strong> Incorrecta: el CMe = CT/x tampoco contiene toda la informacion del CT, ya que divide por x y pierde la escala.</li>
                <li><strong>c)</strong> Incorrecta: el coste fijo es una constante, no varía con la produccion, asi que no contiene informacion variable.</li>
                <li><strong>d)</strong> Correcta: la senda de expansion y la curva de CT son equivalentes en informacion.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-2" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 2</Link> donde se deriva CT a partir de la senda de expansion.
              </p>
            </div>
          }
        />

        {/* P3: Rendimientos crecientes → CMe converge a CMg */}
        <TestQuestion
          number={3}
          question={
            <span>
              Con rendimientos crecientes a escala, tenemos que:
            </span>
          }
          options={[
            {
              label: "a",
              text: "El CMe converge al CMg cuando la produccion tiende a infinito",
            },
            {
              label: "b",
              text: "El CMg es igual al CMe siempre",
            },
            {
              label: "c",
              text: "El CMg es mayor que el CMe siempre",
            },
            {
              label: "d",
              text: "El CMg converge a un valor constante mayor que el CMe",
            },
          ]}
          correctAnswer="a"
          explanation={
            <div className="space-y-2">
              <p>
                Cuando produces mas y se te da cada vez mejor (rendimientos crecientes), cada unidad extra cuesta menos que la anterior. El coste medio va bajando y se acerca al marginal, como un corredor que va cada vez mas rapido: su velocidad instantanea (CMg) siempre esta por debajo de su velocidad media (CMe), pero la media se va acercando.
              </p>
              <p>
                Formalmente: con rendimientos crecientes, <InlineMath math="CMg < CMe" /> para todo x, y ambos son decrecientes. A medida que x crece, la brecha se reduce y el <strong>CMe converge al CMg</strong>.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Correcta: el CMe converge al CMg cuando la produccion tiende a infinito, porque la brecha se reduce progresivamente.</li>
                <li><strong>b)</strong> Incorrecta: CMg = CMe solo ocurriria con rendimientos constantes. Con rendimientos crecientes, CMg &lt; CMe siempre.</li>
                <li><strong>c)</strong> Incorrecta: CMg &gt; CMe seria el caso de rendimientos decrecientes, justo lo contrario.</li>
                <li><strong>d)</strong> Incorrecta: con rendimientos crecientes, CMg sigue bajando; no converge a un valor constante por encima del CMe.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-1" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 1</Link> donde se analizan CMe y CMg para distintas funciones de coste.
              </p>
            </div>
          }
        />

        {/* P4: CMe CP ≥ CMe LP siempre */}
        <TestQuestion
          number={4}
          question={
            <span>
              ¿Cual de las siguientes afirmaciones es cierta respecto a la
              relacion entre los costes a corto y largo plazo?
            </span>
          }
          options={[
            {
              label: "a",
              text: "El CMg a LP es la envolvente del CMg a CP",
            },
            {
              label: "b",
              text: "El CT a LP puede ser mayor o igual al CT a CP",
            },
            {
              label: "c",
              text: "El CMe a CP siempre es mayor o igual al CMe a LP",
            },
            {
              label: "d",
              text: "No existe ninguna relacion ya que a LP la empresa tiene una libertad que a CP no existe",
            },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                A largo plazo puedes elegir el tamano de fabrica optimo para cada nivel de produccion; a corto plazo estas atrapado con la fabrica que tienes. Mas flexibilidad siempre da un resultado igual o mejor, nunca peor. Es como comparar comprar ropa a medida (LP) vs usar la talla que ya tienes (CP): la ropa a medida siempre te queda igual o mejor.
              </p>
              <p>
                La curva de <strong>CMe a LP es la envolvente inferior</strong> de todas las curvas de CMe a CP. Esto significa que <InlineMath math="CMeLP \\leq CMeCP" /> para todo x. A LP la empresa elige K optimamente, asi que nunca le cuesta mas que a CP.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: la envolvente es del CMe, no del CMg. El CMg a LP no es envolvente de los CMg a CP.</li>
                <li><strong>b)</strong> Incorrecta: invierte la desigualdad. El CT a LP es menor o igual al CT a CP, no mayor.</li>
                <li><strong>c)</strong> Correcta: <InlineMath math="CMeCP \\geq CMeLP" /> siempre, por la propiedad de envolvente.</li>
                <li><strong>d)</strong> Incorrecta: claro que existe relacion. El LP es la version &laquo;optimizada&raquo; del CP.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-2" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 2</Link> donde se comparan costes a CP y LP.
              </p>
            </div>
          }
        />

        {/* P5: Rendimientos decrecientes → CMg > CMe */}
        <TestQuestion
          number={5}
          question={
            <span>
              Una empresa presenta rendimientos decrecientes a escala para todos
              los niveles de produccion si:
            </span>
          }
          options={[
            {
              label: "a",
              text: "Su funcion de costes totales es C(x) = x³ - 2x² + 4x",
            },
            {
              label: "b",
              text: "Su funcion de produccion es x = K²L",
            },
            {
              label: "c",
              text: "Presenta costes medios decrecientes para todos los niveles de produccion",
            },
            {
              label: "d",
              text: "Sus costes marginales superan a los costes medios para todos los niveles de produccion",
            },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Si cada unidad extra te cuesta mas que el promedio anterior, el promedio sube. Es como una cena con amigos: si cada persona nueva que se une pide un plato mas caro que la cuenta media hasta ese momento, la cuenta media por persona sube. Eso es exactamente lo que pasa con rendimientos decrecientes: <InlineMath math="CMg > CMe" /> para todo x, y el CMe es siempre creciente.
              </p>
              <p>
                Rendimientos decrecientes significan que duplicar los inputs produce menos del doble de output. Producir mas se vuelve cada vez mas caro por unidad.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: <InlineMath math="C(x) = x^3 - 2x^2 + 4x" /> da <InlineMath math="CMe = x^2 - 2x + 4" />, que primero decrece (hasta x=1) y luego crece. No son rendimientos decrecientes &laquo;para todos los niveles&raquo;.</li>
                <li><strong>b)</strong> Incorrecta: <InlineMath math="x = K^2L" /> tiene grado 2+1 = 3 &gt; 1, son rendimientos crecientes, no decrecientes.</li>
                <li><strong>c)</strong> Incorrecta: costes medios decrecientes implican rendimientos crecientes, justo lo contrario.</li>
                <li><strong>d)</strong> Correcta: <InlineMath math="CMg > CMe" /> para todo x es la definicion de que el CMe crece siempre, lo que equivale a rendimientos decrecientes.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-1" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 1</Link> donde se analizan las formas de CMe y CMg.
              </p>
            </div>
          }
        />

        {/* P6: Y = KL → ¿qué es FALSO? */}
        <TestQuestion
          number={6}
          question={
            <span>
              Dada una tecnologia de produccion{" "}
              <InlineMath math="Y = KL" />, entonces es{" "}
              <strong>falso</strong> que:
            </span>
          }
          options={[
            {
              label: "a",
              text: "La senda de expansion de la produccion es una linea recta",
            },
            {
              label: "b",
              text: "Los costes medios a LP son decrecientes para todo nivel de produccion",
            },
            {
              label: "c",
              text: "El CMg a LP es superior al CMe a LP para todo nivel de produccion",
            },
            {
              label: "d",
              text: "La funcion de costes a CP es una linea recta",
            },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Primero, determinemos el tipo de rendimientos. Con <InlineMath math="Y = KL" />, si multiplicas ambos inputs por t: <InlineMath math="(tK)(tL) = t^2 KL = t^2 Y" />. El grado de homogeneidad es 1+1 = 2 &gt; 1, asi que hay <strong>rendimientos crecientes a escala</strong>. Con rendimientos crecientes, el CMe LP es decreciente y <InlineMath math="CMg < CMe" />.
              </p>
              <p>
                La opcion (c) afirma que CMg &gt; CMe, que es justo lo contrario. Por eso es <strong>falsa</strong>.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Verdadera: con Cobb-Douglas simetrica (<InlineMath math="\alpha = \beta = 1" />), si w = r la senda de expansion es <InlineMath math="K = L" />, una linea recta. En general, <InlineMath math="K = (w/r)L" />, tambien recta.</li>
                <li><strong>b)</strong> Verdadera: rendimientos crecientes (grado 2 &gt; 1) implican CMe LP decreciente para todo x. Producir mas siempre abarata el coste por unidad.</li>
                <li><strong>c)</strong> Falsa (la correcta): dice CMg &gt; CMe LP, pero con rendimientos crecientes es al reves: CMg &lt; CMe. Cada unidad extra cuesta menos que el promedio.</li>
                <li><strong>d)</strong> Verdadera: a CP con K fijo, <InlineMath math="L = Y/\\bar{K}" />, asi que <InlineMath math="CT = w(Y/\\bar{K}) + r\\bar{K}" />, que es lineal en Y.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-3" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 3</Link> donde se analizan proposiciones V/F sobre costes.
              </p>
            </div>
          }
        />

        {/* P7: La senda de expansión cumple RMST = w/r */}
        <TestQuestion
          number={7}
          question={
            <span>
              Una empresa minimiza sus costes a largo plazo para cualquier
              nivel de produccion si:
            </span>
          }
          options={[
            {
              label: "a",
              text: "Produce cualquier cantidad sobre su funcion de produccion a CP",
            },
            {
              label: "b",
              text: "Se situa sobre cualquier punto de cualquier isocuanta correspondiente a su funcion de produccion a LP",
            },
            {
              label: "c",
              text: "Se situa sobre la senda de expansion",
            },
            {
              label: "d",
              text: "Ninguna de las anteriores es correcta",
            },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                La empresa busca el punto donde el &laquo;valor&raquo; de sustituir un factor por otro se iguala a su &laquo;precio relativo&raquo;. Es como hacer la compra: si las manzanas y las naranjas te gustan igual pero las manzanas cuestan el doble, compras mas naranjas. La senda de expansion es el &laquo;camino optimo de compra&raquo; para cada presupuesto, donde la RMST (cuanto K puedes sustituir por L sin perder produccion) se iguala al ratio de precios <InlineMath math="w/r" />.
              </p>
              <p>
                La <strong>senda de expansion</strong> es el lugar geometrico de todos los puntos donde la empresa minimiza costes para cada nivel de produccion. En esos puntos, la isocuanta es tangente a la isocoste: <InlineMath math="RMST = \\frac{w}{r}" />.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: producir sobre la funcion de produccion a CP solo garantiza que no desperdicias inputs, pero no que uses la combinacion mas barata. Estas atado a un K fijo.</li>
                <li><strong>b)</strong> Incorrecta: hay infinitos puntos en cada isocuanta, pero solo uno minimiza costes (el de tangencia con la isocoste). Los demas puntos son factibles pero mas caros.</li>
                <li><strong>c)</strong> Correcta: la senda de expansion recoge exactamente todos esos puntos de tangencia para cada nivel de produccion.</li>
                <li><strong>d)</strong> Incorrecta: la respuesta (c) es correcta, asi que &laquo;ninguna de las anteriores&raquo; no aplica.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-2/ejercicio-2" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 2</Link> donde se calcula la senda de expansion y las demandas condicionadas.
              </p>
            </div>
          }
        />

        {/* P8: CMg > CTMe → CVMe y CTMe crecientes */}
        <TestQuestion
          number={8}
          question={
            <span>
              Una empresa tiene curvas de coste a corto plazo en forma de U. Si
              denotamos con <InlineMath math="\hat{y}" /> el volumen de
              produccion en que se situa la empresa, es cierto que:
            </span>
          }
          options={[
            {
              label: "a",
              text: "Si CMg > CVMe, es seguro que los CTMe estan en su tramo creciente",
            },
            {
              label: "b",
              text: "Si CMg < CTMe, es seguro que los CVMe estan en su tramo decreciente",
            },
            {
              label: "c",
              text: "Si CVMe < CMg < CTMe, es seguro que los CVMe y CTMe estan en sus tramos crecientes",
            },
            {
              label: "d",
              text: "Si CMg > CTMe, es seguro que los CVMe y los CTMe estan en sus tramos crecientes",
            },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina tres curvas en U: CVMe (la mas baja), CTMe (un poco mas arriba, porque incluye costes fijos) y CMg (que las cruza a ambas). El CMg actua como un &laquo;timon&raquo;: si esta por encima de una curva de medios, esa curva sube; si esta por debajo, baja.
              </p>
              <p>
                Las tres regiones clave son: (1) CMg por debajo de ambas: las dos medias bajan. (2) CMg entre CVMe y CTMe: CVMe ya sube pero CTMe sigue bajando. (3) CMg por encima de ambas: las dos medias suben.
              </p>
              <p>
                Si <InlineMath math="CMg > CTMe" />, estamos en la region (3). Como siempre se cumple <InlineMath math="CTMe > CVMe" /> (porque CTMe = CVMe + CFMe), entonces <InlineMath math="CMg > CTMe > CVMe" />, y <strong>ambas curvas de medios son crecientes</strong>.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: CMg &gt; CVMe solo garantiza que CVMe sube, pero no dice nada de CTMe. El CMg podria estar entre CVMe y CTMe (region 2), donde CTMe aun baja.</li>
                <li><strong>b)</strong> Incorrecta: CMg &lt; CTMe podria significar region (1) o (2). En la region (2), CMg &gt; CVMe y CVMe crece. No es seguro que CVMe este en su tramo decreciente.</li>
                <li><strong>c)</strong> Incorrecta: CVMe &lt; CMg &lt; CTMe es la region (2). CVMe sube, pero CTMe baja (porque CMg &lt; CTMe). No es cierto que &laquo;ambos estan en sus tramos crecientes&raquo;.</li>
                <li><strong>d)</strong> Correcta: CMg &gt; CTMe &gt; CVMe, ambas medias crecen. Es la unica opcion donde podemos estar seguros de que las dos suben.</li>
              </ul>
              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
                <CardContent className="p-2 text-sm">
                  <p className="text-amber-800 dark:text-amber-200">
                    <strong>Regla de oro:</strong> Una curva de medios crece cuando el CMg esta por encima de ella, y decrece cuando esta por debajo. Siempre hay 3 regiones: CMg debajo de ambas, CMg entre ambas, CMg encima de ambas.
                  </p>
                </CardContent>
              </Card>
            </div>
          }
        />
      </div>

      <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-emerald-800 dark:text-emerald-200">
            Como te fue?
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Si acertaste 6-8 preguntas, dominas los costes y estas list@ para el <Link href="/tema-3" className="text-emerald-600 dark:text-emerald-400 underline">Tema 3: Oferta Competitiva</Link>. Ahora que sabes cuanto cuesta producir, aprenderas a decidir cuanto vender para maximizar beneficios.
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Si fallaste varias, repasa los <Link href="/tema-2" className="text-emerald-600 dark:text-emerald-400 underline">ejercicios del Tema 2</Link>, especialmente el <Link href="/tema-2/ejercicio-1" className="text-emerald-600 dark:text-emerald-400 underline">Ejercicio 1</Link> para las funciones de coste.
          </p>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t">
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="/tema-2/ejercicio-3">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ejercicio 3
          </Link>
        </Button>
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="/tema-2">
            Volver a Tema 2
          </Link>
        </Button>
      </div>
    </div>
  );
}
