import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDb from '@/db/connectDb';

export const authoptions =  NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  //   AppleProvider({
  //     clientId: process.env.APPLE_ID,
  //     clientSecret: process.env.APPLE_SECRET
  //   }),
  //   FacebookProvider({
  //     clientId: process.env.FACEBOOK_ID,
  //     clientSecret: process.env.FACEBOOK_SECRET
  //   }),
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_ID,
  //     clientSecret: process.env.GOOGLE_SECRET
  //   }),
  //   // Passwordless / email sign in
  //   EmailProvider({
  //     server: process.env.MAIL_SERVER,
  //     from: 'NextAuth.js <no-reply@example.com>'
  //   }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDb();
  
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          // Create a new user if they don't exist in the database
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
         
        } 
        return true;
      }
    },
  
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log(dbUser)
      if (dbUser) {
        session.user.name = dbUser.username;
      }
      return session;
    },
  },
})




export { authoptions as GET, authoptions as POST };