function contato(e,n,t,a){var o=new FormData;o.append("nome",e),o.append("email",n),o.append("telefone",t),o.append("mensagem",a),fetch("http://www.tpereira.com.br/php/Email/contato",{method:"GET",body:o}).then((function(e){return e.json()})).then((function(e){e.alert&&alert(e.alert)}))}