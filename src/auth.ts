import { SvelteKitAuth } from "@auth/sveltekit";
//import GitHub from "@auth/sveltekit/providers/github";
import CredentialsProvider from "@auth/sveltekit/providers/credentials";

export const { handle, signIn, signOut } = SvelteKitAuth({
  secret: "x6W0XbdfGa7gnEfmnz8HCi4S0XSKo7yPekWRIxUnKQs=",
  session: {
    strategy: "jwt",
    generateSessionToken() {
      return crypto.randomUUID();
    },
  },
  cookies: {
    sessionToken: {
      name: "svelte.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax", // 개발 환경에서는 lax로 설정
        path: "/",
        secure: false,
      },
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //요청 샘플
      async authorize(
        credentials: Partial<Record<"username" | "password", unknown>>,
        req: Request
      ) {
        console.log("authorize in");
        return {
          id: "1",
          name: "testName",
          email: "test@a.com",
        }; //사용자 정보를 리턴, 원하는 방법으로 가공
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //사용자 정의 필드 추가
      }
      return token;
    },
    async session({ session, token }) {
      //사용자 정의 필드 추가
      return session;
    },
  },
});
