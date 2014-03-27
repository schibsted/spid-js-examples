/*global VGS*/

VGS.Event.subscribe("auth.login", function (data) { console.log("auth.login", data); });
VGS.Event.subscribe("auth.logout", function (data) { console.log("auth.logout", data); });

VGS.Event.subscribe("auth.sessionChange", function (data) {
    console.log("auth.sessionChange", data);
    var output = document.getElementById("spid");

    if (!data.session) {
        output.innerHTML = "Welcome. Please <a href=\"" + VGS.getLoginURI() + "\">log in</a>";
    } else {
        output.innerHTML = "Welcome <a href=\"" + VGS.getAccountURI() + "\">" +
            data.session.displayName + "</a>" +
            " <a href=\"" + VGS.getLogoutURI() + "\">Log out</a>";
    }
});

VGS.init({
    client_id: "52f8e3d9efd04bb749000000",
    server: "stage.payment.schibsted.no",
    prod: false
});
