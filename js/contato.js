$(document).ready(function(){
  $("#enviar").click(function(){
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var mensagem = $("#mensagem").val();
    $.post("../php/Email/contato",
    {
      nome:nome,
      email:email,
      telefone:telefone,
      mensagem:mensagem
    },
    function(data){
      alert(data);
    });
  });
});
