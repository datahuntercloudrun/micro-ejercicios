import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, DollarSign, TrendingUp, Calculator, ArrowRight, BookOpen, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";

const temas = [
  {
    numero: 1,
    titulo: "La Funci\u00f3n de Producci\u00f3n",
    pregunta: "\u00bfC\u00f3mo transforma una empresa sus recursos en producto?",
    descripcion: "Funciones Cobb-Douglas, productividades marginales, RMST, isocuantas y rendimientos a escala.",
    icon: Factory,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-600/5",
    ejercicios: 6,
    url: "/tema-1",
    temas: ["Corto y largo plazo", "PMe y PMg", "Isocuantas", "RMST", "Rendimientos a escala"],
  },
  {
    numero: 2,
    titulo: "La Funci\u00f3n de Costes",
    pregunta: "\u00bfCu\u00e1nto le cuesta a la empresa producir cada unidad?",
    descripcion: "Costes totales, medios y marginales. Isocostes, senda de expansi\u00f3n y costes CP vs LP.",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-emerald-600/5",
    ejercicios: 4,
    url: "/tema-2",
    temas: ["CMe y CMg", "Isocostes", "Senda de expansi\u00f3n", "Costes CP vs LP"],
  },
  {
    numero: 3,
    titulo: "La Oferta Competitiva",
    pregunta: "\u00bfCu\u00e1nto debe vender la empresa para maximizar su beneficio?",
    descripcion: "Maximizaci\u00f3n del beneficio, curvas de oferta, excedente del productor e impuestos.",
    icon: TrendingUp,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    borderColor: "border-violet-200 dark:border-violet-800",
    gradientFrom: "from-violet-500/10",
    gradientTo: "to-violet-600/5",
    ejercicios: 5,
    url: "/tema-3",
    temas: ["p = CMg", "Oferta CP y LP", "Excedente productor", "Impuestos"],
  },
];

