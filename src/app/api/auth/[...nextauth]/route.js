import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  secret:process.env.SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks:{
    async session({session,token,user}){
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.uid = token.sub;
      
      return session;
  },
}

};export async function GET( req,res ) {
  return NextAuth(req,res,authOptions)
  }
  
  export async function POST( req,res ) {
  return NextAuth(req,res,authOptions)
  }

