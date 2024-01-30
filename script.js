function search() {
    var input = document.getElementById('search-input').value;
    document.getElementById('results').innerHTML = 'Resultados para "' + input + '"';

    // Aquí puedes agregar la lógica para filtrar tus datos o realizar una solicitud a un servidor
}
// Obtén el modal
var modal = document.getElementById('myModal');

// Obtén la imagen e inserta dentro del modal - usa su "alt" como texto
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// var imgx = document.getElementById('myimagenexp');

// imgx.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() { 
  modal.style.display = "none";
}
