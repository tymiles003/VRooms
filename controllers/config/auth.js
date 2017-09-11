module.exports = {
  facebookAuth: {
    clientID: '896605267054808',
    clientSecret: '28f6a7d2842d5f9ba19e449131694902',
    callbackURL: 'https://crossorigin.me/http://localhost:3000/auth/facebook/callback',
  },
  twitterAuth: {
    consumerKey: 'sOM9aZpoEyNAXKqvEUHd2O7cN',
    consumerSecret: '6I1x0PgH41AxuqtAKcfRqYtWDMKNv0TBaaoegW3RP3o1ks7NPk',
    callbackURL: 'https://crossorigin.me/http://localhost:3000/auth/twitter/callback',
  },
  googleAuth: {
    //FOR DEV
    // clientID: '262575533252-sviar9bm39g5c4dnlb6erkpvjme4hit2.apps.googleusercontent.com',
    // clientSecret: '1K1fRgOmy1WJK4_Z8ycGRyuz',
    // callbackURL: 'https://crossorigin.me/http://localhost:5000/auth/google/callback',

    //FOR DEV KEYS-2
    // clientID: "430840990935-7u7n4qn2vkibch16l7akc0f67av9b55e.apps.googleusercontent.com",
    // clientSecret: "aPXCfvct60ACiushw3B4R8hm",
    // callbackURL: 'http://localhost:3000/auth/google/callback',

    //FOR PROD
    clientID: "243612288079-f5s6vep0ag5frfluh0l1bng60kkncsu8.apps.googleusercontent.com",
    clientSecret: "FVQWsYreVVDi1t_VAwV0_7_m",
    callbackURL: "/auth/google/callback"
    
  },
};
