import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export const Input = ({ label, id, ...props }: Props) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
  </div>
);
