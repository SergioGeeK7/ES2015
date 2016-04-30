 $(function(){
   
   
  var $template = $('.app-shows');

   var template = '<article class="show">'+
                    '<div class="left img-container">'+
                        '<img src=":img:" alt="">'+
                    '</div>'+
                    '<div class="right info">'+
                        '<h1>:name:</h1>'+
                        '<p>:summary:</p>'+
                   '</div>'+
                '</article>';
                
   
   
   $.ajax({
       url:"http://api.tvmaze.com/shows",
       success:function(data,status,hr){
           buscarDatos(data);
       }
   })
   
 
 buscarDatos(data);
   
   function buscarDatos(shows){
       shows.forEach(function(elem){
           var article = template
           .replace(':name:',elem.name)
           .replace(':summary:',elem.summary)
           .replace(':img:',elem.image ? elem.image.medium : '')
           
           var $article = $(article);
           $template.append($article.show());
       })
   }

 })