var assert = require('assert');

exports.handler = function(event, context) {
    // Log the context, it contains details about the function's execution
    console.log("Context: %j", context);
    // Log the event, it contains data and parameters passed to the function
    console.log("Event: %j",event);

    try {
        // Simple example to show that the assert library was successfully included
        assert.strictEqual(typeof context, "object", "context is not a valid object");
    } catch(e) {
        // Catch the assertion error, and fail the method's execution
        console.error(e);
        context.fail(e);
        return;
    }

    // Create a static representation of our users, and return that
    var payload = {
        "10000001": {
            "name": "Bruce Wayne",
            "email": "im.batman@thebatcave.io"
        },
        "10000002": {
            "name": "Harvey Dent",
            "email": "two.face@gotham.gov",
        },
        "10000003": {
            "name": "Lucius Fox",
            "email": "fox@wayne-enterprises.com"
        }
    }

    // If the event has a name and email in it, add it to the returned payload
    if(event.name !== undefined && event.email !== undefined) {
        payload["10000004"] = {
            "name": event.name,
            "email": event.email
        }
    }

    // Send the payload back
    context.succeed(payload);
};