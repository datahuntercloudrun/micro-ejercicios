import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, DollarSign, TrendingUp, Calculator, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const temas = [
  {
    numero: 1,
    titulo: "La Funci\u00f3n de Producci\u00f3n",
    pregunta: "\u00bfC\u00f3mo transforma una empresa sus recursos en producto?",
    descripcion: "Funciones de producci\u00f3n Cobb-Douglas, productividades marginales y medias, RMST, isocuantas y rendimientos a escala.",
    icon: Factory,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    ejercicios: 6,
    url: "/tema-1",
    temas: ["Corto y largo plazo", "PMe y PMg", "Isocuantas", "RMST", "Rendimientos a escala"],
  },
  {
    numero: 2,
    titulo: "La Funci\u00f3n de Costes",
    pregunta: "\u00bfCu\u00e1nto le cuesta a la empresa producir cada unidad?",
    descripcion: "Costes totales, medios y marginales. Isocostes, senda de expansi\u00f3n y relaci\u00f3n entre costes a corto y largo plazo.",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    ejercicios: 4,
    url: "/tema-2",
    temas: ["CMe y CMg", "Isocostes", "Senda de expansi\u00f3n", "Costes CP vs LP"],
  },
  {
    numero: 3,
    titulo: "La Oferta Competitiva",
    pregunta: "\u00bfCu\u00e1nto debe vender la empresa para maximizar su beneficio?",
    descripcion: "Maximizaci\u00f3n del beneficio, curvas de oferta a corto y largo plazo, excedente del productor y efecto de impuestos.",
    icon: TrendingUp,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    borderColor: "border-violet-200 dark:border-violet-800",
    ejercicios: 5,
    url: "/tema-3",
    temas: ["p = CMg", "Oferta CP y LP", "Excedente productor", "Impuestos"],
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Microeconom&iacute;a</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Ejercicios resueltos paso a paso &mdash; explicados para que cualquiera los entienda
        </p>
      </div>

      {/* Empieza aquí */}
      <Card className="bg-amber-50/70 dark:bg-amber-950/15 border-amber-200 dark:border-amber-800">
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <p className="font-semibold text-amber-800 dark:text-amber-200 text-base">
              &iquest;Primera vez aqu&iacute;? Empieza por aqu&iacute;
            </p>
          </div>
          <p className="text-sm text-amber-900 dark:text-amber-100">
            Esta app explica <strong>todo desde cero</strong>: cada f&oacute;rmula, cada paso, cada concepto.
            No necesitas saber matem&aacute;ticas ni econom&iacute;a para empezar. Sigue este orden:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <Link href="/toolkit" className="block">
              <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-3 bg-white dark:bg-gray-900 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-orange-200 dark:bg-orange-800/40 text-orange-800 dark:text-orange-200 text-sm">
                    Paso 0
                  </Badge>
                </div>
                <p className="font-medium text-foreground">Kit Matem&aacute;tico</p>
                <p className="text-muted-foreground text-sm">Derivadas y optimizaci&oacute;n explicadas desde cero. Sin esto, las f&oacute;rmulas no tienen sentido.</p>
              </div>
            </Link>
            <Link href="/tema-1" className="block">
              <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-3 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-blue-200 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 text-sm">
                    Paso 1
                  </Badge>
                </div>
                <p className="font-medium text-foreground">Producci&oacute;n</p>
                <p className="text-muted-foreground text-sm">C&oacute;mo una empresa transforma trabajo y capital en producto.</p>
              </div>
            </Link>
            <Link href="/tema-2" className="block">
              <div className="border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 bg-white dark:bg-gray-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-emerald-200 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 text-sm">
                    Paso 2
                  </Badge>
                </div>
                <p className="font-medium text-foreground">Costes</p>
                <p className="text-muted-foreground text-sm">Cu&aacute;nto cuesta producir. Construimos las curvas de costes.</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="/tema-3" className="block w-full sm:w-1/3">
              <div className="border border-violet-200 dark:border-violet-800 rounded-lg p-3 bg-white dark:bg-gray-900 hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-colors text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <Badge className="bg-violet-200 dark:bg-violet-800/40 text-violet-800 dark:text-violet-200 text-sm">
                    Paso 3
                  </Badge>
                </div>
                <p className="font-medium text-foreground">Oferta</p>
                <p className="text-muted-foreground text-sm">Cu&aacute;nto vender para maximizar beneficios.</p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap visual */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Link href="/toolkit" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
          <Calculator className="h-4 w-4 text-orange-500" />
          <span className="hidden sm:inline">Mates</span>
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href="/tema-1" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
          <Factory className="h-4 w-4 text-blue-500" />
          <span className="hidden sm:inline">Producci&oacute;n</span>
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href="/tema-2" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
          <DollarSign className="h-4 w-4 text-emerald-500" />
          <span className="hidden sm:inline">Costes</span>
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href="/tema-3" className="flex items-center gap-1 hover:text-violet-500 transition-colors">
          <TrendingUp className="h-4 w-4 text-violet-500" />
          <span className="hidden sm:inline">Oferta</span>
        </Link>
      </div>

      {/* Cards de temas */}
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {temas.map((tema) => (
          <Link key={tema.numero} href={tema.url}>
            <Card className={`h-full transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer border ${tema.borderColor}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${tema.bgColor}`}>
                    <tema.icon className={`h-6 w-6 ${tema.color}`} />
                  </div>
                  {tema.ejercicios > 0 && (
                    <Badge variant="secondary">
                      {tema.ejercicios} ejercicios
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">Tema {tema.numero}</CardTitle>
                <CardDescription className="font-medium text-foreground/80">
                  {tema.titulo}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground/70 mb-2 italic">
                  {tema.pregunta}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {tema.descripcion}
                </p>
                <div className="flex flex-wrap gap-1">
                  {tema.temas.map((t) => (
                    <Badge key={t} variant="outline" className="text-sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Kit Matemático destacado */}
      <Link href="/toolkit">
        <Card className="border-orange-200 dark:border-orange-800 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20 shrink-0">
                  <Calculator className="h-6 w-6 text-orange-500" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">Kit Matem&aacute;tico</p>
                  <p className="text-sm text-muted-foreground">
                    Derivadas, derivadas parciales y optimizaci&oacute;n explicadas desde el principio absoluto.
                    Si las matem&aacute;ticas te dan miedo, empieza aqu&iacute;.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge variant="outline" className="text-sm">Derivadas</Badge>
                    <Badge variant="outline" className="text-sm">Derivadas parciales</Badge>
                    <Badge variant="outline" className="text-sm">Optimizaci&oacute;n</Badge>
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Sobre esta app */}
      <Card className="bg-gray-50 dark:bg-gray-800/50">
        <CardHeader>
          <CardTitle className="text-lg">Sobre esta aplicaci&oacute;n</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            Esta app resuelve <strong>todos los ejercicios</strong> de Microeconom&iacute;a del curso,
            explicados como si nunca hubieras visto una derivada. Cada ejercicio incluye:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Prerrequisitos</strong>: qu&eacute; necesitas saber antes de empezar, con enlaces directos</li>
            <li><strong>Paso a paso</strong>: cada c&aacute;lculo explicado con la regla matem&aacute;tica que se usa</li>
            <li><strong>Analog&iacute;as</strong>: cada concepto conectado con algo cotidiano que ya entiendes</li>
            <li><strong>Gr&aacute;ficos interactivos</strong>: visualiza las funciones, no solo los n&uacute;meros</li>
            <li><strong>Conexiones</strong>: al final de cada ejercicio, c&oacute;mo conecta con lo que viene despu&eacute;s</li>
          </ul>
          <p className="text-sm">
            12 ejercicios resueltos + 3 tests de autoevaluaci&oacute;n + Kit Matem&aacute;tico completo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
