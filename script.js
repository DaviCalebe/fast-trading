const bannerContent = document.querySelector('.banner-content');
const slides = document.querySelectorAll('.banner-slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.banner-slide').length;

function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula o deslocamento horizontal
  bannerContent.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop para o final
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop para o início
  updateCarousel();
});

// Inicializa o carrossel
updateCarousel();



// ==================== Service descriptions =======================

const services = {
  consulting: "Consultoria é o serviço oferecido por profissionais especializados que fornecem orientações e soluções personalizadas para empresas ou indivíduos em áreas específicas, como negócios, estratégia, finanças, marketing, entre outras. O objetivo é ajudar a otimizar processos, melhorar o desempenho e tomar decisões mais assertivas, levando em consideração as necessidades e objetivos do cliente.",
  import: "Importação é o processo de trazer produtos ou serviços de outro país para o mercado local. Esse processo envolve a negociação com fornecedores internacionais, o cumprimento de regulamentações legais e fiscais, e o transporte de mercadorias através das fronteiras. A importação pode ser realizada por empresas de diferentes setores que buscam acesso a novos produtos ou materiais para seus negócios.",
  export: "Exportação é a ação de enviar produtos ou serviços para outros países, visando expandir o alcance do mercado e aumentar a competitividade internacional. O processo de exportação envolve a adaptação de produtos às exigências dos mercados externos, além da documentação e logística necessárias para garantir a entrega segura e eficiente.",
  customs: "Despacho aduaneiro é o conjunto de procedimentos legais e burocráticos necessários para a liberação de mercadorias nas aduanas de um país, tanto na importação quanto na exportação. Esse processo envolve a classificação fiscal das mercadorias, o pagamento de impostos e taxas, e a conformidade com as normas internacionais e locais de comércio. O despacho aduaneiro visa garantir que as mercadorias cumpram todas as exigências legais para circulação no mercado."
};

// Select all service titles (h1)
const serviceTitles = document.querySelectorAll('.service');

// Select the element where the description will be shown
const descriptionSpan = document.querySelector('#description span');

// Add a click event to each service title
serviceTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Get the value of the 'data-service' attribute from the clicked title
    const serviceId = title.getAttribute('data-service');
    
    // Update the description in the span
    descriptionSpan.textContent = services[serviceId] || "Description not available.";
  });
});


// =========================== SERVICE BUTTONS

// Seleciona todos os botões
const buttons = document.querySelectorAll('.service');

// Adiciona um evento de clique para cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    });
});
