import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-widest transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-light disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric text-white shadow-[0_0_0_0_rgba(54,96,242,0)] hover:shadow-[0_8px_30px_-6px_rgba(54,96,242,0.55)] hover:bg-electric-dark active:bg-electric-dark",
  secondary:
    "border border-fog-300/30 text-white hover:border-electric-light/70 hover:bg-white/5",
  ghost: "text-fog-200 hover:text-white",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
