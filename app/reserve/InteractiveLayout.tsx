"use client";

import { useState } from "react";
import type { Chair, FloorPlan, FloorTableDefinition, ReservationTable } from "./types";

interface InteractiveLayoutProps {
  floorPlan: FloorPlan;
  tables: ReservationTable[];
  selectedTableId: string | null;
  onSelectTable: (table: ReservationTable) => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function tableCenter(t: FloorTableDefinition) {
  if (t.shape === "circle") return { cx: t.cx!, cy: t.cy! };
  return { cx: t.x! + t.w! / 2, cy: t.y! + t.h! / 2 };
}

function tableColors(status: string | undefined, hovered: boolean, isSelected: boolean) {
  let fill = "#141d26";
  let stroke = "#ffffff33";
  let text = "#ffffff";
  let dropShadow = false;

  if (status === "vacant") {
    fill = hovered ? "#2ed57333" : "#2ed57311";
    stroke = "#2ed573";
    text = "#2ed573";
  } else if (status === "occupied") {
    fill = hovered ? "#4cc9f033" : "#4cc9f011";
    stroke = "#4cc9f0";
    text = "#4cc9f0";
  } else if (status === "reserved") {
    fill = hovered ? "#f7b73133" : "#f7b73111";
    stroke = "#f7b731";
    text = "#f7b731";
  }

  if (isSelected) {
    stroke = "#cc0000";
    dropShadow = true;
  }

  return { fill, stroke, text, dropShadow };
}

// ─── Chair SVG element ────────────────────────────────────────────────────────

function ChairEl({ c }: { c: Chair }) {
  return <rect x={c.x} y={c.y} width={c.w} height={c.h} rx={c.rx ?? 2} fill="#2a3642" stroke="#ffffff33" strokeWidth={0.8} />;
}

// ─── Table SVG group ──────────────────────────────────────────────────────────

function TableEl({
  tableDef, tableData, hovered, isSelected, onClick, onMouseEnter, onMouseLeave,
}: {
  tableDef: FloorTableDefinition; tableData?: ReservationTable; hovered: boolean; isSelected: boolean;
  onClick: () => void; onMouseEnter: () => void; onMouseLeave: () => void;
}) {
  const status = tableData?.status || "vacant";
  const { fill, stroke, text, dropShadow } = tableColors(status, hovered, isSelected);
  const { cx, cy } = tableCenter(tableDef);
  
  // Custom display logic based on status
  let label = `${tableData?.seats ?? tableDef.seats} seats`;
  if (status === "reserved" && tableData?.time) label = `R: ${tableData.time}`;
  if (status === "occupied") label = "Occupied";

  const cursor = "pointer";
  const filter = dropShadow ? "drop-shadow(0 0 6px rgba(204,0,0,0.8))" : "none";

  return (
    <>
      {tableDef.chairs.map((c, i) => <ChairEl key={i} c={c} />)}
      <g onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ cursor, filter }} className="transition-all duration-300">
        {tableDef.shape === "circle"
          ? <circle cx={tableDef.cx} cy={tableDef.cy} r={tableDef.r} fill={fill} stroke={stroke} strokeWidth={isSelected ? 2 : 1.5} />
          : <rect x={tableDef.x} y={tableDef.y} width={tableDef.w} height={tableDef.h} rx={4} fill={fill} stroke={stroke} strokeWidth={isSelected ? 2 : 1.5} />
        }
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize={13} fontWeight={600} fill={text} pointerEvents="none" className="font-mono">{tableDef.id}</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize={9} fill={text} pointerEvents="none" className="uppercase tracking-wider opacity-80">{label}</text>
      </g>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InteractiveLayout({ floorPlan, tables, selectedTableId, onSelectTable }: InteractiveLayoutProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full h-[1000px] overflow-x-auto overflow-y-hidden border border-white/5 rounded-3xl bg-[#091118]/80 backdrop-blur-md shadow-xl no-scrollbar">
      <div className="min-w-[620px] h-[1000px] p-4 flex justify-center">
        <svg viewBox="0 0 620 800" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
          
          {/* Room shell */}
          <rect x={30} y={20} width={560} height={740} fill="#0d151c" stroke="#333" strokeWidth={2}/>
          <rect x={40} y={30} width={540} height={720} fill="#091118"/>
          {/* Outer frame */}
          <rect x={5} y={5} width={610} height={770} fill="none" stroke="#ffffff66" strokeWidth={2} rx={8} />
          {/* Group translation for spacing */}
          <g transform="translate(10,10)">
          {/* Kitchen */}
          <rect x={420} y={30} width={160} height={170} fill="#111a22" stroke="#222" strokeWidth={1}/>
          <text x={500} y={105} textAnchor="middle" fontSize={11} fill="#555" className="font-mono uppercase tracking-widest">Kitchen /</text>
          <text x={500} y={120} textAnchor="middle" fontSize={11} fill="#555" className="font-mono uppercase tracking-widest">Service</text>

          {/* Bar stools */}
          <rect x={280} y={30} width={140} height={12} fill="#1a242d" stroke="#222" strokeWidth={1}/>
          {[296,316,336,356].map(cx=><circle key={cx} cx={cx} cy={52} r={7} fill="#2a3642" stroke="#444" strokeWidth={1}/>)}
          {[70,88,106,124,142,160,178].map(cy=><circle key={cy} cx={296} cy={cy} r={7} fill="#2a3642" stroke="#444" strokeWidth={1}/>)}
          <text x={340} y={130} textAnchor="middle" fontSize={10} fill="#666" className="font-mono uppercase tracking-widest">Bar</text>

          {/* POS */}
          <rect x={400} y={200} width={72} height={46} fill="#1a242d" stroke="#333" strokeWidth={1} rx={3}/>
          <text x={436} y={227} textAnchor="middle" fontSize={12} fill="#666" fontWeight={500} className="font-mono uppercase tracking-widest">POS</text>

          {/* WC */}
          <rect x={40} y={655} width={100} height={80} fill="#111a22" stroke="#222" strokeWidth={1}/>
          <text x={90} y={700} textAnchor="middle" fontSize={12} fill="#555" className="font-mono uppercase tracking-widest">WC</text>

          {/* Station */}
          <rect x={150} y={720} width={310} height={28} fill="#1a242d" stroke="#333" strokeWidth={1} rx={2}/>
          <text x={300} y={739} textAnchor="middle" fontSize={11} fill="#666" className="font-mono uppercase tracking-widest">Station</text>

          {/* Windows */}
          <rect x={100} y={26} width={55} height={8} fill="#102a43" stroke="#243b53" strokeWidth={1} rx={2}/>
          <text x={127} y={22} textAnchor="middle" fontSize={10} fill="#444">W₁</text>
          <rect x={220} y={26} width={55} height={8} fill="#102a43" stroke="#243b53" strokeWidth={1} rx={2}/>
          <text x={247} y={22} textAnchor="middle" fontSize={10} fill="#444">W₂</text>

          {/* Entrance */}
          <rect x={572} y={330} width={18} height={170} fill="#1a242d" stroke="#333" strokeWidth={1}/>
          <text x={581} y={415} textAnchor="middle" fontSize={10} fill="#555" transform="rotate(90,581,415)" className="font-mono uppercase tracking-widest">ENTS</text>

          {/* T5 circle chairs */}
         {([
  [140,338],[187,358],[207,405],[187,452],
  [140,472],[93,452],[73,405],[93,358]
] as [number,number][]).map(([cx,cy])=>(
  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={7} fill="#2a3642" stroke="#ffffff33" strokeWidth={0.8}/>
))}

          {/* Divider: T6 | T10 */}
          <rect x={376} y={335} width={8} height={125} fill="#1a242d" stroke="#333" strokeWidth={0.5} rx={1}/>

          {/* Divider: C1 section | T15/T17/T19 */}
          <rect x={270} y={478} width={10} height={160} fill="#1a242d" stroke="#333" strokeWidth={0.8} rx={1}/>
          {/* C1 column + 3 chairs */}
          <rect x={240} y={490} width={12} height={18} rx={2} fill="#2a3642" stroke="#ffffff33" strokeWidth={0.8}/>
          <rect x={240} y={520} width={12} height={18} rx={2} fill="#2a3642" stroke="#ffffff33" strokeWidth={0.8}/>
          <rect x={240} y={550} width={12} height={18} rx={2} fill="#2a3642" stroke="#ffffff33" strokeWidth={0.8}/>
          <rect x={254} y={480} width={14} height={110} fill="#1a242d" stroke="#333" strokeWidth={1} rx={2}/>
          <text x={261} y={565} textAnchor="middle" fontSize={9} fill="#555" transform="rotate(90,261,565)" className="font-mono uppercase tracking-widest">C1</text>

          {/* All tables */}
          {floorPlan.tables.map((tableDef) => {
            const tableData = tables.find(t => t.id === tableDef.id);
            const tableElement = (
              <TableEl
                key={tableDef.id}
                tableDef={tableDef}
                tableData={tableData}
                hovered={hoveredId === tableDef.id}
                isSelected={selectedTableId === tableDef.id}
                onClick={() => {
                  if (tableData) onSelectTable(tableData);
                }}
                onMouseEnter={() => setHoveredId(tableDef.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            );
            const isRightWing = tableDef.zone === "Right Wing";
            return (
              <g key={tableDef.id} transform={isRightWing ? "translate(25,0)" : "translate(8,8)"}>
                {tableElement}
              </g>
            );
          })}
          </g>
        </svg>
      </div>
    </div>
  );
}