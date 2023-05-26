var Bicicleta = function(id, color, modelo, ubicacion)
{
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}

Bicicleta.prototype.toSttring= function(){
    return 'id: '+this.id+' | color: '+this.color;

}

Bicicleta.allBicis =[];//agrega la bicicleta
Bicicleta.add =function(aBici){
    Bicicleta.allBicis.push(aBici);
}


Bicicleta.findById= function(aBiciId){//busca la bicicleta 
    var aBici= Bicicleta.allBicis.find(x=> x.id == aBiciId);
    if(aBici)
       return aBici;
    else 
       throw new Error (`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById= function(aBiciId){//eliminar bicicleta
    
    for(var i=0; i<Bicicleta.allBicis.length;i++){
        if(Bicicleta.allBicis[i].id==aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

/*
var a = new Bicicleta(1, 'rojo','urbana',[4.6281149,-74.0680332]);
var b = new Bicicleta(2, 'blanca','urbana',[4.5794549,-74.160091]);
Bicicleta.add(a);
Bicicleta.add(b);
*/

module.exports=Bicicleta;