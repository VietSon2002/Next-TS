import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type TextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export default function Text<T extends ElementType = "span">({
  as,
  children,
  className,
  ...props
}: TextProps<T>) {
  const Tag = as || "span";
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
