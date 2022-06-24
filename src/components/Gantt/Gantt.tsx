import React from "react";

export interface GanttProps {
  label: string;
  start_date?: string;
  due_date?: string;
}

const Gantt = (p: GanttProps) => {
  return (
    <>
      Hello World <br />
      {p.label} <br />
      {p.start_date} <br />
      {p.due_date} <br />
    </>
  );
};

export default Gantt;
