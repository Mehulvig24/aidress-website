import { useRef, useCallback, useEffect, useState } from "react";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = 0,
  className,
  style,
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angles, setAngles] = useState<number[]>(
    Array(rows * columns).fill(baseAngle)
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const cellWidth = rect.width / columns;
      const cellHeight = rect.height / rows;

      const newAngles: number[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          const cellCenterX = rect.left + c * cellWidth + cellWidth / 2;
          const cellCenterY = rect.top + r * cellHeight + cellHeight / 2;

          const dx = mouseX - cellCenterX;
          const dy = mouseY - cellCenterY;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

          newAngles.push(angle);
        }
      }

      setAngles(newAngles);
    },
    [rows, columns]
  );

  const handleMouseLeave = useCallback(() => {
    setAngles(Array(rows * columns).fill(baseAngle));
  }, [rows, columns, baseAngle]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement || document;
    parent.addEventListener("mousemove", handleMouseMove as EventListener);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove as EventListener);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        width: containerSize,
        height: containerSize,
        placeItems: "center",
        ...style,
      }}
    >
      {angles.map((angle, i) => (
        <div
          key={i}
          style={{
            width: lineWidth,
            height: lineHeight,
            backgroundColor: lineColor,
            borderRadius: "9999px",
            transform: `rotate(${angle}deg)`,
            transition: "transform 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}
