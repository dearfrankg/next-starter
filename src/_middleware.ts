import { auth, BASE_PATH } from "@/auth";
import { NextResponse } from "next/server";

// when not one of these routes fire middleware
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|acme.svg|merch|about).*)",
  ],
};

// when not on landing page and not authorized then redirect to signIn
export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== "/") {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname,
        )}`,
        req.url,
      ),
    );
  }
});
