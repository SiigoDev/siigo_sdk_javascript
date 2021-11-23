var _siigo = undefined;

function initialize(siigo)
{
    //console.log(siigo);
    if (_siigo == undefined)
    {
        siigo.initialize({
            basePath: "https://servicesqa.siigo.com/alliances/api/siigoapi", // https://services.siigo.com/alliances/api/siigoapi
            urlSignIn: "https://servicesqa.siigo.com/alliances/api/siigoapi-users/v1/sign-in",       // https://services.siigo.com/alliances/api/siigoapi-users/v1/sign-in
            userName: "empresa@apiv1.com",   // testname
            accessKey: "YjFjYTI0MDQtMDEwYS00MDBkLWFkNmQtMWM1YWI3YjZiNGYzOjJUKHYlMFgjV1o=", // euy3423uykwjehqwuywj
        });
        _siigo = siigo;
    }
    //console.log(_siigo);
    return _siigo;
}

exports._test = {
    initialize: initialize
}