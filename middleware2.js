export { auth as middleware } from "auth";
console.log("auth");

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