const pasos = [
  {
    paso: 0,
    titulo: "Kit Matem\u00e1tico",
    descripcion: "Derivadas y optimizaci\u00f3n desde cero. Sin esto, las f\u00f3rmulas no tienen sentido.",
    url: "/toolkit",
    badgeColor: "bg-orange-200 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200",
    borderColor: "border-orange-200 dark:border-orange-700",
    hoverBg: "hover:bg-orange-50/50 dark:hover:bg-orange-950/10",
  },
  {
    paso: 1,
    titulo: "Producci\u00f3n",
    descripcion: "C\u00f3mo una empresa transforma trabajo y capital en producto.",
    url: "/tema-1",
    badgeColor: "bg-blue-200 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200",
    borderColor: "border-blue-200 dark:border-blue-700",
    hoverBg: "hover:bg-blue-50/50 dark:hover:bg-blue-950/10",
  },
  {
    paso: 2,
    titulo: "Costes",
    descripcion: "Cu\u00e1nto cuesta producir. Construimos las curvas de costes.",
    url: "/tema-2",
    badgeColor: "bg-emerald-200 dark:bg-emerald-800/50 text-emerald-800 dark:text-emerald-200",
    borderColor: "border-emerald-200 dark:border-emerald-700",
    hoverBg: "hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10",
  },
  {
    paso: 3,
    titulo: "Oferta",
    descripcion: "Cu\u00e1nto vender para maximizar beneficios.",
    url: "/tema-3",
    badgeColor: "bg-violet-200 dark:bg-violet-800/50 text-violet-800 dark:text-violet-200",
    borderColor: "border-violet-200 dark:border-violet-700",
    hoverBg: "hover:bg-violet-50/50 dark:hover:bg-violet-950/10",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-violet-50 to-emerald-50 dark:from-blue-950/30 dark:via-violet-950/20 dark:to-emerald-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-800/10" />
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs">
              For Dummies Edition
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-violet-700 to-emerald-700 dark:from-blue-300 dark:via-violet-300 dark:to-emerald-300 bg-clip-text text-transparent">
            Microeconom&iacute;a
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl">
            Todos los ejercicios del curso resueltos paso a paso, explicados como si nunca hubieras visto una derivada.
          </p>
        </div>
      </div>

      {/* Empieza aqu&iacute; */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <h2 className="font-semibold text-base sm:text-lg">&iquest;Primera vez? Sigue este orden</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pasos.map((p) => (
            <Link key={p.paso} href={p.url} className="block group">
              <div className={`border ${p.borderColor} rounded-xl p-4 bg-white dark:bg-gray-900/50 ${p.hoverBg} transition-all group-hover:shadow-md group-hover:-translate-y-0.5 h-full`}>
                <Badge className={`${p.badgeColor} text-xs mb-2`}>
                  Paso {p.paso}
                </Badge>
                <p className="font-semibold text-foreground text-sm">{p.titulo}</p>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{p.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Roadmap visual */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm text-muted-foreground py-1">
        <Link href="/toolkit" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
          <Calculator className="h-4 w-4 text-orange-500" />
          <span className="hidden sm:inline">Mates</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-1" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
          <Factory className="h-4 w-4 text-blue-500" />
          <span className="hidden sm:inline">Producci&oacute;n</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-2" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
          <DollarSign className="h-4 w-4 text-emerald-500" />
          <span className="hidden sm:inline">Costes</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-3" className="flex items-center gap-1 hover:text-violet-500 transition-colors">
          <TrendingUp className="h-4 w-4 text-violet-500" />
          <span className="hidden sm:inline">Oferta</span>
        </Link>
      </div>

      {/* Cards de temas */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {temas.map((tema) => (
          <Link key={tema.numero} href={tema.url} className="group">
            <Card className={`h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer border ${tema.borderColor} overflow-hidden`}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${tema.gradientFrom} ${tema.gradientTo}`} />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl ${tema.bgColor} transition-transform group-hover:scale-110`}>
                    <tema.icon className={`h-5 w-5 ${tema.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tema.ejercicios} ejercicios
                  </Badge>
                </div>
                <CardTitle className="text-lg">Tema {tema.numero}</CardTitle>
                <CardDescription className="font-medium text-foreground/80">
                  {tema.titulo}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/60 mb-3 italic leading-relaxed">
                  {tema.pregunta}
                </p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {tema.descripcion}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tema.temas.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Kit Matem&aacute;tico destacado */}
      <Link href="/toolkit" className="block group">
        <Card className="border-orange-200 dark:border-orange-800 transition-all group-hover:shadow-lg group-hover:-translate-y-0.5 cursor-pointer overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-amber-400 dark:from-orange-600 dark:to-amber-600" />
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 shrink-0 transition-transform group-hover:scale-110">
                  <Calculator className="h-6 w-6 text-orange-500" />
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold">Kit Matem&aacute;tico</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Derivadas, derivadas parciales y optimizaci&oacute;n explicadas desde el principio absoluto.
                    Si las matem&aacute;ticas te dan miedo, empieza aqu&iacute;.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <Badge variant="outline" className="text-xs">Derivadas</Badge>
                    <Badge variant="outline" className="text-xs">Derivadas parciales</Badge>
                    <Badge variant="outline" className="text-xs">Optimizaci&oacute;n</Badge>
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Sobre esta app */}
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Sobre esta aplicaci&oacute;n</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-3">
          <p className="leading-relaxed">
            Esta app resuelve <strong className="text-foreground">todos los ejercicios</strong> de Microeconom&iacute;a del curso,
            explicados como si nunca hubieras visto una derivada. Cada ejercicio incluye:
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Prerrequisitos</strong>: qu&eacute; necesitas saber antes de empezar, con enlaces directos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Paso a paso</strong>: cada c&aacute;lculo explicado con la regla matem&aacute;tica que se usa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Analog&iacute;as</strong>: cada concepto conectado con algo cotidiano que ya entiendes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Gr&aacute;ficos interactivos</strong>: visualiza las funciones, no solo los n&uacute;meros</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Conexiones</strong>: al final de cada ejercicio, c&oacute;mo conecta con lo que viene despu&eacute;s</span>
            </li>
          </ul>
          <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground/70">
            <span>12 ejercicios resueltos</span>
            <span>&middot;</span>
            <span>3 tests de autoevaluaci&oacute;n</span>
            <span>&middot;</span>
            <span>Kit Matem&aacute;tico completo</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
