export {};

declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
  }

  interface HTMLScriptElement {
    chatbotId?: string;
    domain?: string;
  }
}

// ─── Image module declarations ───────────────────────────────────
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.webp" {
  const value: any;
  export default value;
}

// ─── Next.js module declarations ─────────────────────────────────
// These are needed because the installed next package may not ship
// its .d.ts files properly (known issue with certain npm versions).
declare module "next" {
  export type Metadata = {
    title?: string;
    description?: string;
    keywords?: string;
    authors?: Array<{ name?: string; url?: string }>;
    openGraph?: Record<string, any>;
    twitter?: Record<string, any>;
    [key: string]: any;
  };
  export type { NextPage } from "next/types";
}

declare module "next/link" {
  import React from "react";
  export interface LinkProps {
    href: string | { pathname?: string; query?: Record<string, any> };
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module "next/image" {
  import React from "react";
  export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }
  export interface ImageProps {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: any;
    quality?: number;
    priority?: boolean;
    loading?: "lazy" | "eager";
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    unoptimized?: boolean;
    className?: string;
    style?: React.CSSProperties;
    sizes?: string;
    [key: string]: any;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module "next/navigation" {
  export function useRouter(): {
    push: (url: string, options?: any) => void;
    replace: (url: string, options?: any) => void;
    refresh: () => void;
    back: () => void;
    forward: () => void;
    prefetch: (url: string) => void;
  };
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
  export function useParams(): Record<string, string | string[]>;
  export function redirect(url: string, type?: any): never;
  export function notFound(): never;
}

declare module "next/server" {
  export class NextRequest extends Request {
    nextUrl: URL;
    cookies: any;
    headers: Headers;
    geo?: any;
    ip?: string;
    url: string;
  }
  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
    static redirect(url: string | URL, status?: number): NextResponse;
    static rewrite(url: string | URL): NextResponse;
    static next(init?: any): NextResponse;
    cookies: any;
  }
}

declare module "next/font/google" {
  interface FontOptions {
    subsets?: string[];
    weight?: string | string[];
    style?: string | string[];
    display?: string;
    variable?: string;
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
  }
  interface FontResult {
    className: string;
    style: { fontFamily: string };
    variable?: string;
  }
  export function Outfit(options?: FontOptions): FontResult;
  export function Inter(options?: FontOptions): FontResult;
  export function Roboto(options?: FontOptions): FontResult;
  // Generic catch-all for any Google font
  const _default: (options?: FontOptions) => FontResult;
  export default _default;
}

// ─── Third-party module declarations ─────────────────────────────
declare module "lucide-react" {
  import React from "react";
  interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }
  type Icon = React.FC<IconProps>;

  export const ArrowLeft: Icon;
  export const ChevronDown: Icon;
  export const Check: Icon;
  export const Copy: Icon;
  export const History: Icon;
  export const Home: Icon;
  export const Loader: Icon;
  export const Loader2: Icon;
  export const Mail: Icon;
  export const Menu: Icon;
  export const Moon: Icon;
  export const Phone: Icon;
  export const Search: Icon;
  export const Settings: Icon;
  export const Sun: Icon;
  export const X: Icon;
  export const Zap: Icon;
  export const Star: Icon;
  export const ChevronRight: Icon;
  export const ChevronLeft: Icon;
  export const ChevronUp: Icon;
  export const Plus: Icon;
  export const Minus: Icon;
  export const Edit: Icon;
  export const Trash: Icon;
  export const User: Icon;
  export const LogOut: Icon;
  export const ExternalLink: Icon;
  export const Github: Icon;
  export const Twitter: Icon;
  export const WalletCards: Icon;
  export const LayoutDashboard: Icon;
  export const FileClock: Icon;
  export const Shield: Icon;
  export const CreditCard: Icon;
  // Catch-all for any icon not listed above
  const _default: Icon;
  export default _default;
}

declare module "lucide" {
  export * from "lucide-react";
}

declare module "framer-motion";
