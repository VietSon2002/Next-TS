import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string };

export const Textarea = ({ label, id, ...props }: Props) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...props} />
  </div>
);
