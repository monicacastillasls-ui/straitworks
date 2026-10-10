import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

// Sends visitors without a language prefix to /en or /es, based on their browser language.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const accepted = request.headers.get("accept-language") ?? "";
  const preferred = accepted.toLowerCase().startsWith("es") ? "es" : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)"],
};
