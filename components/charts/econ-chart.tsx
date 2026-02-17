"use client";

import { Mafs, Coordinates } from "mafs";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode, useRef, useCallback } from "react";

export const COLORS = {
  blue: "#3b82f6",
  emerald: "#10b981",
  rose: "#f43f5e",
  violet: "#8b5cf6",
  amber: "#f59e0b",
  cyan: "#06b6d4",
  slate: "#64748b",
  indigo: "#6366f1",
};

interface EconChartProps {
  children: ReactNode;
  xRange: [number, number];
  yRange: [number, number];
  height?: number;
  /** Callback with math coordinates when mouse moves over chart */
  onMouseMath?: (point: { x: number; y: number } | null) => void;
  /** padding around viewBox - default 0.5 */
  padding?: number;
}

export function EconChart({
  children,
  xRange,
  yRange,
  height,
  onMouseMath,
  padding = 0.5,
}: EconChartProps) {
  const isMobile = useIsMobile();
  const h = height ?? (isMobile ? 280 : 380);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!onMouseMath || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const mathX = xRange[0] + relX * (xRange[1] - xRange[0]);
      const mathY = yRange[1] - relY * (yRange[1] - yRange[0]);
      onMouseMath({ x: mathX, y: mathY });
    },
    [onMouseMath, xRange, yRange]
  );

  const handleMouseLeave = useCallback(() => {
    onMouseMath?.(null);
  }, [onMouseMath]);

  return (
    <div
      ref={containerRef}
      className="econ-chart rounded-lg overflow-hidden border border-border my-3"
      onMouseMove={onMouseMath ? handleMouseMove : undefined}
      onMouseLeave={onMouseMath ? handleMouseLeave : undefined}
    >
      <Mafs
        height={h}
        viewBox={{ x: xRange, y: yRange, padding }}
        preserveAspectRatio={false}
        pan={false}
      >
        <Coordinates.Cartesian />
        {children}
      </Mafs>
    </div>
  );
}

interface LegendItem {
  label: string;
  color: string;
  dashed?: boolean;
}

export function ChartLegend({ items }: { items: LegendItem[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center mt-1 mb-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <svg width="18" height="4" className="shrink-0">
            <line
              x1="0"
              y1="2"
              x2="18"
              y2="2"
              stroke={item.color}
              strokeWidth="2.5"
              strokeDasharray={item.dashed ? "4 3" : undefined}
            />
          </svg>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
