  // ===========================
  // BLOQUE 1 - ARREGLOS DE OBJETOS
  // ===========================

  // 1) Registrar libros en un arreglo
  function registrarLibros() {
    var libros = [
      {titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967},
      {titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605},
      {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943},
      {titulo: "Rayuela", autor: "Julio Cortázar", año: 1963},
      {titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", año: 1963}
    ];
    return libros;
  }

  function SerieRegistrarLibros() {
    var lista = registrarLibros();
    console.log("Lista de libros registrados:");
    for (var i = 0; i < lista.length; i++) {
      console.log(
        (i+1) + ". " + lista[i].titulo + " - " + lista[i].autor + " (" + lista[i].año + ")"
      );
    }
  }
  SerieRegistrarLibros();


  // 2) Buscar un libro por título
  function buscarLibroPorTitulo(libros, titulo) {
    for (var i = 0; i < libros.length; i++) {
      if (libros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
        return libros[i];
      }
    }
    return null;
  }

  function SerieBuscarLibro() {
    var lista = registrarLibros();
    var titulo = "El Principito";
    var encontrado = buscarLibroPorTitulo(lista, titulo);
    if (encontrado) {
      console.log("Se encontró: " + encontrado.titulo + " de " + encontrado.autor);
    } else {
      console.log("No existe el libro '" + titulo + "'");
    }
  }
  SerieBuscarLibro();


  // 3) Contar libros publicados después del año 2000
  function contarLibrosRecientes(libros) {
    var cont = 0;
    for (var i = 0; i < libros.length; i++) {
      if (libros[i].año > 2000) cont++;
    }
    return cont;
  }

  function SerieContarRecientes() {
    var lista = registrarLibros();
    console.log("Libros publicados después del 2000: " + contarLibrosRecientes(lista));
  }
  SerieContarRecientes();


  // 4) Concatenar todos los títulos en una sola cadena
  function concatenarTitulos(libros) {
    var titulos = [];
    for (var i = 0; i < libros.length; i++) {
      titulos.push(libros[i].titulo);
    }
    return titulos.join(" – ");
  }

  function SerieConcatenarTitulos() {
    var lista = registrarLibros();
    console.log("Títulos concatenados: " + concatenarTitulos(lista));
  }
  SerieConcatenarTitulos();


  // 5) Actualizar el año de publicación de un libro
  function actualizarAño(libros, titulo, nuevoAño) {
    for (var i = 0; i < libros.length; i++) {
      if (libros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
        libros[i].año = nuevoAño;
        return true;
      }
    }
    return false;
  }

  function SerieActualizarAño() {
    var lista = registrarLibros();
    var titulo = "Rayuela";
    var nuevoAño = 1970;
    var actualizado = actualizarAño(lista, titulo, nuevoAño);
    if (actualizado) {
      console.log("Se actualizó el año de '" + titulo + "'.");
    } else {
      console.log("No se encontró el libro '" + titulo + "'");
    }
    SerieRegistrarLibros();
  }
  SerieActualizarAño();


  // ===========================
  // BLOQUE 2 - PILA DE OBJETOS
  // ===========================

  // Representaremos la pila con un arreglo []
  function crearPila() {
    return [];
  }

  // 6) Implementar una pila de libros (push)
  function pushLibro(pila, libro) {
    pila.push(libro);
  }

  function SeriePushLibros() {
    var pila = crearPila();
    pushLibro(pila, {titulo: "Libro A", autor: "Autor A", año: 2001});
    pushLibro(pila, {titulo: "Libro B", autor: "Autor B", año: 2010});
    pushLibro(pila, {titulo: "Libro C", autor: "Autor C", año: 2015});
    console.log("Pila de libros:", pila);
    return pila;
  }
  var pilaEjemplo = SeriePushLibros();


  // 7) Eliminar el último libro ingresado (pop)
  function popLibro(pila) {
    return pila.pop();
  }

  function SeriePopLibro() {
    var pila = SeriePushLibros();
    var eliminado = popLibro(pila);
    console.log("Libro eliminado:", eliminado);
    console.log("Pila después del pop:", pila);
  }
  SeriePopLibro();


  // 8) Ver el libro en la cima de la pila (peek)
  function peekLibro(pila) {
    if (pila.length === 0) return null;
    return pila[pila.length - 1];
  }

  function SeriePeekLibro() {
    var pila = SeriePushLibros();
    console.log("Libro en la cima:", peekLibro(pila));
  }
  SeriePeekLibro();


  // 9) Verificar si la pila está vacía (isEmpty)
  function isEmpty(pila) {
    return pila.length === 0;
  }

  function SerieIsEmpty() {
    var pila = crearPila();
    console.log(isEmpty(pila) ? "La pila está vacía" : "La pila tiene " + pila.length + " libros");

    var pila2 = SeriePushLibros();
    console.log(isEmpty(pila2) ? "La pila está vacía" : "La pila tiene " + pila2.length + " libros");
  }
  SerieIsEmpty();


  // 10) Vaciar completamente la pila
  function vaciarPila(pila) {
    while (!isEmpty(pila)) {
      pila.pop();
    }
  }

  function SerieVaciarPila() {
    var pila = SeriePushLibros();
    vaciarPila(pila);
    console.log("La pila se ha vaciado completamente. Tamaño actual = " + pila.length);
  }
(function() {
  // ===========================
  // BLOQUE 2 - PILA DE OBJETOS
  // ===========================

  // Representaremos la pila con un arreglo []
  function crearPila() {
    return [];
  }

  // 6) Implementar una pila de libros (push)
  function pushLibro(pila, libro) {
    pila.push(libro);
  }

  function SeriePushLibros() {
    var pila = crearPila();
    pushLibro(pila, {titulo: "Libro A", autor: "Autor A", año: 2001});
    pushLibro(pila, {titulo: "Libro B", autor: "Autor B", año: 2010});
    pushLibro(pila, {titulo: "Libro C", autor: "Autor C", año: 2015});
    console.log("Pila de libros después de push:", pila);
    return pila;
  }
  SeriePushLibros();


  // 7) Eliminar el último libro ingresado (pop)
  function popLibro(pila) {
    return pila.pop();
  }

  function SeriePopLibro() {
    var pila = SeriePushLibros();
    var eliminado = popLibro(pila);
    console.log("Libro eliminado con pop:", eliminado);
    console.log("Pila después del pop:", pila);
  }
  SeriePopLibro();


  // 8) Ver el libro en la cima de la pila (peek)
  function peekLibro(pila) {
    if (pila.length === 0) return null;
    return pila[pila.length - 1];
  }

  function SeriePeekLibro() {
    var pila = SeriePushLibros();
    console.log("Libro en la cima con peek:", peekLibro(pila));
  }
  SeriePeekLibro();


  // 9) Verificar si la pila está vacía (isEmpty)
  function isEmpty(pila) {
    return pila.length === 0;
  }

  function SerieIsEmpty() {
    var pilaVacia = crearPila();
    console.log(isEmpty(pilaVacia) ? "La pila está vacía" : "La pila tiene " + pilaVacia.length + " libros");

    var pilaConLibros = SeriePushLibros();
    console.log(isEmpty(pilaConLibros) ? "La pila está vacía" : "La pila tiene " + pilaConLibros.length + " libros");
  }
  SerieIsEmpty();


  // 10) Vaciar completamente la pila
  function vaciarPila(pila) {
    while (!isEmpty(pila)) {
      pila.pop();
    }
  }

  function SerieVaciarPila() {
    var pila = SeriePushLibros();
    vaciarPila(pila);
    console.log("La pila se ha vaciado completamente. Tamaño actual = " + pila.length);
  }
  SerieVaciarPila();

  // FIN BLOQUE 2
})();


