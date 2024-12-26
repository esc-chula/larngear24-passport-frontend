import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { axiosClient } from "@/libs/axios";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      profile(profile) {               
        return {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          id : profile.sub,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          image : profile.picture,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          email : profile.email,
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      // console.log(profile); // for dev : remove this to see your google_sub
      
      await axiosClient.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,{
        id : profile?.sub ?? "",
        email : profile?.email ?? "",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        image : profile?.picture?? ""
      });
      return true;
    },
    jwt: async ({ token, profile }) => {
      // Attach the profile ID (sub) to the JWT token if available
      if (profile) {
        token.sub = profile.sub ?? "";
      }
      return token;
    },
    session: ({ session, token  }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    })
  },
} satisfies NextAuthConfig;
