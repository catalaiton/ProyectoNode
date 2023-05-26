var Bicicleta= require('../../models/bicicleta');

describe('Bicicleta.allBicis', ()=> {
    it('Comienza vacío', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', ()=> {
    it('Agregamos una', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1, 'rojo','urbana',[4.6281149,-74.0680332]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});