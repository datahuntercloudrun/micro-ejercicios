"use client";

import { useState } from "react";
import { ExerciseLayout } from "@/components/stats/exercise-layout";
import { StepCard } from "@/components/stats/step-card";
import { FormulaDisplay, InlineMath } from "@/components/stats/formula-display";
import { ResultCard } from "@/components/stats/result-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plot, Text, Point, Line } from "mafs";
import { EconChart, ChartLegend, COLORS } from "@/components/charts/econ-chart";
import { CheckCircle, XCircle, Eye } from "lucide-react";

/* ---------- datos de la tabla ---------- */
const tableData = [
  { x: 1, CT: 32 },
  { x: 2, CT: 40 },
  { x: 3, CT: 46 },
  { x: 4, CT: 50 },
  { x: 5, CT: 56 },
  { x: 6, CT: 66 },
  { x: 7, CT: 82 },
  { x: 8, CT: 106 },
];

const CF = 22;

// Calculamos todas las columnas derivadas
const fullData = tableData.map((row, i) => {
  const CV = row.CT - CF;
  const CMe = row.CT / row.x;
  const CVMe = CV / row.x;
  const CMg = i === 0 ? CV : tableData[i].CT - tableData[i - 1].CT;
  return { ...row, CV, CMe: Math.round(CMe * 100) / 100, CVMe: Math.round(CVMe * 100) / 100, CMg };
});

