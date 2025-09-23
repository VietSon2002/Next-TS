import React from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & { label: string };

export const Select = ({ label, id, children, ...props }: Props) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select id={id} {...props}>
      {children}
    </select>
  </div>
);