$.fn.sinbox = function(options){

  // Defaults
  var settings = $.extend({
    inbox: '#message-content',
    theader: '.header-mensagem',
    tbody: '.mensagem',
    assunto: '#assunto',
    usuario: '#usuario',
    date: '#data',
    body: '#body',
    fx: 'ease'
  }, options);

  /*
   * inicializando a tabela.
   */
  $('.mensagem').css('display', 'none');
  this.find('thead').find('th.header-mensagem').css('display', 'none');

  /*
   * Onde as mensagens vão aparecer
   */
  var inbox = $('#message-content');

  /*
   *
   */
  var rows = this.find('tbody').find('tr');
  rows.each(function(index){
    $(this).on('click', function(){
      var mensagem = $(this).find('td.mensagem');
      $(inbox)
        .fadeOut(300, function(){
          $(inbox).text('');
          $(inbox).append(mensagem.text())
          $(inbox).fadeIn(500)
        });
    });
  })

};
