var Bicicleta= require('../../models/bicicleta');

beforeEach(()=>{ Bicicleta.allBicis = [];});

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

describe('Bicicleta.findById', ()=> {
    it('Debe devolver la bici con id 1', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1, 'Verde','Urbana');
        var aBici2 = new Bicicleta(2, 'Dorada','Montaña');
        Bicicleta.add(aBici);   
        Bicicleta.add(aBici2);
        
        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});
