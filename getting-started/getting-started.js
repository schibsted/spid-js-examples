/*global SPiD*/


SPiD.event.subscribe('SPiD.login', function(data) { console.log("SPiD.login", data); });
SPiD.event.subscribe('SPiD.logout', function(data) { console.log("SPiD.logout", data); });
SPiD.event.subscribe('SPiD.sessionChange', function(data) { console.log("SPiD.sessionChange", data); });

//Initiate SDK
SPiD.init({
    client_id: "52f8e3d9efd04bb749000000",
    server: "identity-pre.schibsted.com"
});
// Check session
SPiD.hasSession();
