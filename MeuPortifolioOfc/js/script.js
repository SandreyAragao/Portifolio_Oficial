window.onload = function() {
    window.scrollTo(0, 0);
  }
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Impedir o envio do formulário para validação
        event.preventDefault();
        
        // Obter os campos do formulário
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[type="email"]').value;
        var subject = document.querySelector('input[name="Assunto"]').value;
        var message = document.querySelector('textarea[name="text"]').value;
        
        // Variável para armazenar mensagens de erro
        var errorMessages = [];
        
        // Validação do nome
        if (name.trim() === '') {
            errorMessages.push('Por favor, preencha seu nome.');
        }
        
        // Validação do email
        if (email.trim() === '') {
            errorMessages.push('Por favor, preencha seu e-mail.');
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMessages.push('Por favor, insira um e-mail válido.');
            }
        }
        
        // Validação do assunto
        if (subject.trim() === '') {
            errorMessages.push('Por favor, preencha o assunto.');
        }
        
        // Validação da mensagem
        if (message.trim() === '') {
            errorMessages.push('Por favor, escreva sua mensagem.');
        }
        
        // Exibir mensagens de erro ou enviar o formulário
        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
        } else {
            // Se não houver erros, o formulário é enviado
            document.getElementById('contactForm').submit();
        }
    });

  