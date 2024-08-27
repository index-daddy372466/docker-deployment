const { createProxyMiddleware } = require("http-proxy-middleware"),
    client = "http://localhost:4447";

// configure proxy for Authentication Server (docker container)
function proxyClient(app){
// pull home, login & logout routes from client server
// auth server is using passport and sessions within these routes

}

module.exports = proxyClient