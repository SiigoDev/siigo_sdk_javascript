var _siigo = undefined;

async function initialize(siigo)
{
    if (_siigo == undefined)
    {
      siigo.initialize({
        basePath: process.env.BASE_PATH, 
        urlSignIn: process.env.URL_SIGN_IN
    });
    
    await siigo.signIn({
        userName: process.env.USER_NAME,
        accessKey: process.env.ACCESS_KEY
    });

        _siigo = siigo;
    }
    return _siigo;
}

exports._test = {
    initialize: initialize
}