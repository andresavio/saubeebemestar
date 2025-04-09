// Exemplo de funcionalidade JavaScript (ajustar para suas necessidades)
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('.article a');
    
    articles.forEach(article => {
        article.addEventListener('click', (e) => {
            alert("Você está prestes a ler um artigo sobre saúde!");
        });
    });
});

