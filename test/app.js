import * as SiigoAPI from "../src/index.js";
import dotenv from 'dotenv';
dotenv.config();

let SiigoApiInstance = undefined;

const initialize = async () => {
  if (SiigoApiInstance) return SiigoApiInstance;

  SiigoAPI.initialize({
    basePath: process.env.BASE_PATH,
    urlSignIn: process.env.URL_SIGN_IN,
  });

  await SiigoAPI.signIn({
    userName: process.env.USER_NAME,
    accessKey: process.env.ACCESS_KEY,
  });

  SiigoApiInstance = SiigoAPI;

  return SiigoApiInstance;
};

export default { initialize }
