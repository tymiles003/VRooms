module.exports = {

  dev:{
      facebookAuth: {
      // clientID: '896605267054808',
      // clientSecret: '28f6a7d2842d5f9ba19e449131694902',
      // callbackURL: 'http://localhost:3000/auth/facebook/callback',

      //FOR DEV KEY-2 (localhost:5000)
      clientID: "483655208680948",
      clientSecret: "094a252715b28a6a28e374940c6eb2c1",
      callbackURL: "http://localhost:5000/auth/facebook/callback",

    },
    twitterAuth: {
      // consumerKey: 'sOM9aZpoEyNAXKqvEUHd2O7cN',
      // consumerSecret: '6I1x0PgH41AxuqtAKcfRqYtWDMKNv0TBaaoegW3RP3o1ks7NPk',
      // callbackURL: 'http://localhost:3000/auth/twitter/callback',

      //FOR DEV (localhost:5000)
      consumerKey:"eEEAkUWKKLjmjkdjd0miJoJT3",
      consumerSecret: "4obixqyTaY9lV5rZ51Q6nt7UCYoeFEcmn3IB9Rc4j8oyH5oTQ0",
      callbackURL: "http://localhost:5000/auth/twitter/callback",
    },
    googleAuth: {
      //FOR DEV
      // clientID: '262575533252-sviar9bm39g5c4dnlb6erkpvjme4hit2.apps.googleusercontent.com',
      // clientSecret: '1K1fRgOmy1WJK4_Z8ycGRyuz',
      // callbackURL: 'http://localhost:3000/auth/google/callback',

      // FOR DEV KEYS-2
      clientID: "558665895680-g5i3n65cjg6l0i70dp9h10g1un9da1u5.apps.googleusercontent.com",
      clientSecret: "fN3WYYvf5rusPKpp-6yGIlZr",
      callbackURL: 'http://localhost:5000/auth/google/callback',
    }
  },
  prod:{
      facebookAuth: {
      //FOR PROD
      clientID: "563584833973204",
      clientSecret: "901013dc65456fc9529e8079f2cb8d2d",
      callbackURL: "https://v-rooms.herokuapp.com/auth/facebook/callback"
    },
    twitterAuth: {
      //FOR PROD
      consumerKey:"jKkqhq6jTHApaoLgkbUBnkRtQ",
      consumerSecret: "7yKNaRVVI4bhlpkNsBbB69dBwbHrf3KZEot5K2Phjhv1ikE99L",
      callbackURL: "https://v-rooms.herokuapp.com/auth/twitter/callback",

    },
    googleAuth: {
      //FOR PROD
      clientID: "243612288079-f5s6vep0ag5frfluh0l1bng60kkncsu8.apps.googleusercontent.com",
      clientSecret: "FVQWsYreVVDi1t_VAwV0_7_m",
      callbackURL: "https://v-rooms.herokuapp.com/auth/google/callback"
    }
  }

};
