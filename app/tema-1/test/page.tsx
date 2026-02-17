"use client";

import { TestQuestion } from "@/components/stats/test-question";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InlineMath } from "@/components/stats/formula-display";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TestTema1() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
          Tema 1
        </Badge>
        <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
          Autoevaluaci&oacute;n
        </Badge>
      </div>

      <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
        Test de Autoevaluaci&oacute;n - Tema 1: La Funci&oacute;n de Producci&oacute;n
      </h1>

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-3 sm:p-4 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            Selecciona la respuesta correcta en cada pregunta y pulsa &quot;Comprobar&quot;.
            Despu&eacute;s de responder, ver&aacute;s una explicaci&oacute;n detallada.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de hacer el test
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este test cubre los conceptos de <strong>isocuantas</strong>, <strong>productividades</strong> (PMe y PMg), <strong>RMST</strong> y <strong>rendimientos a escala</strong>. Si no los dominas a&uacute;n, repasa los ejercicios primero.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-1/ejercicio-1"><Badge className="bg-blue-200 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 hover:bg-blue-300 cursor-pointer">Ej.1 Isocuantas</Badge></Link>
            <Link href="/tema-1/ejercicio-2"><Badge className="bg-blue-200 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 hover:bg-blue-300 cursor-pointer">Ej.2 Rendimientos</Badge></Link>
            <Link href="/tema-1/ejercicio-3"><Badge className="bg-blue-200 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 hover:bg-blue-300 cursor-pointer">Ej.3 Cobb-Douglas</Badge></Link>
            <Link href="/toolkit/derivadas-parciales"><Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 hover:bg-orange-300 cursor-pointer">Kit: Derivadas parciales</Badge></Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 sm:space-y-4">
        {/* ===== PREGUNTA 1 ===== */}
        <TestQuestion
          number={1}
          question="La RMST (Relaci&oacute;n Marginal de Sustituci&oacute;n T&eacute;cnica) se define como:"
          options={[
            { label: "a", text: "La razón entre las productividades medias de los factores" },
            { label: "b", text: "La derivada parcial de la función de producción respecto al trabajo" },
            { label: "c", text: "La razón entre los precios de los factores" },
            { label: "d", text: "La pendiente de la isocuanta con signo cambiado (PMg_L / PMg_K)" },
          ]}
          correctAnswer="d"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina que tienes una receta que necesita 4 huevos y 200g de harina para hacer un bizcocho.
                La RMST te dice: &laquo;si a&ntilde;ado 50g m&aacute;s de harina, &iquest;cu&aacute;ntos huevos puedo quitar
                y seguir haciendo el mismo bizcocho?&raquo;. Es decir, mide el <strong>intercambio</strong> entre
                factores manteniendo la producci&oacute;n constante.
              </p>
              <p className="font-medium">
                RMST = <InlineMath math="\frac{PMg_L}{PMg_K} = -\frac{dK}{dL}\bigg|_{x=cte}" />
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: usa productividades <em>medias</em> (PMe), pero la RMST se calcula con las <em>marginales</em> (PMg). Es un error muy com&uacute;n en ex&aacute;menes.</li>
                <li><strong>b)</strong> Incorrecta: eso es simplemente la definici&oacute;n de <InlineMath math="PMg_L = \frac{\partial f}{\partial L}" />, un solo n&uacute;mero, no una raz&oacute;n entre dos factores.</li>
                <li><strong>c)</strong> Incorrecta: la raz&oacute;n de precios <InlineMath math="w/r" /> aparece en la <em>condici&oacute;n de &oacute;ptimo</em> (RMST = w/r), pero no es la definici&oacute;n de RMST en s&iacute;.</li>
                <li><strong>d)</strong> Correcta: la RMST es exactamente el cociente de productividades marginales, que geom&eacute;tricamente es la pendiente de la isocuanta con signo cambiado.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-1/ejercicio-1" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 1: Isocuantas y Productividades</Link>.
              </p>
            </div>
          }
        />

        {/* ===== PREGUNTA 2 ===== */}
        <TestQuestion
          number={2}
          question={
            <>
              Si una empresa contrata la primera unidad de trabajo y produce 20 unidades de producto,
              el <InlineMath math="PMg_L" /> y <InlineMath math="PMe_L" /> de la primera unidad son:
            </>
          }
          options={[
            { label: "a", text: "PMg = 20, PMe = 0" },
            { label: "b", text: "PMg = 0, PMe = 20" },
            { label: "c", text: "PMg = 20, PMe = 20" },
            { label: "d", text: "No se puede determinar con esta información" },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Piensa en un equipo de f&uacute;tbol con 0 jugadores: no pueden jugar (producci&oacute;n = 0).
                Llega el primer jugador y el equipo ya puede hacer <strong>algo</strong> (producci&oacute;n = 20).
                Ese primer jugador &laquo;a&ntilde;ade&raquo; toda la producci&oacute;n (marginal = 20) y como es el &uacute;nico,
                el promedio tambi&eacute;n es 20. Por eso PMg = PMe en la primera unidad.
              </p>
              <p className="font-medium">
                <InlineMath math="PMe_L = \frac{x}{L} = \frac{20}{1} = 20" /> &nbsp;&nbsp;|&nbsp;&nbsp; <InlineMath math="PMg_L = \Delta x / \Delta L = (20-0)/(1-0) = 20" />
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: dice PMg = 20 pero PMe = 0. La PMe no puede ser 0 si hay producci&oacute;n positiva y L = 1: <InlineMath math="20/1 \neq 0" />.</li>
                <li><strong>b)</strong> Incorrecta: invierte los valores. El PMg no puede ser 0 si pasar de 0 a 1 trabajador genera 20 unidades de producto.</li>
                <li><strong>c)</strong> Correcta: ambos son 20. Regla general: en la primera unidad, PMg y PMe siempre coinciden.</li>
                <li><strong>d)</strong> Incorrecta: s&iacute; se puede determinar. Con L = 1 y x = 20 tenemos toda la informaci&oacute;n necesaria.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-1/ejercicio-1" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 1: Isocuantas y Productividades</Link> (apartado b).
              </p>
            </div>
          }
        />

        {/* ===== PREGUNTA 3 ===== */}
        <TestQuestion
          number={3}
          question={
            <>
              En el corto plazo, la relaci&oacute;n entre <InlineMath math="PMe_L" /> y <InlineMath math="PMg_L" /> es:
            </>
          }
          options={[
            { label: "a", text: "PMg siempre está por encima de PMe" },
            { label: "b", text: "PMg corta a PMe en su punto máximo" },
            { label: "c", text: "PMe y PMg nunca se cruzan" },
            { label: "d", text: "PMe siempre está por encima de PMg" },
          ]}
          correctAnswer="b"
          explanation={
            <div className="space-y-2">
              <p>
                Piensa en tus notas de la universidad. Tu &laquo;media&raquo; es la PMe y tu &laquo;&uacute;ltima nota&raquo; es la PMg.
                Si sacas un 9 y tu media es 7, la media sube. Si sacas un 5 y tu media es 7, la media baja.
                El &uacute;nico momento en que la media no cambia es cuando la &uacute;ltima nota coincide exactamente
                con la media: ese es el punto m&aacute;ximo de la PMe.
              </p>
              <p className="font-medium">
                Regla clave: <InlineMath math="PMg_L = PMe_L \Leftrightarrow PMe_L" /> est&aacute; en su m&aacute;ximo
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Cuando <InlineMath math="PMg > PMe" />: la PMe est&aacute; <strong>subiendo</strong> (el &uacute;ltimo trabajador aporta m&aacute;s que el promedio).</li>
                <li>Cuando <InlineMath math="PMg < PMe" />: la PMe est&aacute; <strong>bajando</strong> (el &uacute;ltimo trabajador aporta menos que el promedio).</li>
                <li>Cuando <InlineMath math="PMg = PMe" />: la PMe est&aacute; en su <strong>m&aacute;ximo</strong> (punto de corte).</li>
              </ul>
              <ul className="list-disc pl-4 space-y-1 mt-2">
                <li><strong>a)</strong> Incorrecta: PMg no siempre est&aacute; por encima. Al principio s&iacute;, pero despu&eacute;s del m&aacute;ximo de PMe, la PMg cae por debajo.</li>
                <li><strong>b)</strong> Correcta: es exactamente la propiedad &laquo;marginal corta a media en su m&aacute;ximo&raquo;.</li>
                <li><strong>c)</strong> Incorrecta: s&iacute; se cruzan, precisamente en el m&aacute;ximo de la PMe.</li>
                <li><strong>d)</strong> Incorrecta: al rev&eacute;s de a), tampoco es siempre cierto. La relaci&oacute;n cambia seg&uacute;n la zona.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-1/ejercicio-1" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 1</Link> (apartado b, gr&aacute;fico de productividades) y en el <Link href="/tema-1/ejercicio-4" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 4: Rendimientos y PMgL</Link>.
              </p>
            </div>
          }
        />

        {/* ===== PREGUNTA 4 ===== */}
        <TestQuestion
          number={4}
          question={
            <>
              En una Cobb-Douglas <InlineMath math="f = AL^\alpha K^\beta" />, la RMST:
            </>
          }
          options={[
            { label: "a", text: "Vale α/β y es constante" },
            { label: "b", text: "Vale (α/β)(L/K) y es creciente en L" },
            { label: "c", text: "Vale (α/β)(K/L) y es decreciente en L" },
            { label: "d", text: "Depende del parámetro tecnológico A" },
          ]}
          correctAnswer="c"
          explanation={
            <div className="space-y-2">
              <p>
                Imagina que tienes una f&aacute;brica con muchas m&aacute;quinas (K alto) y pocos trabajadores (L bajo).
                Cada trabajador nuevo es muy &uacute;til porque hay m&aacute;quinas de sobra para &eacute;l: la RMST es alta.
                Pero si contratas muchos trabajadores y quedan pocas m&aacute;quinas, a&ntilde;adir uno m&aacute;s ya no
                ahorra tanta maquinaria: la RMST baja. Por eso es <strong>decreciente en L</strong>.
              </p>
              <p className="font-medium">
                <InlineMath math="RMST = \frac{PMg_L}{PMg_K} = \frac{\alpha A L^{\alpha-1}K^\beta}{\beta A L^\alpha K^{\beta-1}} = \frac{\alpha}{\beta} \cdot \frac{K}{L}" />
              </p>
              <p>
                Observa que la <InlineMath math="A" /> se cancela en la divisi&oacute;n (aparece arriba y abajo).
                Lo que queda depende solo de <InlineMath math="\alpha, \beta" /> y del cociente <InlineMath math="K/L" />.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>a)</strong> Incorrecta: dice que la RMST vale <InlineMath math="\alpha/\beta" /> y es constante. Olvida el factor <InlineMath math="K/L" />, que var&iacute;a a lo largo de la isocuanta.</li>
                <li><strong>b)</strong> Incorrecta: pone <InlineMath math="L/K" /> en vez de <InlineMath math="K/L" /> (invierte el cociente). Con <InlineMath math="L/K" /> la RMST ser&iacute;a creciente en L, lo opuesto a la convexidad de las isocuantas.</li>
                <li><strong>c)</strong> Correcta: <InlineMath math="(\alpha/\beta)(K/L)" /> y es decreciente en L porque al aumentar L, <InlineMath math="K/L" /> baja.</li>
                <li><strong>d)</strong> Incorrecta: el par&aacute;metro <InlineMath math="A" /> se cancela al dividir <InlineMath math="PMg_L / PMg_K" />, as&iacute; que no afecta a la RMST.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Repasa esto en el <Link href="/tema-1/ejercicio-3" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 3: Propiedades de la Cobb-Douglas</Link> y en el <Link href="/tema-1/ejercicio-1" className="text-blue-600 dark:text-blue-400 underline">Ejercicio 1</Link> (apartado c, RMST).
              </p>
            </div>
          }
        />
      </div>

      {/* Conexi&oacute;n */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            &iquest;C&oacute;mo te fue?
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            Si acertaste 3-4 preguntas, est&aacute;s list@ para el <Link href="/tema-2" className="text-blue-600 dark:text-blue-400 underline">Tema 2: Costes</Link>. Los conceptos de productividad que acabas de repasar son la base para entender c&oacute;mo se construyen las funciones de costes.
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            Si fallaste varias, no te preocupes: vuelve a los <Link href="/tema-1" className="text-blue-600 dark:text-blue-400 underline">ejercicios del Tema 1</Link> y al <Link href="/toolkit" className="text-blue-600 dark:text-blue-400 underline">Kit Matem&aacute;tico</Link>.
          </p>
        </CardContent>
      </Card>

      {/* Navegaci&oacute;n */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t">
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="/tema-1/ejercicio-5">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ejercicio 5
          </Link>
        </Button>
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="/tema-1">
            Volver a Tema 1
          </Link>
        </Button>
      </div>
    </div>
  );
}
