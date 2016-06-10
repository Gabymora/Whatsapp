$(document).ready(function() {

  var jobCount = $("#list > .scroll > li > media > .media-body > .name").length;
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    var listItem = $('.media-body').children('.name');
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
     
    $(".sub-menu").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('.sub-menu');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $(".sub-menu:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('.sub-menu');
      setTimeout(function() {
          $('.sub-menu').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $("#list > .scroll > li > media > .media-body > .name").length;

    //shows empty state text when no jobs found
    if( searchTerm === ' ') {
      	$('.sub-menu').addClass('empty');
    }
    else {
      $('.sub-menu').removeClass('empty');
    }
    
  });  
                    
});

function ObtenerLista(text) {
	var llamarDiv = document.getElementById("box-message");
	
	// Crear Elemento
	var crearElemento = document.createElement("div");
	crearElemento.id  = "box-green";

	var parrafo = document.createElement("div");
	parrafo.id = "texto";
	parrafo.innerHTML = text;

	var reloj = document.createElement("div");
	reloj.id = "datatime"
	reloj.innerHTML = times;


	llamarDiv.appendChild(crearElemento);
	crearElemento.appendChild(parrafo);
	crearElemento.appendChild(reloj);

}

function clean() {
	var llamarID =document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}