/** Linear interpolation helper for discrete data points */
function lerp(pts: [number, number][], x: number): number {
  if (x <= pts[0][0]) return pts[0][1];
  if (x >= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
  for (let i = 0; i < pts.length - 1; i++) {
    if (x >= pts[i][0] && x <= pts[i + 1][0]) {
      const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
      return pts[i][1] + t * (pts[i + 1][1] - pts[i][1]);
    }
  }
  return NaN;
}

const cmePts: [number, number][] = fullData.map((d) => [d.x, d.CMe]);
const cvmePts: [number, number][] = fullData.map((d) => [d.x, d.CVMe]);
const cmgPts: [number, number][] = fullData.map((d) => [d.x, d.CMg]);

/* ---------- afirmaciones V/F ---------- */
interface Statement {
  id: string;
  text: string;
  answer: boolean;
  explanation: React.ReactNode;
}

export default function Ejercicio1() {
  const statements: Statement[] = [
    {
      id: "a",
      text: "La empresa cierra si el precio es inferior a 6,80 €.",
      answer: true,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>VERDADERO.</strong> El mínimo CVMe es 6,80 (en x=5).
            Si el precio está por debajo de este valor, los ingresos no cubren
            ni siquiera los costes variables: cada unidad producida <em>añade</em>{" "}
            pérdidas. Es mejor cerrar y perder solo los CF = {CF}€.
          </p>
          <FormulaDisplay math="p < \min CVMe = 6{,}80 \implies \text{la empresa cierra}" />
        </div>
      ),
    },
    {
      id: "b",
      text: "A un precio de 14€, la empresa produce x=6 y tiene beneficio positivo.",
      answer: true,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>VERDADERO.</strong> Con p=14, producimos hasta que CMg ≤ p.
            CMg(6)=10 ≤ 14, pero CMg(7)=16 &gt; 14. Luego x*=6.
          </p>
          <FormulaDisplay math="\pi = 14 \cdot 6 - 66 = 84 - 66 = 18 > 0" />
          <p>Beneficio de 18€: la empresa cubre todos los costes y gana dinero.</p>
        </div>
      ),
    },
    {
      id: "c",
      text: "Si no produce nada, pierde exactamente CF = 22€.",
      answer: true,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>VERDADERO.</strong> Si x=0, no hay ingresos ni costes variables.
            Solo quedan los costes fijos, que hay que pagar igualmente.
          </p>
          <FormulaDisplay math="\pi(0) = 0 - CF = -22\text{€}" />
          <p>Este es el «suelo» de pérdidas: la empresa nunca pierde más de 22€
            si decide cerrar.</p>
        </div>
      ),
    },
    {
      id: "d",
      text: "A un precio de 4€, produce x=4 porque CMg(4) = 4 = p.",
      answer: false,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>FALSO.</strong> Aunque CMg(4)=4=p, el precio está por debajo del
            mínimo CVMe (6,80). Si produce, pierde más que si cierra:
          </p>
          <FormulaDisplay math="\pi(4) = 4 \cdot 4 - 50 = -34 < -22 = \pi(0)" />
          <p>La condición p = CMg es <em>necesaria</em> pero no <em>suficiente</em>.
            También hace falta que p ≥ mín CVMe.</p>
        </div>
      ),
    },
    {
      id: "e",
      text: "A un precio de 11€, la empresa obtiene beneficio cero (punto de nivelación).",
      answer: true,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>VERDADERO.</strong> El CMe mínimo es 11 (en x=6).
            Cuando p = mín CMe, el beneficio es exactamente cero.
          </p>
          <FormulaDisplay math="\pi = 11 \cdot 6 - 66 = 66 - 66 = 0" />
          <p>Este es el <strong>punto de nivelación</strong>: la empresa cubre todos
            sus costes (fijos y variables) pero no gana nada.</p>
        </div>
      ),
    },
    {
      id: "f",
      text: "El CMg es decreciente para las primeras 4 unidades.",
      answer: true,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>VERDADERO.</strong> Los valores de CMg son: 10, 8, 6, 4. Cada unidad
            adicional cuesta <em>menos</em> que la anterior (rendimientos crecientes a escala local).
          </p>
          <p>A partir de x=5 el CMg empieza a subir (6, 10, 16, 24):
            aparecen los rendimientos decrecientes.</p>
        </div>
      ),
    },
    {
      id: "g",
      text: "La curva de oferta coincide con CMg para todo nivel de producción.",
      answer: false,
      explanation: (
        <div className="space-y-2">
          <p>
            <strong>FALSO.</strong> La curva de oferta es el CMg <em>solo por encima</em> del
            mínimo CVMe. Para precios por debajo de 6,80€ la oferta es cero
            (la empresa cierra).
          </p>
          <FormulaDisplay math="S(p) = \begin{cases} x^*(p) & \text{si } p \geq \min CVMe \\ 0 & \text{si } p < \min CVMe \end{cases}" />
        </div>
      ),
    },
  ];

  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ExerciseLayout
      tema={3}
      exerciseNumber={1}
      title="Verdadero o Falso: Empresa Competitiva"
      difficulty="Medio"
      category="Competencia perfecta"
      statement={
        <div className="space-y-2">
          <p>
            Suponga una empresa competitiva que opera a corto plazo con costes
            fijos <InlineMath math="CF = 22" /> y con curvas de costes marginales
            y medios en forma de U. Si la empresa produce una cantidad que
            verifica <InlineMath math="p > CVMe" />, determine si son ciertas o no
            las siguientes afirmaciones:
          </p>
          <ol className="list-[lower-alpha] pl-5 space-y-1">
            <li>
              La empresa no est&aacute; maximizando el beneficio, al no igualar el
              precio con el coste marginal.
            </li>
            <li>
              La empresa podr&iacute;a estar produciendo con unas p&eacute;rdidas
              de 15 (Beneficio=-15).
            </li>
            <li>
              La empresa podr&iacute;a estar produciendo con unas p&eacute;rdidas
              de 25 (Beneficio=-25).
            </li>
            <li>
              El beneficio de la empresa podr&iacute;a ser de 25 (Beneficio=25).
            </li>
            <li>
              La empresa est&aacute; produciendo en la zona decreciente de los
              costes totales medios.
            </li>
            <li>
              Para la cantidad producida el coste variable medio est&aacute;
              decreciendo.
            </li>
            <li>La empresa puede estar cubriendo todos sus costes.</li>
          </ol>
        </div>
      }
      prevUrl="/tema-2/test"
      nextUrl="/tema-3/ejercicio-2"
    >
      {/* Prerrequisitos */}
      <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-3 sm:p-4 text-sm space-y-2">
          <p className="font-semibold text-orange-800 dark:text-orange-200">
            Antes de empezar
          </p>
          <p className="text-orange-900 dark:text-orange-100">
            Este ejercicio aplica las <strong>tres reglas de decisión</strong> de una empresa
            competitiva. Si no recuerdas cómo se relacionan CMe, CVMe y CMg, revisa el{" "}
            <Link href="/tema-2/ejercicio-3" className="text-orange-600 dark:text-orange-400 underline">Ejercicio 3 del Tema 2</Link>.
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
              La decisi&oacute;n de producir o cerrar
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Imagina que tienes un <strong>puesto de limonada</strong>. Ya has pagado el alquiler
              del puesto (coste fijo). Si el precio de cada vaso es tan bajo que ni siquiera
              cubre los limones y el az&uacute;car (costes variables), &iquest;abrir&iacute;as? No: perder&iacute;as
              m&aacute;s dinero vendiendo que cerrando. Eso es exactamente lo que decide una empresa competitiva.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-800 border mt-2">
          <CardContent className="p-3 text-sm">
            <p className="font-semibold">&iquest;Qu&eacute; pregunta responde esto?</p>
            <p className="text-muted-foreground">
              &iquest;Cu&aacute;nto debe producir una empresa a cada precio? &iquest;Cu&aacute;ndo le conviene
              cerrar? Estas decisiones dependen de la relaci&oacute;n entre <strong>precio</strong>,{" "}
              <strong>coste marginal</strong> y <strong>coste variable medio</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              Las tres reglas de oro
            </p>
            <ul className="list-disc pl-4 text-amber-900 dark:text-amber-100 space-y-1">
              <li><strong>Regla 1:</strong> Produce donde p = CMg (maximiza beneficio)</li>
              <li><strong>Regla 2:</strong> Solo produce si p &ge; m&iacute;n CVMe (umbral de cierre)</li>
              <li><strong>Regla 3:</strong> Beneficio cero cuando p = m&iacute;n CMe (punto de nivelaci&oacute;n)</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 2 ============ */}
      <StepCard
        stepNumber={2}
        title="Tabla de costes completa"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;C&oacute;mo construimos la tabla?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              A partir del CT y CF, derivamos todas las dem&aacute;s columnas:
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm space-y-1">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">Coste Variable</p>
              <FormulaDisplay math="CV = CT - CF" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm space-y-1">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">Coste Marginal</p>
              <FormulaDisplay math="CMg = CT(x) - CT(x-1)" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm space-y-1">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">Coste Medio</p>
              <FormulaDisplay math="CMe = CT / x" />
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm space-y-1">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">CVMe</p>
              <FormulaDisplay math="CVMe = CV / x" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border px-2 py-1.5 text-center font-semibold">x</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CT</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CV</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CMg</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CMe</th>
                <th className="border px-2 py-1.5 text-center font-semibold">CVMe</th>
              </tr>
            </thead>
            <tbody>
              {fullData.map((row) => (
                <tr key={row.x} className={row.x === 5 ? "bg-amber-50 dark:bg-amber-950/20" : row.x === 6 ? "bg-emerald-50 dark:bg-emerald-950/20" : ""}>
                  <td className="border px-2 py-1 text-center font-medium">{row.x}</td>
                  <td className="border px-2 py-1 text-center">{row.CT}</td>
                  <td className="border px-2 py-1 text-center">{row.CV}</td>
                  <td className="border px-2 py-1 text-center">{row.CMg}</td>
                  <td className="border px-2 py-1 text-center">{row.CMe}</td>
                  <td className="border px-2 py-1 text-center font-semibold">{row.CVMe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-amber-800 dark:text-amber-200">
                M&iacute;n CVMe = 6,80 (x=5)
              </p>
              <p className="text-amber-900 dark:text-amber-100">
                Precio m&iacute;nimo para producir (umbral de cierre)
              </p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-3 text-sm">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200">
                M&iacute;n CMe = 11 (x=6)
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Precio para beneficio cero (punto de nivelaci&oacute;n)
              </p>
            </CardContent>
          </Card>
        </div>
      </StepCard>

      {/* ============ PASO 3 ============ */}
      <StepCard
        stepNumber={3}
        title="Gr&aacute;fico de costes"
        variant="calculation"
      >
        <EconChart xRange={[0, 9]} yRange={[-1, 35]}>
          {/* CMe curve */}
          <Plot.OfX
            y={(x) => (x <= 0.01 || x < 1 || x > 8 ? NaN : lerp(cmePts, x))}
            color={COLORS.blue}
            weight={2.5}
          />
          {/* CVMe curve */}
          <Plot.OfX
            y={(x) => (x <= 0.01 || x < 1 || x > 8 ? NaN : lerp(cvmePts, x))}
            color={COLORS.emerald}
            weight={2.5}
          />
          {/* CMg curve */}
          <Plot.OfX
            y={(x) => (x <= 0.01 || x < 1 || x > 8 ? NaN : lerp(cmgPts, x))}
            color={COLORS.rose}
            weight={2.5}
          />
          {/* Reference lines */}
          <Line.Segment
            point1={[0, 6.8]}
            point2={[9, 6.8]}
            color={COLORS.rose}
            style="dashed"
            weight={1.5}
            opacity={0.6}
          />
          <Line.Segment
            point1={[0, 11]}
            point2={[9, 11]}
            color={COLORS.emerald}
            style="dashed"
            weight={1.5}
            opacity={0.6}
          />
          {/* Data points for CMe */}
          {fullData.map((d) => (
            <Point key={`cme-${d.x}`} x={d.x} y={d.CMe} color={COLORS.blue} />
          ))}
          {/* Data points for CVMe */}
          {fullData.map((d) => (
            <Point key={`cvme-${d.x}`} x={d.x} y={d.CVMe} color={COLORS.emerald} />
          ))}
          {/* Data points for CMg */}
          {fullData.map((d) => (
            <Point key={`cmg-${d.x}`} x={d.x} y={d.CMg} color={COLORS.rose} />
          ))}
          {/* Key reference points */}
          <Point x={5} y={6.8} color={COLORS.rose} />
          <Point x={6} y={11} color={COLORS.blue} />
          {/* Labels */}
          <Text x={8.5} y={8.5} size={12} color={COLORS.rose}>mín CVMe</Text>
          <Text x={8.5} y={12.5} size={12} color={COLORS.emerald}>mín CMe</Text>
          <Text x={8.7} y={-0.5} size={14}>x</Text>
          <Text x={0.15} y={34} size={14}>€</Text>
        </EconChart>
        <ChartLegend items={[
          { label: "CMe", color: COLORS.blue },
          { label: "CVMe", color: COLORS.emerald },
          { label: "CMg", color: COLORS.rose },
          { label: "mín CVMe = 6,80", color: COLORS.rose, dashed: true },
          { label: "mín CMe = 11", color: COLORS.emerald, dashed: true },
        ]} />

        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mt-2">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-amber-800 dark:text-amber-200">
              &iquest;Qu&eacute; nos dice el gr&aacute;fico?
            </p>
            <p className="text-amber-900 dark:text-amber-100">
              El CMg tiene forma de <strong>U</strong>: baja hasta x=4 y luego sube.
              Cruza el CVMe en su m&iacute;nimo (x=5) y el CMe en su m&iacute;nimo (x=6).
              La <strong>curva de oferta</strong> es el tramo del CMg que est&aacute; por encima
              del m&iacute;nimo CVMe (desde x=5 en adelante, aproximadamente).
            </p>
          </CardContent>
        </Card>
      </StepCard>

      {/* ============ PASO 4 ============ */}
      <StepCard
        stepNumber={4}
        title="Afirmaciones Verdadero/Falso"
        variant="calculation"
      >
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mb-3">
          <CardContent className="p-3 sm:p-4 text-sm space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              &iquest;C&oacute;mo resolver cada afirmaci&oacute;n?
            </p>
            <p className="text-blue-900 dark:text-blue-100">
              Para cada afirmaci&oacute;n, preguntamos: &iquest;es coherente con las tres reglas
              de oro? Pulsa &quot;Mostrar respuesta&quot; para ver la soluci&oacute;n.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {statements.map((s) => (
            <Card key={s.id} className="border">
              <CardContent className="p-3 sm:p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="shrink-0 mt-0.5">{s.id})</Badge>
                  <p className="text-sm">{s.text}</p>
                </div>

                {!revealed[s.id] ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleReveal(s.id)}
                    className="gap-1"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Mostrar respuesta
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {s.answer ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200">
                            VERDADERO
                          </Badge>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200">
                            FALSO
                          </Badge>
                        </>
                      )}
                    </div>
                    <Card className={s.answer
                      ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
                      : "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800"
                    }>
                      <CardContent className="p-3 text-sm">
                        {s.explanation}
                      </CardContent>
                    </Card>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleReveal(s.id)}
                    >
                      Ocultar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </StepCard>

      {/* ============ PASO 5 ============ */}
      <StepCard stepNumber={5} title="Resumen de resultados" variant="result">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ResultCard label="CF" value="22€" />
          <ResultCard label="Mín CVMe" value="6,80€ (x=5)" />
          <ResultCard label="Mín CMe" value="11€ (x=6)" />
          <ResultCard label="Oferta" value="CMg ≥ mín CVMe" />
        </div>

        <Card className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 mt-3">
          <CardContent className="p-3 text-sm space-y-1">
            <p className="font-semibold text-rose-800 dark:text-rose-200">
              Errores comunes a evitar
            </p>
            <ul className="list-disc pl-4 text-rose-900 dark:text-rose-100 space-y-1">
              <li>Producir donde p = CMg sin verificar p &ge; m&iacute;n CVMe (caso d).</li>
              <li>Confundir el m&iacute;nimo de CVMe con el de CMe: son puntos distintos.</li>
              <li>Pensar que la curva de oferta es <em>toda</em> la curva de CMg.</li>
              <li>Olvidar que con x=0 se pierden los CF (no cero).</li>
            </ul>
          </CardContent>
        </Card>
      </StepCard>

      {/* Conexión con el tema */}
      <Card className="bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
        <CardContent className="p-4 text-sm space-y-2">
          <p className="font-semibold text-violet-800 dark:text-violet-200">
            Conexión con el resto del tema
          </p>
          <p className="text-violet-900 dark:text-violet-100">
            Estas decisiones (producir/cerrar, cuánto producir) son la base de la
            <strong> curva de oferta</strong>. En el{" "}
            <Link href="/tema-3/ejercicio-2" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 2</Link>,
            derivaremos la oferta paso a paso desde la función de producción. Y en el{" "}
            <Link href="/tema-3/ejercicio-3" className="text-violet-600 dark:text-violet-400 underline">Ejercicio 3</Link>,
            veremos cómo los impuestos afectan a estas decisiones.
          </p>
        </CardContent>
      </Card>
    </ExerciseLayout>
  );
}
