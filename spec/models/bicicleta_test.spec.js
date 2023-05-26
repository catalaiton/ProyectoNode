var Bicicleta= require('../../models/bicicleta');

describe('Bicicleta.allBicis', ()=> {
    it('Comienza vacío', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});