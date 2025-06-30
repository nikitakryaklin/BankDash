import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { url, cookies } = request;

  const { pathname } = request.nextUrl;

  // Разрешаем доступ к публичным маршрутам
  const publicPaths = ["/login", "/favicon.ico", "/_next", "/api"];

  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  if (isPublic) {
    return NextResponse.next();
  }

  const sessions = cookies.get("token")?.value;

  const isAuthPage = url.includes("/auth/login");

  if (isAuthPage) {
    if (sessions) {
      return NextResponse.redirect(new URL("/", url));
    }

    return NextResponse.next();
  }

  if (!sessions) {
    return NextResponse.redirect(new URL("/auth/login", url));
  }
}

export const config = {
  matcher: ["/:path*"],
};
