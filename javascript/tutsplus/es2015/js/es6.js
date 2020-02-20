'use strict';

(function () {

    console.log(Array.of('test'), [1, 2], {
        foo: 'bar'
    });

    function arrayFromArgs() {
        return Array.from(arguments);
    }

    console.log(arrayFromArgs('something', 'else'));

    let superheros = [{
        name: 'Peter Parker',
        superHeroName: 'Spiderman'
    }, {
        name: 'Bruce Wayne',
        superHeroName: 'Batman'
    }];

    function findByHeroName(name) {
        return superheros.find(function (item) {
            return item.superHeroName === name;
        });
    }

    console.log(findByHeroName('Batman'));

    function findByHeroIndex(name) {
        return superheros.findIndex(function (item) {
            return item.superHeroName === name;
        });
    }

    console.log(findByHeroIndex('Spiderman'));

    console.log(superheros.copyWithin(1, 0));


})();