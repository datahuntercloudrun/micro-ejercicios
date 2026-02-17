"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Factory,
  DollarSign,
  TrendingUp,
  ChevronRight,
  GraduationCap,
  Home,
  Calculator,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

const navigation = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Kit Matem\u00e1tico",
    icon: Calculator,
    color: "text-orange-500",
    badge: "3",
    items: [
      { title: "Introducci\u00f3n", url: "/toolkit" },
      { title: "Derivadas desde cero", url: "/toolkit/derivadas" },
      { title: "Derivadas parciales", url: "/toolkit/derivadas-parciales" },
      { title: "Optimizaci\u00f3n", url: "/toolkit/optimizacion" },
    ],
  },
  {
    title: "Tema 1: Producci\u00f3n",
    icon: Factory,
    color: "text-blue-500",
    badge: "6",
    items: [
      { title: "Resumen Teor\u00eda", url: "/tema-1" },
      { title: "Ej.1 Isocuantas y productividades", url: "/tema-1/ejercicio-1" },
      { title: "Ej.2 Rendimientos a escala", url: "/tema-1/ejercicio-2" },
      { title: "Ej.3 Cobb-Douglas general", url: "/tema-1/ejercicio-3" },
      { title: "Ej.4 Rendimientos y PMgL", url: "/tema-1/ejercicio-4" },
      { title: "Ej.5 Funci\u00f3n con par\u00e1metros", url: "/tema-1/ejercicio-5" },
      { title: "Test de autoevaluaci\u00f3n", url: "/tema-1/test" },
    ],
  },
  {
    title: "Tema 2: Costes",
    icon: DollarSign,
    color: "text-emerald-500",
    badge: "4",
    items: [
      { title: "Resumen Teor\u00eda", url: "/tema-2" },
      { title: "Ej.1 Funciones de coste", url: "/tema-2/ejercicio-1" },
      { title: "Ej.2 M\u00ednimo CMe LP", url: "/tema-2/ejercicio-2" },
      { title: "Ej.3 Verdadero/Falso costes", url: "/tema-2/ejercicio-3" },
      { title: "Test de autoevaluaci\u00f3n", url: "/tema-2/test" },
    ],
  },
  {
    title: "Tema 3: Oferta",
    icon: TrendingUp,
    color: "text-violet-500",
    badge: "5",
    items: [
      { title: "Resumen Teor\u00eda", url: "/tema-3" },
      { title: "Ej.1 V/F empresa competitiva", url: "/tema-3/ejercicio-1" },
      { title: "Ej.2 Coste y oferta CP", url: "/tema-3/ejercicio-2" },
      { title: "Ej.3 Oferta LP e impuestos", url: "/tema-3/ejercicio-3" },
      { title: "Ej.4 Excedente del productor", url: "/tema-3/ejercicio-4" },
      { title: "Test de autoevaluaci\u00f3n", url: "/tema-3/test" },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 h-12 sm:h-14 flex items-center">
        <div className="flex items-center gap-2 w-full">
          <Link href="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpenMobile(false)}>
            <GraduationCap className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm font-semibold truncate">Microeconom&iacute;a — FBS &middot; UCM</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegaci&oacute;n</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) =>
                item.items ? (
                  <Collapsible
                    key={item.title}
                    defaultOpen={item.items?.some((sub) => pathname === sub.url || pathname.startsWith(sub.url + "/"))}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon className={`h-4 w-4 ${item.color || ""}`} />
                          <span className="flex-1 truncate">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto h-5 min-w-5 px-1 text-sm">
                              {item.badge}
                            </Badge>
                          )}
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((sub) => (
                            <SidebarMenuSubItem key={sub.url}>
                              <SidebarMenuSubButton asChild isActive={pathname === sub.url}>
                                <Link href={sub.url} onClick={() => setOpenMobile(false)}>
                                  <span>{sub.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url!} onClick={() => setOpenMobile(false)}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
