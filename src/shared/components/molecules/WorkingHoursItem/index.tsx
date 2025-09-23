import React from "react";

type Props = { day: string; time: string; last?: boolean };

export const WorkingHoursItem = ({ day, time, last }: Props) => (
  <div className={`working-hours-item ${last ? "last" : ""}`}>
    <span className="working-day">{day}</span>
    <span className="working-time">{time}</span>
  </div>
);
