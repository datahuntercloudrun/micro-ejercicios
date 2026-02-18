"use client";

import { useState } from "react";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";

export default function Ejercicio1() {
  const [explorerL, setExplorerL] = useState(2);

  // K en cada isocuanta para el L actual: K = x₀/(10L²)
  const K40 = 4 / (explorerL * explorerL);
  const K80 = 8 / (explorerL * explorerL);
  const K160 = 16 / (explorerL * explorerL);
  // RMST en cada isocuanta: 2K/L
  const rmst40 = (2 * K40) / explorerL;
  const rmst80 = (2 * K80) / explorerL;
  const rmst160 = (2 * K160) / explorerL;
  // Producción en corto plazo (K̄=4): x = 40L²
  const prodCP = 40 * explorerL * explorerL;
  // Para demostrar que la RMST es una tasa instantánea (no vale para cambios grandes)
  const demoStep = 0.1;
  const K40afterStep = 4 / ((explorerL + demoStep) * (explorerL + demoStep));
  const rmstPredDK = rmst40 * demoStep;
  const actualDK = K40 - K40afterStep;
  // Cambio grande (ΔL = 1) para mostrar que falla
  const K40after1 = 4 / ((explorerL + 1) * (explorerL + 1));
  const actualDK1 = K40 - K40after1;

  return (
    <ExerciseLayout
      tema={1}
      exerciseNumber={1}
      title="Isocuantas y Productividades"
      difficulty="Medio"
      category="Producci&oacute;n"
      statement={
        <div className="space-y-2">
          <p>
            Suponga que la tecnolog&iacute;a accesible para producir el bien
            &ldquo;x&rdquo; est&aacute; representada por la funci&oacute;n de
            producci&oacute;n <InlineMath math="x = 10L^2K" />, donde{" "}
            <InlineMath math="L" /> y <InlineMath math="K" /> indican
            respectivamente las cantidades de trabajo y capital utilizadas en la
            producci&oacute;n del bien &ldquo;x&rdquo;.
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              Represente el mapa de isocuantas correspondiente a la funci&oacute;n
              de producci&oacute;n.
            </li>
            <li>
              Obtenga las productividades medias y marginales de los factores.
            </li>
            <li>
              Determine la relaci&oacute;n marginal de sustituci&oacute;n
              t&eacute;cnica entre los factores.
            </li>
            <li>
              Represente gr&aacute;ficamente la funci&oacute;n de producci&oacute;n
              y las productividades medias y marginales del trabajo si en el corto
              plazo la cantidad de capital est&aacute; fijo en{" "}
              <InlineMath math="\bar{K} = 4" />.
            </li>
          </ol>
        </div>
      }
      prevUrl="/tema-1"
      nextUrl="/tema-1/ejercicio-2"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            En este ejercicio usaremos <strong>derivadas parciales</strong> para
            calcular productividades. Si no sabes qu&eacute; es una derivada, no te
            preocupes: revisa primero estas herramientas y vuelve.
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
              &iquest;Qu&eacute; es una funci&oacute;n de producci&oacute;n?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina una <strong>panader&iacute;a</strong>. Tienes
              trabajadores (<InlineMath math="L" />) y hornos (
              <InlineMath math="K" />
              ). La funci&oacute;n de producci&oacute;n te dice
              cu&aacute;ntas barras de pan (<InlineMath math="x" />) produces
              con cada combinaci&oacute;n de trabajadores y hornos.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              Si tengo cierta cantidad de trabajo y capital, &iquest;cu&aacute;nto
              puedo producir? Y al rev&eacute;s: si quiero producir una
              cantidad fija, &iquest;qu&eacute; combinaciones de{" "}
              <InlineMath math="L" /> y <InlineMath math="K" /> me sirven?
              Esas combinaciones son las <strong>isocuantas</strong>.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2: Mapa de isocuantas ============ */}
      <StepCard
        stepNumber={2}
        title="a) Mapa de isocuantas"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-3">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;C&oacute;mo se obtiene una isocuanta?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Queremos dibujar todas las combinaciones de{" "}
              <InlineMath math="(L, K)" /> que producen la misma cantidad.
              Para dibujarlas necesitamos una funci&oacute;n que podamos representar
              en un gr&aacute;fico con dos ejes. Y aqu&iacute; viene la pregunta:
              &iquest;qu&eacute; ponemos en cada eje?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              <strong>&iquest;Por qu&eacute; <InlineMath math="L" /> en el eje horizontal
              y <InlineMath math="K" /> en el vertical?</strong> Piensa en el
              corto plazo: el capital (m&aacute;quinas, f&aacute;bricas) es lo que la empresa{" "}
              <em>no puede cambiar</em> f&aacute;cilmente, mientras que el trabajo (contratar
              o despedir) es lo que <em>s&iacute; controla</em>. En matem&aacute;ticas, la
              variable que controlamos va en el eje X. As&iacute; que ponemos{" "}
              <InlineMath math="L" /> abajo y <InlineMath math="K" /> a la izquierda.
              Esta es la <strong>convenci&oacute;n est&aacute;ndar</strong> en microeconom&iacute;a
              (la ver&aacute;s en los apuntes, en Varian, y en cualquier manual).
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Con esa elecci&oacute;n, para dibujar la curva necesitamos{" "}
              <strong>despejar <InlineMath math="K" /></strong> (eje Y) en
              funci&oacute;n de <InlineMath math="L" /> (eje X), exactamente igual
              que cuando en el instituto despejas <InlineMath math="y" /> para
              dibujar <InlineMath math="y = f(x)" />:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="x_0 = 10L^2K \quad \Longrightarrow \quad K = \frac{x_0}{10L^2}" />

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-1 py-1">
              <HelpCircle className="h-4 w-4" />
              <span>No me sale despejar esto</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Reglas para despejar variables</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Regla de oro</p>
                <p className="text-muted-foreground">
                  Lo que quieres despejar tiene que quedar <strong>solo en un lado</strong> de la ecuaci&oacute;n. Todo lo dem&aacute;s, lo pasas al otro lado haciendo la <strong>operaci&oacute;n contraria</strong>.
                </p>
              </div>

              <div className="border rounded-lg p-3 space-y-3">
                <p className="font-semibold">Aplicado a nuestro caso:</p>
                <p className="text-muted-foreground">
                  Queremos despejar <InlineMath math="K" /> de{" "}
                  <InlineMath math="x_0 = 10L^2K" />.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0">Paso 1:</span>
                    <div>
                      <p className="text-muted-foreground">
                        <InlineMath math="K" /> est&aacute; <strong>multiplicando</strong> por <InlineMath math="10L^2" />.
                        Para quitarlo de ah&iacute;, hacemos lo contrario: <strong>dividimos</strong> ambos lados entre <InlineMath math="10L^2" />.
                      </p>
                    </div>
                  </div>
                  <FormulaDisplay math="\frac{x_0}{10L^2} = \frac{\cancel{10L^2} \cdot K}{\cancel{10L^2}}" />
                  <div className="flex gap-2">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">Resultado:</span>
                    <p className="text-muted-foreground">
                      El <InlineMath math="10L^2" /> se cancela a la derecha y queda{" "}
                      <InlineMath math="K = \frac{x_0}{10L^2}" />.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-3 space-y-2">
                <p className="font-semibold">Chuleta de operaciones contrarias</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-1 pr-4">Si la variable est&aacute;...</th>
                      <th className="text-left py-1">Haces...</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-1.5 pr-4">Multiplicando (<InlineMath math="aK" />)</td>
                      <td className="py-1.5">Divides ambos lados entre <InlineMath math="a" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1.5 pr-4">Dividiendo (<InlineMath math="\frac{K}{a}" />)</td>
                      <td className="py-1.5">Multiplicas ambos lados por <InlineMath math="a" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1.5 pr-4">Sumando (<InlineMath math="K + a" />)</td>
                      <td className="py-1.5">Restas <InlineMath math="a" /> en ambos lados</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1.5 pr-4">Restando (<InlineMath math="K - a" />)</td>
                      <td className="py-1.5">Sumas <InlineMath math="a" /> en ambos lados</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-1.5 pr-4">Elevada (<InlineMath math="K^n" />)</td>
                      <td className="py-1.5">Aplicas ra&iacute;z <InlineMath math="\sqrt[n]{\ }" /> a ambos lados</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4">Dentro de ra&iacute;z (<InlineMath math="\sqrt{K}" />)</td>
                      <td className="py-1.5">Elevas al cuadrado ambos lados</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border rounded-lg p-3 space-y-2">
                <p className="font-semibold">Truco: lee la ecuaci&oacute;n como una frase</p>
                <p className="text-muted-foreground">
                  <InlineMath math="x_0 = 10L^2K" /> se lee: &ldquo;<InlineMath math="x_0" /> es igual a 10 por <InlineMath math="L" /> al cuadrado por <InlineMath math="K" />&rdquo;.
                </p>
                <p className="text-muted-foreground">
                  Si quieres aislar <InlineMath math="K" />, preg&uacute;ntate: &ldquo;&iquest;qu&eacute; le est&aacute; pasando a <InlineMath math="K" />?&rdquo;.
                  Respuesta: est&aacute; siendo multiplicado por <InlineMath math="10L^2" />.
                  Entonces haz lo contrario: divide todo entre <InlineMath math="10L^2" />.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4 space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Valores de ejemplo
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para <InlineMath math="x_0 = 40" />:{" "}
              <InlineMath math="K = \frac{40}{10L^2} = \frac{4}{L^2}" />
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para <InlineMath math="x_0 = 80" />:{" "}
              <InlineMath math="K = \frac{80}{10L^2} = \frac{8}{L^2}" />
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Para <InlineMath math="x_0 = 160" />:{" "}
              <InlineMath math="K = \frac{160}{10L^2} = \frac{16}{L^2}" />
            </p>
          </CardContent>
        </Card>

        <div className="flex">
          <div className="flex items-center justify-center shrink-0 -mr-2">
            <span className="text-sm font-medium text-muted-foreground [writing-mode:vertical-lr] rotate-180">
              K (capital)
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <EconChart
              xRange={[-0.3, 5.5]}
              yRange={[-0.5, 22]}
              onMouseMath={(pt) => {
                if (pt && pt.x >= 0.5 && pt.x <= 5) {
                  setExplorerL(Math.round(pt.x * 100) / 100);
                }
              }}
            >
              {/* Isoquant curves */}
              <Plot.OfX
                y={(L) => (L <= 0.01 ? NaN : 4 / (L * L))}
                color={COLORS.blue}
                weight={2.5}
              />
              <Plot.OfX
                y={(L) => (L <= 0.01 ? NaN : 8 / (L * L))}
                color={COLORS.violet}
                weight={2.5}
              />
              <Plot.OfX
                y={(L) => (L <= 0.01 ? NaN : 16 / (L * L))}
                color={COLORS.rose}
                weight={2.5}
              />

              {/* Vertical explorer line */}
              <Line.Segment
                point1={[explorerL, 0]}
                point2={[explorerL, 22]}
                color={COLORS.slate}
                style="dashed"
                weight={1.5}
                opacity={0.5}
              />

              {/* Points on each curve at current L */}
              {K40 <= 21 && <Point x={explorerL} y={K40} color={COLORS.blue} />}
              {K80 <= 21 && <Point x={explorerL} y={K80} color={COLORS.violet} />}
              {K160 <= 21 && <Point x={explorerL} y={K160} color={COLORS.rose} />}

              {/* Horizontal guide lines to Y-axis */}
              {K40 <= 21 && (
                <Line.Segment
                  point1={[0, K40]}
                  point2={[explorerL, K40]}
                  color={COLORS.blue}
                  style="dashed"
                  weight={1}
                  opacity={0.35}
                />
              )}
              {K80 <= 21 && (
                <Line.Segment
                  point1={[0, K80]}
                  point2={[explorerL, K80]}
                  color={COLORS.violet}
                  style="dashed"
                  weight={1}
                  opacity={0.35}
                />
              )}
              {K160 <= 21 && (
                <Line.Segment
                  point1={[0, K160]}
                  point2={[explorerL, K160]}
                  color={COLORS.rose}
                  style="dashed"
                  weight={1}
                  opacity={0.35}
                />
              )}

              {/* Curve labels */}
              <Text x={3.8} y={0.9} size={13} color={COLORS.blue}>x = 40</Text>
              <Text x={3.2} y={2.2} size={13} color={COLORS.violet}>x = 80</Text>
              <Text x={2.8} y={5.5} size={13} color={COLORS.rose}>x = 160</Text>
            </EconChart>
            <p className="text-sm font-medium text-muted-foreground text-center -mt-1">
              L (trabajo)
            </p>
          </div>
        </div>

        {/* Slider control */}
        <div className="px-1 mt-2">
          <p className="font-semibold mb-2">
            &iquest;Cu&aacute;ntos trabajadores contratamos? <strong className="text-blue-600 dark:text-blue-400">{explorerL.toFixed(2)}</strong>
          </p>
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.01}
            value={explorerL}
            onChange={(e) => setExplorerL(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-blue-500"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Mueve la barra o pasa el cursor por el gr&aacute;fico
          </p>
        </div>

        {/* Value cards for each isoquant */}
        <div className="mt-3">
          <p className="mb-2">
            Con <strong>{explorerL.toFixed(2)} trabajadores</strong>, &iquest;cu&aacute;ntas m&aacute;quinas necesito?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <Card className="border-blue-300 dark:border-blue-700">
              <CardContent className="p-3">
                <p className="text-muted-foreground">Para fabricar <strong>40</strong> unidades:</p>
                <p className="text-lg font-bold" style={{ color: COLORS.blue }}>
                  {K40.toFixed(1)} m&aacute;quinas
                </p>
              </CardContent>
            </Card>
            <Card className="border-violet-300 dark:border-violet-700">
              <CardContent className="p-3">
                <p className="text-muted-foreground">Para fabricar <strong>80</strong> unidades:</p>
                <p className="text-lg font-bold" style={{ color: COLORS.violet }}>
                  {K80.toFixed(1)} m&aacute;quinas
                </p>
              </CardContent>
            </Card>
            <Card className="border-rose-300 dark:border-rose-700">
              <CardContent className="p-3">
                <p className="text-muted-foreground">Para fabricar <strong>160</strong> unidades:</p>
                <p className="text-lg font-bold" style={{ color: COLORS.rose }}>
                  {K160.toFixed(1)} m&aacute;quinas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* RMST — intuition + dynamic value */}
        <Card className="bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 mt-3">
          <CardContent className="p-4 space-y-3">
            <p className="font-semibold">
              &iquest;Puedo cambiar trabajadores por m&aacute;quinas?
            </p>
            <p className="text-muted-foreground">
              S&iacute;. Mueve la barra y fij&aacute;te en la isocuanta azul (40 unidades): cuando
              los trabajadores suben, las m&aacute;quinas bajan. Siempre producimos 40, pero
              con distinta mezcla.
            </p>
            <p className="text-muted-foreground">
              Por ejemplo, para fabricar 40 unidades:
            </p>
            <table className="w-full text-muted-foreground">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1.5 font-semibold text-foreground">Trabajadores</th>
                  <th className="text-left py-1.5 font-semibold text-foreground">M&aacute;quinas</th>
                  <th className="text-left py-1.5 font-semibold text-foreground">Ahorro por +1 trabajador</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-1.5">1</td>
                  <td className="py-1.5">4.0</td>
                  <td className="py-1.5">&mdash;</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1.5">2</td>
                  <td className="py-1.5">1.0</td>
                  <td className="py-1.5">3.0 m&aacute;quinas menos</td>
                </tr>
                <tr>
                  <td className="py-1.5">3</td>
                  <td className="py-1.5">0.44</td>
                  <td className="py-1.5">0.56 m&aacute;quinas menos</td>
                </tr>
              </tbody>
            </table>
            <p className="text-muted-foreground">
              F&iacute;jate: al principio (cuando tienes muchas m&aacute;quinas) el ahorro es grande.
              Pero cuando ya tienes pocas m&aacute;quinas, a&ntilde;adir un trabajador apenas ahorra nada.
            </p>
            <p className="text-muted-foreground">
              Ese ahorro de la tabla es un <strong>cambio discreto</strong> (de L=1 a L=2 de golpe).
              La RMST, que veremos en el apartado c), es otra cosa: una <strong>tasa instant&aacute;nea</strong> que
              solo funciona para cambios muy peque&ntilde;os, no para a&ntilde;adir un trabajador entero.
            </p>
            <p className="text-muted-foreground">
              Por ejemplo, con L=1, K=4: la RMST vale 8, pero el ahorro real al pasar a L=2
              fue solo 3 m&aacute;quinas. La RMST exagera porque &Delta;L=1 no es &ldquo;peque&ntilde;o&rdquo;.
            </p>
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-3 space-y-2">
                <p className="text-blue-900 dark:text-blue-100">
                  <strong>En tu punto actual</strong> (L&nbsp;=&nbsp;{explorerL.toFixed(2)},
                  K&nbsp;=&nbsp;{K40.toFixed(2)} para 40 uds.),
                  la <strong>RMST&nbsp;=&nbsp;{rmst40.toFixed(2)}</strong>.
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  Esto es la pendiente (en valor absoluto) de la curva azul <em>justo en ese punto</em>.
                  Es como el veloc&iacute;metro de un coche: te dice la velocidad <em>ahora mismo</em>,
                  no cu&aacute;nto recorrer&aacute;s en la pr&oacute;xima hora.
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  <strong>Cambio peque&ntilde;o</strong> (&Delta;L&nbsp;=&nbsp;{demoStep}):
                  la RMST predice que K baja &asymp;&nbsp;{rmstPredDK.toFixed(3)}.
                  En realidad baja {actualDK.toFixed(3)}.
                  &iexcl;Casi igual! Para cambios peque&ntilde;os, funciona bien.
                </p>
                <p className="text-blue-900 dark:text-blue-100">
                  <strong>Cambio grande</strong> (&Delta;L&nbsp;=&nbsp;1):
                  la RMST &ldquo;predice&rdquo; que K baja {rmst40.toFixed(2)},
                  pero en realidad baja {actualDK1.toFixed(2)}.
                  {rmst40 > K40 && (
                    <span className="text-rose-700 dark:text-rose-300 font-medium">
                      {" "}&iexcl;La RMST predice m&aacute;s ahorro ({rmst40.toFixed(2)}) del capital
                      que tienes ({K40.toFixed(2)})! Absurdo: la curva no es recta.
                    </span>
                  )}
                  {rmst40 <= K40 && (
                    <span>
                      {" "}La diferencia es grande porque la isocuanta es curva, no recta.
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Short-run production */}
        <Card className="bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 mt-3">
          <CardContent className="p-4">
            <p className="font-semibold mb-1">
              Corto plazo: 4 m&aacute;quinas fijas
            </p>
            <p className="text-muted-foreground">
              Si la empresa no puede comprar ni vender m&aacute;quinas (tiene <strong>4 fijas</strong>) y
              contrata <strong>{explorerL.toFixed(2)} trabajadores</strong>,
              produce <strong className="text-foreground">{prodCP.toFixed(0)} unidades</strong>.
            </p>
          </CardContent>
        </Card>

        <ChartLegend items={[
          { label: "40 unidades", color: COLORS.blue },
          { label: "80 unidades", color: COLORS.violet },
          { label: "160 unidades", color: COLORS.rose },
        ]} />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; nos dice el gr&aacute;fico?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Cada curva une todas las combinaciones de{" "}
              <InlineMath math="(L, K)" /> que producen la misma cantidad.
              Son <strong>decrecientes</strong> (si a&ntilde;ado L puedo quitar K) y{" "}
              <strong>convexas</strong> (la sustituci&oacute;n es cada vez m&aacute;s dif&iacute;cil).
              Las isocuantas m&aacute;s alejadas del origen representan mayor producci&oacute;n.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 3: Productividades ============ */}
      <StepCard
        stepNumber={3}
        title="b) Productividades medias y marginales"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; diferencia hay entre PMe y PMg?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              <strong>Productividad media (PMe)</strong>: &quot;&iquest;Cu&aacute;nto produce{" "}
              <em>en promedio</em> cada trabajador?&quot; = producci&oacute;n total / n&uacute;mero de trabajadores.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              <strong>Productividad marginal (PMg)</strong>: &quot;&iquest;Cu&aacute;nto produce{" "}
              <em>el siguiente</em> trabajador?&quot; = derivada de la producci&oacute;n respecto al factor.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm font-medium mt-3">Productividades del trabajo (L):</p>
        <FormulaDisplay math="PMe_L = \frac{x}{L} = \frac{10L^2K}{L} = 10LK" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;C&oacute;mo se calcula la PMg_L? (paso a paso)
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Derivamos <InlineMath math="x = 10L^2K" /> respecto a <InlineMath math="L" />,
              tratando <InlineMath math="K" /> como constante (porque solo nos interesa el efecto de L):
            </p>
            <p>
              <strong>Regla de la potencia:</strong> <InlineMath math="\frac{d}{dL}(L^2) = 2L^{2-1} = 2L" />
            </p>
            <p>
              <strong>Factor constante:</strong> el <InlineMath math="10K" /> que multiplica a <InlineMath math="L^2" /> se queda tal cual.
            </p>
            <FormulaDisplay math="PMg_L = \frac{\partial}{\partial L}(10L^2K) = 10K \cdot 2L = 20LK" />
          </div>
        </details>
        <FormulaDisplay math="PMg_L = \frac{\partial x}{\partial L} = 20LK" />

        <p className="text-sm font-medium mt-3">Productividades del capital (K):</p>
        <FormulaDisplay math="PMe_K = \frac{x}{K} = \frac{10L^2K}{K} = 10L^2" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;C&oacute;mo se calcula la PMg_K? (paso a paso)
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Derivamos <InlineMath math="x = 10L^2K" /> respecto a <InlineMath math="K" />,
              tratando <InlineMath math="L" /> como constante:
            </p>
            <p>
              <strong>Regla de la potencia:</strong> <InlineMath math="\frac{d}{dK}(K^1) = 1 \cdot K^{1-1} = 1" />
            </p>
            <p>
              <strong>Factor constante:</strong> el <InlineMath math="10L^2" /> se queda tal cual.
            </p>
            <FormulaDisplay math="PMg_K = \frac{\partial}{\partial K}(10L^2K) = 10L^2 \cdot 1 = 10L^2" />
          </div>
        </details>
        <FormulaDisplay math="PMg_K = \frac{\partial x}{\partial K} = 10L^2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-3">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">PMe_L</p>
              <FormulaDisplay math="PMe_L = 10LK" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">Producci&oacute;n promedio por trabajador</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">PMg_L</p>
              <FormulaDisplay math="PMg_L = 20LK" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">Producci&oacute;n del siguiente trabajador</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">PMe_K</p>
              <FormulaDisplay math="PMe_K = 10L^2" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">Producci&oacute;n promedio por unidad de capital</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">PMg_K</p>
              <FormulaDisplay math="PMg_K = 10L^2" />
              <p className="text-emerald-900 dark:text-emerald-100 text-xs">Producci&oacute;n de la siguiente m&aacute;quina</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Observaci&oacute;n importante
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              Nota que <InlineMath math="PMg_L = 2 \cdot PMe_L" />. Esto ocurre porque el exponente de{" "}
              <InlineMath math="L" /> es 2: la PMg crece el doble de r&aacute;pido que la PMe.
              Adem&aacute;s, <InlineMath math="PMe_K = PMg_K = 10L^2" /> porque el exponente de{" "}
              <InlineMath math="K" /> es 1 (funci&oacute;n lineal en K).
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 4: RMST ============ */}
      <StepCard
        stepNumber={4}
        title="c) RMST (Relaci&oacute;n Marginal de Sustituci&oacute;n T&eacute;cnica)"
        variant="calculation"
      >
        {/* Qué mide */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; mide la RMST?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              La RMST es la <strong>pendiente de la isocuanta</strong> en un punto concreto.
              Mide la <strong>tasa instant&aacute;nea</strong> a la que puedes intercambiar capital
              por trabajo manteniendo la producci&oacute;n constante.
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              &laquo;Instant&aacute;nea&raquo; es la palabra clave. Piensa en el veloc&iacute;metro de un coche:
              marca 120 km/h, pero eso no significa que vayas a recorrer 120 km en la
              pr&oacute;xima hora (puedes frenar, acelerar...). Del mismo modo, la RMST te dice
              a qu&eacute; <em>ritmo</em> cambiar&iacute;a K por cada unidad de L
              {" "}<strong>en ese punto exacto</strong>, no cu&aacute;nto cambia K
              si a&ntilde;ades un trabajador entero.
            </p>
          </CardContent>
        </Card>

        {/* Derivación formal con diferencial total */}
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              &iquest;De d&oacute;nde sale la f&oacute;rmula? (diferencial total)
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              La producci&oacute;n depende de <InlineMath math="L" /> y <InlineMath math="K" />.
              Si ambos cambian simult&aacute;neamente un poquito (<InlineMath math="dL" /> y{" "}
              <InlineMath math="dK" />), la producci&oacute;n cambia en:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="dq = PMg_L \cdot dL + PMg_K \cdot dK" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-1">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="text-emerald-900 dark:text-emerald-100">
              Esto se lee: &laquo;el cambio en la producci&oacute;n = lo que aporta el
              cambio en L + lo que aporta el cambio en K&raquo;.
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Sobre la <strong>isocuanta</strong>, la producci&oacute;n no cambia
              (<InlineMath math="dq = 0" />), as&iacute; que:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="PMg_L \cdot dL + PMg_K \cdot dK = 0" />

        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-1">
          <CardContent className="p-3 text-sm">
            <p className="text-emerald-900 dark:text-emerald-100">
              Despejamos <InlineMath math="dK/dL" /> (la pendiente de la isocuanta):
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="PMg_L \cdot dL = -PMg_K \cdot dK \quad\Longrightarrow\quad \frac{dK}{dL}\bigg|_{q=cte} = -\frac{PMg_L}{PMg_K}" />

        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mt-2">
          <CardContent className="p-3 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Por qu&eacute; el signo negativo?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Porque la isocuanta tiene pendiente negativa: cuando <InlineMath math="L" /> sube,{" "}
              <InlineMath math="K" /> baja (para mantener la producci&oacute;n constante).
              Trabajamos con el <strong>valor absoluto</strong> para hablar de
              &laquo;cu&aacute;ntas unidades de K por unidad de L&raquo;:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="|RMST| = \frac{PMg_L}{PMg_K}" />

        {/* Aplicación a nuestro caso */}
        <p className="text-sm font-medium mt-3">Aplicando a <InlineMath math="x = 10L^2K" />:</p>

        <FormulaDisplay math="|RMST| = \frac{PMg_L}{PMg_K} = \frac{20LK}{10L^2} = \frac{2K}{L}" />

        {/* Conexión con K = f(L) */}
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Conexi&oacute;n con el despeje <InlineMath math="K = f(L)" />
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Ahora ves <strong>por qu&eacute;</strong> en el apartado a) despejamos K en funci&oacute;n de L.
              No fue solo para dibujar la isocuanta: la RMST <strong>es</strong> la derivada{" "}
              <InlineMath math="dK/dL" />, as&iacute; que tener{" "}
              <InlineMath math="K = \frac{x_0}{10L^2}" /> nos permite
              calcularla directamente derivando:
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="K = \frac{x_0}{10}\cdot L^{-2} \quad\Longrightarrow\quad \frac{dK}{dL} = \frac{x_0}{10}\cdot(-2)\cdot L^{-3} = -\frac{2x_0}{10L^3}" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800 mt-1">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;Esto coincide con <InlineMath math="-PMg_L/PMg_K" />?
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Sustituyendo <InlineMath math="K = x_0/(10L^2)" /> en la f&oacute;rmula{" "}
              <InlineMath math="2K/L" />:
            </p>
            <FormulaDisplay math="\frac{2K}{L} = \frac{2 \cdot \frac{x_0}{10L^2}}{L} = \frac{2x_0}{10L^3}" />
            <p>
              Es exactamente el valor absoluto de <InlineMath math="dK/dL" />.
              Los dos m&eacute;todos dan el mismo resultado.
            </p>
          </div>
        </details>

        {/* Por qué «marginal» */}
        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              &iquest;Por qu&eacute; &laquo;marginal&raquo; y no &laquo;total&raquo;?
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              La RMST solo es exacta para cambios <strong>infinitesimales</strong> (infinitamente peque&ntilde;os).
              Para cambios grandes, la predicci&oacute;n falla porque la isocuanta es <strong>curva</strong>.
            </p>
            <p className="text-rose-900 dark:text-rose-100">
              <strong>Ejemplo:</strong> en la isocuanta <InlineMath math="x = 40" />,
              partiendo de <InlineMath math="L = 1" />, <InlineMath math="K = 4" /> (donde RMST = 8):
            </p>
            <div className="border rounded-lg overflow-hidden mt-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-rose-100/50 dark:bg-rose-900/20">
                    <th className="text-left p-2">Cambio en L</th>
                    <th className="text-left p-2">RMST predice</th>
                    <th className="text-left p-2">Cambio real en K</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2">+0.01</td>
                    <td className="p-2">&minus;0.08</td>
                    <td className="p-2">&minus;0.079 (casi igual)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">+0.1</td>
                    <td className="p-2">&minus;0.80</td>
                    <td className="p-2">&minus;0.69 (parecido)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">+1 (entero)</td>
                    <td className="p-2 font-medium">&minus;8.00</td>
                    <td className="p-2 font-medium">&minus;3.00 (&iexcl;muy lejos!)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-rose-900 dark:text-rose-100">
              Con <InlineMath math="\Delta L = 1" />, la RMST de 8 predice un ahorro
              de 8 m&aacute;quinas... &iexcl;pero solo tienes 4! La predicci&oacute;n es
              absurda porque la isocuanta es curva, no recta. La RMST solo vale
              como aproximaci&oacute;n para cambios peque&ntilde;os.
            </p>
          </CardContent>
        </Card>

        {/* RMST decreciente */}
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; significa en la pr&aacute;ctica?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La RMST es <strong>decreciente</strong>: a medida que usamos m&aacute;s trabajo (L sube)
              y menos capital (K baja), la RMST disminuye. Cada vez es m&aacute;s dif&iacute;cil
              sustituir capital por trabajo. Las isocuantas son convexas precisamente por esto.
            </p>
          </CardContent>
        </Card>

        <ResultCard label="RMST" value="2K/L (decreciente en L)" />
      </StepCard>

      {/* ============ PASO 5: Corto plazo ============ */}
      <StepCard
        stepNumber={5}
        title={<>d) Corto plazo: <InlineMath math="\bar{K} = 4" /></>}
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;Qu&eacute; cambia en el corto plazo?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              En el <strong>corto plazo</strong>, el capital est&aacute; fijo (
              <InlineMath math="\bar{K} = 4" />
              ). Solo podemos variar el trabajo. La funci&oacute;n de producci&oacute;n
              pasa a depender &uacute;nicamente de <InlineMath math="L" />.
            </p>
          </CardContent>
        </Card>

        <FormulaDisplay math="x = 10L^2 \cdot 4 = 40L^2" />

        <p className="text-sm font-medium mt-2">Productividades en corto plazo:</p>
        <FormulaDisplay math="PMe_L = \frac{40L^2}{L} = 40L" />

        <details className="text-sm border rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
          <summary className="cursor-pointer font-medium text-blue-700 dark:text-blue-300">
            &iquest;De d&oacute;nde sale el 80L?
          </summary>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Aplicamos la <strong>regla de la potencia</strong> a <InlineMath math="40L^2" />:
            </p>
            <p>1. El exponente (2) baja y multiplica: <InlineMath math="40 \times 2 = 80" /></p>
            <p>2. El exponente se reduce en 1: <InlineMath math="L^{2-1} = L^1 = L" /></p>
            <FormulaDisplay math="\frac{d}{dL}(40L^2) = 40 \cdot 2 \cdot L^{2-1} = 80L" />
          </div>
        </details>
        <FormulaDisplay math="PMg_L = \frac{d(40L^2)}{dL} = 80L" />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Relaci&oacute;n PMg vs PMe
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              <InlineMath math="PMg_L = 80L > 40L = PMe_L" /> para todo{" "}
              <InlineMath math="L > 0" />. La productividad marginal
              siempre est&aacute; por encima de la media. Esto implica que la PMe
              es siempre <strong>creciente</strong>: cada trabajador adicional sube el promedio.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm font-semibold mt-4 mb-1">
          Funci&oacute;n de producci&oacute;n (corto plazo)
        </p>
        <EconChart xRange={[-0.2, 4.5]} yRange={[-30, 680]}>
          <Plot.OfX
            y={(L) => 40 * L * L}
            color={COLORS.blue}
            weight={2.5}
          />
          <Text x={3} y={420} size={13} color={COLORS.blue}>x = 40L&sup2;</Text>
          <Text x={4.2} y={-20} size={14}>L</Text>
          <Text x={-0.1} y={660} size={14}>x</Text>
        </EconChart>

        <p className="text-sm font-semibold mt-4 mb-1">
          Productividades media y marginal
        </p>
        <EconChart xRange={[-0.2, 4.5]} yRange={[-15, 340]}>
          <Plot.OfX
            y={(L) => 40 * L}
            color={COLORS.emerald}
            weight={2.5}
          />
          <Plot.OfX
            y={(L) => 80 * L}
            color={COLORS.rose}
            weight={2.5}
          />
          <Text x={3.5} y={155} size={13} color={COLORS.emerald}>PMe&#8336; = 40L</Text>
          <Text x={2.5} y={225} size={13} color={COLORS.rose}>PMg&#8336; = 80L</Text>
          <Text x={4.2} y={-10} size={14}>L</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "PMe_L = 40L", color: COLORS.emerald },
          { label: "PMg_L = 80L", color: COLORS.rose },
        ]} />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; nos dicen los gr&aacute;ficos?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              La funci&oacute;n de producci&oacute;n{" "}
              <InlineMath math="x = 40L^2" /> es una par&aacute;bola creciente.
              Tanto la PMe como la PMg son l&iacute;neas rectas crecientes, y{" "}
              <InlineMath math="PMg_L" /> siempre est&aacute; por encima de{" "}
              <InlineMath math="PMe_L" />. Esto indica que <strong>no hay rendimientos decrecientes
              del trabajo</strong> en esta funci&oacute;n: cada trabajador extra produce m&aacute;s que el anterior.
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 6: Resumen ============ */}
      <StepCard stepNumber={6} title="Resumen de resultados" variant="result">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ResultCard label="Isocuanta" value="K = x₀ / (10L²)" />
          <ResultCard label="PMe_L" value="10LK" />
          <ResultCard label="PMg_L" value="20LK" />
          <ResultCard label="PMe_K = PMg_K" value="10L²" />
          <ResultCard label="RMST" value="2K/L (decreciente)" />
          <ResultCard label="CP (K̄=4)" value="x = 40L²" />
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores comunes a evitar
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Confundir PMe con PMg: PMe = total/cantidad, PMg = derivada parcial.</li>
              <li>Olvidar el signo de la RMST: es la pendiente con signo cambiado (valor positivo).</li>
              <li>En corto plazo, sustituir K antes de derivar (primero fijar K, luego calcular).</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexi&oacute;n con el tema */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-blue-800 dark:text-blue-200">
            Conexi&oacute;n con el resto del tema
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            Este ejercicio te ha ense&ntilde;ado las herramientas b&aacute;sicas: <strong>isocuantas</strong> (las combinaciones de L y K que dan la misma producci&oacute;n), <strong>productividades</strong> (cu&aacute;nto aporta cada factor) y la <strong>RMST</strong> (c&oacute;mo sustituir un factor por otro).
          </p>
          <p className="text-blue-900 dark:text-blue-100">
            En el <Link href="/tema-1/ejercicio-2" className="text-blue-600 dark:text-blue-400 underline">siguiente ejercicio</Link> veremos los <strong>rendimientos a escala</strong>: qu&eacute; pasa cuando aumentamos TODOS los factores a la vez. Y en el <Link href="/tema-2" className="text-blue-600 dark:text-blue-400 underline">Tema 2</Link> usaremos estas productividades para construir las <strong>funciones de costes</strong>.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
