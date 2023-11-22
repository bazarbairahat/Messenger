import { withAuth } from "next-auth/middleware";
import { Antonio } from "next/font/google";

export default withAuth({
    pages: {
        signIn: "/"
    }
});

export const config = {
    matcher: [
        "/users/:path*",
        "/conversations/:path*"
    ]
};

