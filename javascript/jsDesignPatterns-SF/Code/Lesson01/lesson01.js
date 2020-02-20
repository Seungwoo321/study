var obj = {
    firstName: "Jeremy",
    lastName: "McPeak"
};

obj.firstName = "Jeremy";
obj["lastName"] = "McPeak";

var firstName = obj["firstName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {
    value: "USA"
});

Object.defineProperties(obj, {
    twitter: {
        value: "jwmcpeak"
    },
    email: {
        value: "jwmcpeak@wdonline.com"
    }
});