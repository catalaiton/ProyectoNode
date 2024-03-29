var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bicicletaSchema = new Schema({
    code: Number,
    color: String,
    modelo: String,
    ubicacion:{
        type: [Number], index:{ type: '2dsphere', sparse:true}
    }
});

bicicletaSchema.statics.createInstance = function(code,color,modelo,ubicacion){
    return new this({
        code: code,
        color: color,
        modelo : modelo,
        ubicacion : ubicacion
    });
};


bicicletaSchema.methods.toSttring = function(){
    return 'code: '+this.code + '| color: '+this.color;
};

bicicletaSchema.statics.allBicis = function(cb){
    return this.find({}, cb);
};

module.exports = mongoose.model('Bicicleta', bicicletaSchema);

