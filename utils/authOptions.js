import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    //Invoked on succesful signin
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if user exists
      // 3. If not, add user to database
      // 4. Return true to allow sign in
    },
    // Modifies the session object
    async session({ session }) {
      // 1. get user from database
      // 2. assign the user id to the session
      // 3. retrun session
    },
  },
};
