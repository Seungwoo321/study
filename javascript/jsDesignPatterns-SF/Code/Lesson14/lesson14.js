require(["eventmanager"], function (evtman) {

    function foo(evt) {
        console.log(evt.message);
    }

    evtman.subscribe("test/foo", foo);

    evtman.publish("test/foo", { message: "Hello this is a custom event" });

    evtman.unsubscribe("test/foo", foo);

    evtman.publish("test/foo", { message: "this should not be seen" });




});