"use client";

import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { TestQuestion } from "@/components/stats/test-question";
import { InlineMath } from "@/components/stats/formula-display";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TestTema3() {
  return (
    <ExerciseLayout
      tema={3}
      exerciseNumber="Test"
      title="Autoevaluaci&oacute;n: La Oferta Competitiva"
      difficulty="Medio"
      category="Autoevaluaci&oacute;n"
      statement={
        <p>
          Responde las siguientes preguntas sobre oferta competitiva, condiciones
          de cierre, excedente del productor e impuestos.
        </p>
      }
      prevUrl="/tema-3/ejercicio-4"
      nextUrl="/tema-3"
    >
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 mb-4">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de hacer el test
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este test cubre la <strong>oferta competitiva</strong>: curva de oferta CP y LP,
            condici&oacute;n de cierre, punto de nivelaci&oacute;n, excedente del productor e impuestos.
            Si estos conceptos no te suenan, repasa los ejercicios primero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-3/ejercicio-1"><Badge className="bg-violet-200 dark:bg-violet-800/40 text-violet-800 dark:text-violet-200 hover:bg-violet-300 cursor-pointer">Ej.1 V/F empresa</Badge></Link>
            <Link href="/tema-3/ejercicio-2"><Badge className="bg-violet-200 dark:bg-violet-800/40 text-violet-800 dark:text-violet-200 hover:bg-violet-300 cursor-pointer">Ej.2 Oferta CP</Badge></Link>
            <Link href="/tema-3/ejercicio-3"><Badge className="bg-violet-200 dark:bg-violet-800/40 text-violet-800 dark:text-violet-200 hover:bg-violet-300 cursor-pointer">Ej.3 Impuestos</Badge></Link>
            <Link href="/tema-3/ejercicio-4"><Badge className="bg-violet-200 dark:bg-violet-800/40 text-violet-800 dark:text-violet-200 hover:bg-violet-300 cursor-pointer">Ej.4 Excedente</Badge></Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {/* P1 */}
        <TestQuestion
          number={1}
          question="La curva de oferta a corto plazo de una empresa competitiva es:"
          options={[
            { label: "a", text: "Todo el tramo creciente del CMg." },
            { label: "b", text: "El CMg por encima del mínimo del CVMe." },
            { label: "c", text: "El CMg por encima del mínimo del CMe." },
            { label: "d", text: "El CMe en su tramo creciente." },
          ]}
          correctAnswer="b"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina que tienes un puesto de limonada. Solo te compensa abrir si el
                precio de cada vaso al menos cubre lo que gastas en limones y az&uacute;car
                (costes variables). El alquiler del puesto (coste fijo) lo pagas igual,
                abras o no. As&iacute; que la decisi&oacute;n de abrir depende solo de cubrir los
                costes variables.
              </p>
              <p>
                T&eacute;cnicamente, la curva de oferta a corto plazo es el tramo del{" "}
                <InlineMath math="CMg" /> que est&aacute; por encima de{" "}
                <InlineMath math="\min CVMe" /> (el punto de cierre). Por debajo de ese
                precio, la empresa prefiere cerrar y perder solo los CF.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: no <em>todo</em> el tramo creciente del CMg forma la oferta. El tramo donde <InlineMath math="CMg < \min CVMe" /> no cuenta porque la empresa no producir&iacute;a a esos precios.</li>
                <li><strong>b)</strong> Correcta: la oferta CP es exactamente el CMg por encima del m&iacute;nimo del CVMe.</li>
                <li><strong>c)</strong> Incorrecta: esto ser&iacute;a la oferta a <em>largo plazo</em>, donde la empresa necesita cubrir <em>todos</em> los costes (incluidos los fijos). En CP los fijos ya est&aacute;n pagados.</li>
                <li><strong>d)</strong> Incorrecta: el CMe no es la curva de oferta; la oferta se deriva del CMg (condici&oacute;n <InlineMath math="p = CMg" />).</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-1" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 1 (V/F empresa)</Link> y el <Link href="/tema-3/ejercicio-2" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 2 (Oferta CP)</Link>.
              </p>
            </div>
          }
        />

        {/* P2 */}
        <TestQuestion
          number={2}
          question={
            <>
              Si el CVMe tiene forma de U, en el equilibrio de corto plazo
              la empresa competitiva puede estar:
            </>
          }
          options={[
            { label: "a", text: "Solo en el tramo creciente de CMe." },
            { label: "b", text: "Solo en el mínimo de CMe." },
            { label: "c", text: "En el tramo decreciente de CMe (con pérdidas)." },
            { label: "d", text: "Solo donde CMg es decreciente." },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Es como un restaurante que pierde dinero pero sigue abierto porque al
                menos paga los ingredientes y los sueldos. Cerrar ser&iacute;a peor porque
                seguir&iacute;a pagando el alquiler del local sin ingresar nada. Mientras el
                ingreso cubra los costes del d&iacute;a a d&iacute;a, conviene seguir abierto.
              </p>
              <p>
                Hay 3 zonas en CP seg&uacute;n el precio:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><InlineMath math="p \geq \min CMe" />: la empresa tiene beneficio positivo (o cero en el l&iacute;mite). Est&aacute; en el tramo creciente del CMe.</li>
                <li><InlineMath math="\min CVMe \leq p < \min CMe" />: la empresa produce con <strong>p&eacute;rdidas</strong>, pero menores que si cerrara. Aqu&iacute; el CMe puede estar en su tramo decreciente.</li>
                <li><InlineMath math="p < \min CVMe" />: la empresa <strong>cierra</strong>. No cubre ni los costes variables.</li>
              </ul>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: no tiene que estar en el tramo creciente de CMe; puede estar en el decreciente (zona de p&eacute;rdidas).</li>
                <li><strong>b)</strong> Incorrecta: el m&iacute;nimo de CMe es solo un punto especial (nivelaci&oacute;n), no el &uacute;nico equilibrio posible.</li>
                <li><strong>c)</strong> Correcta: con p&eacute;rdidas, el CMe est&aacute; por encima de p, y puede estar en su tramo decreciente.</li>
                <li><strong>d)</strong> Incorrecta: en equilibrio, CMg debe ser <em>creciente</em> (condici&oacute;n de segundo orden), nunca decreciente.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-1" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 1 (V/F empresa)</Link>.
              </p>
            </div>
          }
        />

        {/* P3 */}
        <TestQuestion
          number={3}
          question="En el equilibrio de corto plazo, una empresa competitiva cumple que:"
          options={[
            { label: "a", text: "p = CMg y CMg puede ser creciente o decreciente." },
            { label: "b", text: "p = CMe siempre." },
            { label: "c", text: "p = CMg y CMg es creciente." },
            { label: "d", text: "p = CMg y CMe es creciente." },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Piensa en subir una monta&ntilde;a: buscas el punto donde el esfuerzo
                (coste marginal) se iguala con la recompensa (precio). Pero ojo: ese
                punto tiene que estar en una &quot;cuesta arriba&quot; del coste (CMg
                creciente). Si estuvieras en una &quot;cuesta abajo&quot; (CMg
                decreciente), cada unidad extra costar&iacute;a <em>menos</em> y te
                convendr&iacute;a seguir produciendo, as&iacute; que no ser&iacute;a un m&aacute;ximo de beneficio.
              </p>
              <p>
                La condici&oacute;n de primer orden (CPO) dice{" "}
                <InlineMath math="p = CMg" />. Pero hay infinitos puntos donde se
                cruzan. La condici&oacute;n de segundo orden (CSO) filtra: solo el cruce
                donde <InlineMath math="CMg" /> es <strong>creciente</strong> es un
                m&aacute;ximo de beneficio. El cruce con CMg decreciente ser&iacute;a un m&iacute;nimo.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: no vale cualquier cruce; CMg <em>debe</em> ser creciente (CSO).</li>
                <li><strong>b)</strong> Incorrecta: <InlineMath math="p = CMe" /> es el punto de nivelaci&oacute;n, no la condici&oacute;n general de equilibrio.</li>
                <li><strong>c)</strong> Correcta: <InlineMath math="p = CMg" /> (CPO) con CMg creciente (CSO). Ambas condiciones juntas.</li>
                <li><strong>d)</strong> Incorrecta: lo que importa es que CMg sea creciente, no CMe. El CMe puede ser creciente o decreciente en el equilibrio.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-2" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 2 (Oferta CP)</Link>.
              </p>
            </div>
          }
        />

        {/* P4 */}
        <TestQuestion
          number={4}
          question={
            <>
              Si <InlineMath math="p = 6" /> y <InlineMath math="CMe = 8" />,
              la empresa:
            </>
          }
          options={[
            { label: "a", text: "Tiene beneficio positivo." },
            { label: "b", text: "Cierra inmediatamente." },
            { label: "c", text: "Está en el punto de nivelación." },
            { label: "d", text: "Puede producir con pérdidas si p > CVMe." },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Sabemos que <InlineMath math="p = 6 < CMe = 8" />, as&iacute; que la empresa
                pierde dinero (ingresa 6 por unidad pero le cuesta 8). Pero, &iquest;debe
                cerrar? No necesariamente. Depende de d&oacute;nde est&eacute; el CVMe.
              </p>
              <p>
                Las 3 zonas con n&uacute;meros concretos:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Si <InlineMath math="CVMe = 5" /> (por ejemplo): como <InlineMath math="p = 6 > 5 = CVMe" />, la empresa produce. Pierde, pero menos que cerrando.</li>
                <li>Si <InlineMath math="CVMe = 7" />: como <InlineMath math="p = 6 < 7 = CVMe" />, la empresa cierra. No cubre ni los costes variables.</li>
                <li>La clave: sin saber el CVMe exacto, solo podemos decir que <em>si</em> p &gt; CVMe, conviene producir con p&eacute;rdidas.</li>
              </ul>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: <InlineMath math="p < CMe" />, as&iacute; que hay p&eacute;rdidas, no beneficio positivo.</li>
                <li><strong>b)</strong> Incorrecta: no cierra &quot;inmediatamente&quot;. Solo cerrar&iacute;a si <InlineMath math="p < \min CVMe" />. No nos dan ese dato.</li>
                <li><strong>c)</strong> Incorrecta: nivelaci&oacute;n es <InlineMath math="p = \min CMe" />, pero aqu&iacute; <InlineMath math="p < CMe" />.</li>
                <li><strong>d)</strong> Correcta: si <InlineMath math="p > CVMe" />, la empresa produce aunque pierda, porque cubre los costes variables y parte de los fijos.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-1" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 1 (V/F empresa)</Link>.
              </p>
            </div>
          }
        />

        {/* P5 */}
        <TestQuestion
          number={5}
          question={
            <>
              Si <InlineMath math="p > CVMe" />, la empresa:
            </>
          }
          options={[
            { label: "a", text: "Siempre tiene beneficio positivo." },
            { label: "b", text: "Siempre está en el punto de nivelación." },
            { label: "c", text: "Cubre solo los costes variables, nunca los fijos." },
            { label: "d", text: "Podría cubrir todos los costes si p ≥ CMe." },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Piensa en aprobar una carrera: aprobar matem&aacute;ticas es <em>necesario</em>{" "}
                para sacarte el t&iacute;tulo, pero no <em>suficiente</em> (necesitas aprobar
                todas las dem&aacute;s tambi&eacute;n). Del mismo modo, cubrir los costes variables es
                necesario para producir, pero no basta para tener beneficio.
              </p>
              <p>
                Si <InlineMath math="p > CVMe" />, la empresa cubre los costes variables.
                Pero los costes totales incluyen tambi&eacute;n los fijos:{" "}
                <InlineMath math="CMe = CVMe + CFMe" />. Solo si{" "}
                <InlineMath math="p \geq CMe" /> se cubren todos y hay beneficio{" "}
                <InlineMath math="\pi \geq 0" />.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: <InlineMath math="p > CVMe" /> no garantiza beneficio positivo. Si <InlineMath math="CVMe < p < CMe" />, produce pero con p&eacute;rdidas.</li>
                <li><strong>b)</strong> Incorrecta: nivelaci&oacute;n requiere <InlineMath math="p = \min CMe" />, que es un caso especial, no la situaci&oacute;n general.</li>
                <li><strong>c)</strong> Incorrecta: dice &quot;nunca los fijos&quot;, pero si <InlineMath math="p \geq CMe" />, s&iacute; cubre fijos y variables. Depende de cu&aacute;nto supere.</li>
                <li><strong>d)</strong> Correcta: <InlineMath math="p > CVMe" /> es condici&oacute;n necesaria para producir; para cubrir todo se necesita <InlineMath math="p \geq CMe" />. <em>Podr&iacute;a</em> cubrirlos, no los cubre siempre.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-1" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 1 (V/F empresa)</Link>.
              </p>
            </div>
          }
        />

        {/* P6 */}
        <TestQuestion
          number={6}
          question={
            <>
              Cuando <InlineMath math="p = \min CMe" />, la empresa:
            </>
          }
          options={[
            { label: "a", text: "Tiene beneficio cero (punto de nivelación)." },
            { label: "b", text: "Tiene beneficio positivo." },
            { label: "c", text: "Cierra porque no gana nada." },
            { label: "d", text: "Tiene excedente del productor igual a cero." },
          ]}
          correctAnswer="a"
          explanation={
            <div className="space-y-2">
              <p>
                &quot;Beneficio cero&quot; suena fatal, pero en econom&iacute;a significa que el
                empresario gana exactamente lo que ganar&iacute;a en su mejor alternativa (el
                coste de oportunidad). Es como un aut&oacute;nomo que gana lo mismo que si
                trabajara por cuenta ajena: no pierde nada, pero tampoco gana &quot;extra&quot;.
                Por eso no cierra.
              </p>
              <p>
                Cuando <InlineMath math="p = \min CMe" />, el ingreso por unidad iguala
                exactamente al coste medio total. El beneficio econ&oacute;mico es cero:{" "}
                <InlineMath math="\pi = (p - CMe) \cdot x = 0" />. Este es el{" "}
                <strong>punto de nivelaci&oacute;n</strong>. &iquest;Y el excedente del productor?
                No es cero:{" "}
                <InlineMath math="EP = IT - CV = \pi + CF" />. Como{" "}
                <InlineMath math="\pi = 0" />, resulta{" "}
                <InlineMath math="EP = CF" />.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Correcta: beneficio cero = punto de nivelaci&oacute;n. La empresa cubre todos los costes, incluido el coste de oportunidad.</li>
                <li><strong>b)</strong> Incorrecta: beneficio cero, no positivo. Para beneficio positivo necesitar&iacute;a <InlineMath math="p > \min CMe" />.</li>
                <li><strong>c)</strong> Incorrecta: no cierra. Beneficio cero en econom&iacute;a incluye la remuneraci&oacute;n normal del empresario. No hay raz&oacute;n para irse.</li>
                <li><strong>d)</strong> Incorrecta: el EP no es cero, sino igual a los costes fijos (<InlineMath math="EP = CF" />). Cuidado con confundir beneficio y excedente.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-4" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 4 (Excedente)</Link>.
              </p>
            </div>
          }
        />

        {/* P7 */}
        <TestQuestion
          number={7}
          question="Un impuesto unitario (por unidad producida) en competencia perfecta:"
          options={[
            { label: "a", text: "No afecta a la oferta." },
            { label: "b", text: "Solo desplaza el CMe, no el CMg." },
            { label: "c", text: "Desplaza el CMg (y el CMe) hacia arriba." },
            { label: "d", text: "Solo afecta a los costes fijos." },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina que vendes camisetas y el gobierno te cobra 2 euros por cada una
                que produces. Si antes te costaba 10 euros hacer la camiseta n&uacute;mero 50,
                ahora te cuesta 12. <em>Cada</em> camiseta sale 2 euros m&aacute;s cara. Eso
                es un impuesto unitario: sube el coste de cada unidad en la misma cantidad.
              </p>
              <p>
                Ejemplo num&eacute;rico: si <InlineMath math="CMg = 3x" /> y el impuesto es{" "}
                <InlineMath math="t = 2" />, el nuevo{" "}
                <InlineMath math="CMg' = 3x + 2" />. Toda la curva sube en 2. Lo mismo
                pasa con el CMe: <InlineMath math="CMe' = CMe + t" />. Esto es distinto
                de un impuesto de cuota fija (como una licencia anual), que solo sube el
                CMe (a&ntilde;ade costes fijos) pero <em>no</em> afecta al CMg.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: un impuesto unitario s&iacute; afecta a la oferta, desplaz&aacute;ndola hacia arriba/izquierda.</li>
                <li><strong>b)</strong> Incorrecta: no es solo el CMe. El CMg tambi&eacute;n sube en t, porque cada unidad adicional cuesta t m&aacute;s.</li>
                <li><strong>c)</strong> Correcta: desplaza CMg y CMe hacia arriba en t. La oferta (que es CMg) se mueve hacia arriba.</li>
                <li><strong>d)</strong> Incorrecta: un impuesto unitario no es un coste fijo. Son los impuestos de cuota fija los que afectan solo a CF.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-3" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 3 (Impuestos)</Link>.
              </p>
            </div>
          }
        />

        {/* P8 */}
        <TestQuestion
          number={8}
          question="Un impuesto unitario en LP con libre entrada provoca que:"
          options={[
            { label: "a", text: "El precio sube exactamente en la cuantía del impuesto." },
            { label: "b", text: "El precio sube menos que el impuesto." },
            { label: "c", text: "El precio no cambia." },
            { label: "d", text: "El precio sube más que el impuesto." },
          ]}
          correctAnswer="a"
          explanation={
            <div className="space-y-2">
              <p>
                Con libre entrada, nadie gana m&aacute;s de lo normal a largo plazo: si
                hubiera beneficio extra, entrar&iacute;an m&aacute;s empresas hasta eliminarlo. El
                precio se fija en el m&iacute;nimo del CMe (beneficio cero). Ahora, si pones
                un impuesto de t euros por unidad, el m&iacute;nimo del CMe sube exactamente
                en t. El precio sube en t. Los consumidores pagan todo el impuesto.
              </p>
              <p>
                Esto contrasta con el <strong>corto plazo</strong>, donde el n&uacute;mero de
                empresas es fijo y la subida del precio puede ser parcial (depende de
                la elasticidad de la demanda). En LP con libre entrada y costes
                constantes, la oferta del mercado es perfectamente el&aacute;stica al nivel
                de <InlineMath math="\min CMe" />, as&iacute; que cualquier subida de costes se
                traslada &iacute;ntegramente al precio.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Correcta: con libre entrada y costes constantes, el precio LP sube exactamente en <InlineMath math="t" />. Toda la carga recae sobre consumidores.</li>
                <li><strong>b)</strong> Incorrecta: esto ocurrir&iacute;a en CP (subida parcial), no en LP con libre entrada.</li>
                <li><strong>c)</strong> Incorrecta: el precio s&iacute; cambia; el impuesto encarece la producci&oacute;n y eso se traslada al precio.</li>
                <li><strong>d)</strong> Incorrecta: no sube m&aacute;s que t. Sube exactamente t porque la curva de CMe se desplaza paralelamente.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-3/ejercicio-3" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 3 (Impuestos)</Link>.
              </p>
            </div>
          }
        />
      </div>

      <Card className="bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-violet-800 dark:text-violet-200">
            Como te fue?
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Si acertaste 6-8 preguntas, dominas la oferta competitiva. Has
            completado los 3 temas fundamentales:{" "}
            <strong>producci&oacute;n</strong> (c&oacute;mo se produce),{" "}
            <strong>costes</strong> (cu&aacute;nto cuesta) y{" "}
            <strong>oferta</strong> (cu&aacute;nto vender). Estos son los pilares de
            la microeconom&iacute;a de la empresa.
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Si fallaste varias, repasa los{" "}
            <Link href="/tema-3" className="text-violet-600 dark:text-violet-400 underline">
              ejercicios del Tema 3
            </Link>
            , empezando por el{" "}
            <Link href="/tema-3/ejercicio-1" className="text-violet-600 dark:text-violet-400 underline">
              Ejercicio 1
            </Link>{" "}
            de verdadero/falso.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
