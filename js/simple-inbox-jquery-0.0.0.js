$.fn.sinbox = function(){
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
      // console.log(mensagem.text());
      clear();
      $(inbox).append(mensagem.text());
    });
  });

  var clear = function(){
    $(inbox).text('');
  };

};
