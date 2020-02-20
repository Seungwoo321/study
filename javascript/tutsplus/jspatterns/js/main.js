require(
    ['factory/init', 'pubsub/init'],
    function (factory, pubsub) {
        'use strict';

        var examples = {
            factory: factory,
            pubsub: pubsub
        };

        window.runExample = function (example) {
            examples[example].init();
        }

    }
);