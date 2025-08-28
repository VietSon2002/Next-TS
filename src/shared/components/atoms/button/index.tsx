import React from 'react';

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({ as = 'button', children, ...props }: ButtonProps) {
  if (as === 'a') {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className="appointment-btn" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className="appointment-btn" {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
