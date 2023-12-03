import { routes } from "./core/configs/variables";

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/profile/events",
    "/profile/events/:id*",
    "/profile/events/add",
  ],
};
