document.addEventListener('DOMContentLoaded', function() {

    // Função para exibir uma mensagem de alerta personalizada (opcional)
    const showCustomAlert = (message) => {
        const existingAlert = document.getElementById('custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        const alertBox = document.createElement('div');
        alertBox.id = 'custom-alert';
        alertBox.style.position = 'fixed';
        alertBox.style.top = '20px';
        alertBox.style.right = '20px';
        alertBox.style.padding = '12px 20px';
        alertBox.style.backgroundColor = '#2563eb';
        alertBox.style.color = 'white';
        alertBox.style.borderRadius = '8px';
        alertBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        alertBox.style.zIndex = '1000';
        alertBox.textContent = message;

        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    };
    
    // Adiciona o evento de clique para o Portal do Aluno
    document.getElementById('aluno-portal').addEventListener('click', function() {
        showCustomAlert('Redirecionando para o Portal do Aluno...');
        // IMPORTANTE: Substitua '#' pelo link real do portal do aluno
         window.location.href = 'https://portalaluno.abaweb.org/FrameHTML/web/app/edu/PortalEducacional/login/'; 
    });

    // Adiciona o evento de clique para o Portal do Professor
    document.getElementById('professor-portal').addEventListener('click', function() {
        showCustomAlert('Redirecionando para o Portal do Professor...');
        // IMPORTANTE: Substitua '#' pelo link real do portal do professor
         window.location.href = 'https://portalprofessor.abaweb.org/FrameHTML/Web/App/Edu/PortalDoProfessor/#/login';
    });

    // Adiciona o evento de clique para o Portal LEX
    document.getElementById('lex-portal').addEventListener('click', function() {
        showCustomAlert('Redirecionando para o Portal Lex...');
        // IMPORTANTE: Substitua '#' pelo link real do portal LEX
         window.location.href = 'https://sso.lex.education/login';
    });

    // Adiciona o evento de clique para o Portal TODDLE
    document.getElementById('Toddle-portal').addEventListener('click', function() {
        showCustomAlert('Redirecionando para o Portal Toddle...');
        // IMPORTANTE: Substitua '#' pelo link real do portal TODDLE
         window.location.href = 'https://web.toddleapp.com/?type=loginHome';
    });
});
