import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
const Negotiator = require("negotiator");

let locales = ["en", "fr"];

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  let languages = new Negotiator(request);
  let locales = ["en", "fr"];
  let defaultLocale = "fr";

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  console.log(request);
  if (request.nextUrl.pathname == "/icon.png") return;

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // const locale = getLocale(request);

    const locale = "fr";
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    console.log(">> " + new URL(`/${locale}${pathname}`, request.nextUrl.href));
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.nextUrl.href));
    // return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // "/",
  ],
};

