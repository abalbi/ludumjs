function Elemento() {
}
Elemento.prototype.avisar = function() {
  avisos = [];
  if (!this._id) {
    avisos.push('No tiene _id');
  }
  if (this._id && !this._id.match(/^[\d|a-z]+$/)) {
    avisos.push('El _id no es valido');
  }
  if (this._id && this.proyecto().existe_id(this._id)) {
    avisos.push('_id ya existe');
  }
  return avisos;
};

Elemento.prototype.id = function(valor) {
  if (valor) {
    this._id = valor;
  }
  return this._id;
};

Elemento.prototype.proyecto = function(valor) {
  if (valor) {
    this._proyecto = valor;
  }
  return this._proyecto;
};

Elemento.prototype.nombre = function(valor) {
  if (valor) {
    this._nombre = valor;
    if (!this._id) {
      var id = valor;
      id = id.toLowerCase().replace(/[^\d|a-z]/,'');
      this.id(id);
    }
  }
  return this._nombre;
};
