// inicializa o jQuery
$(document).ready(function(){ 
    $(".confirmar").click(function(){
        
        //dados dos campos        
        let nome = $("#nome").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();
        let confirmarSenha = $("#confirmarSenha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == "" || confirmarSenha == ""){
            alert("Favor preencher todos os campos");
        } 
        else if(senha != confirmarSenha){
            alert("Senhas não correspondem");
        }
        else {
            $(".message").text("Logado com sucesso!");
        }
    });

    $(".entrar").click(function(){
        
        //dados dos campos        
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos");
        }
        else {
            $(location).attr('href', 'index.html');
        }
    });

    $(".cadastrar").click(function(){
      let nome = $("#nome").val();
      let usuario = $("#usuario").val();
      let senha = $("#senha").val();
      let confirmarSenha = $("#confirmarSenha").val();

      if(nome.trim() == "" || usuario.trim() == "" || senha == "" || confirmarSenha == ""){
          alert("Favor preencher todos os campos");
      } else {
          $(".mensagem").text("Cadastrado com sucesso!");
      }
  });
});