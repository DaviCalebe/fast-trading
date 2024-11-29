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

var services = {
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


/* =-=-=-=-=-=-=-=-=-= TRANSLATE WEB SITE  =-=-=-=-=-=-=-=-=-= */


/* =-=-=-= WEBSITE ELEMENTS =-=-=-= */

//Navbar
const companies_nav = document.getElementById('companies_nav');
const services_nav = document.getElementById('services_nav');
const contact_nav = document.getElementById('contact_nav');

//Banner pag 1
const banner_title_1 = document.getElementById('banner_title_1');
const banner_subtitle_1 = document.getElementById('banner_subtitle_1');
const banner_button_1 = document.getElementById('banner_button_1');

//Banner pag 2
const banner_title_2 = document.getElementById('banner_title_2');
const banner_subtitle_2 = document.getElementById('banner_subtitle_2');
const banner_button_2 = document.getElementById('banner_button_2');

//Banner pag 3
const banner_title_3 = document.getElementById('banner_title_3');
const banner_subtitle_3 = document.getElementById('banner_subtitle_3');
const banner_button_3 = document.getElementById('banner_button_3');

//About
const About_title = document.getElementById('About_title');
const text_about = document.getElementById('text_about');

//services
const title_service = document.getElementById('title_service');
const service_consulting = document.getElementById('service_consulting');
const service_import = document.getElementById('service_import');
const service_export = document.getElementById('service_export');
const service_customs = document.getElementById('service_customs');
const service_description = document.getElementById('service_description');

//Why choose us
const why_choose_us_title = document.getElementById('why_choose_us_title');
const why_choose_us_card_1 = document.getElementById('why_choose_us_card_1');
const why_choose_us_card_2 = document.getElementById('why_choose_us_card_2');
const why_choose_us_card_3 = document.getElementById('why_choose_us_card_3');
const why_choose_us_card_4 = document.getElementById('why_choose_us_card_4');
const why_choose_us_card_5 = document.getElementById('why_choose_us_card_5');

//Footer Contact
const footer_title_1 = document.getElementById('footer_title_1');
const footer_subtitle_1 = document.getElementById('footer_subtitle_1');
const footer_title_2 = document.getElementById('footer_title_2');
const footer_subtitle_2 = document.getElementById('footer_subtitle_2');
const footer_title_3 = document.getElementById('footer_title_3');
const footer_subtitle_3 = document.getElementById('footer_subtitle_3');
const copyright_txt = document.getElementById('copyright_txt');







function toggleOptions() {
  const options = document.getElementById('language-options');
  const arrowLanguage = document.getElementById('arrow-language');

  // Alterna a exibição do menu e anima a seta
  if (options.style.display === 'block') {
    options.style.display = 'none';
    arrowLanguage.classList.remove('open');
  } else {
    options.style.display = 'block';
    arrowLanguage.classList.add('open');
  }
}

function setLanguage(language) {
  const languageButton = document.getElementById('selected-language');
  const arrowLanguage = document.getElementById('arrow-language');
  languageButton.textContent = language;

  // Exibe o alert correspondente
  if (language === 'Português') {

    //Navbar
    companies_nav.textContent = "Empresa";
    services_nav.textContent = "Serviços";
    contact_nav.textContent = "Contato";

    //Banner pag 1
    banner_title_1.textContent = "Velocidade e Confiabilidade na Proporção Ideal.";
    banner_subtitle_1.textContent = "Oferecemos a solução perfeita para a sua operação.";
    banner_button_1.textContent = "Solicite um orçamento";

    //Banner pag 2
    banner_title_2.textContent = "Equipamentos Modernos para Suas Necessidades.";
    banner_subtitle_2.textContent = "Aumente a produtividade com tecnologia avançada.";
    banner_button_2.textContent = "Saiba mais";

    //Banner pag 3
    banner_title_3.textContent = "Entrega Rápida e Segura.";
    banner_subtitle_3.textContent = "Chegamos ao seu destino no prazo certo.";
    banner_button_3.textContent = "Confira nossas soluções";

    //About
    About_title.innerHTML = "O que é a<br><span class=fast >FAST?</span>";

    text_about.innerHTML = "A <strong>Fast</strong> é especializada em <strong>importação e exportação</strong>, oferecendo soluções logísticas eficientes e personalizadas. Com uma equipe qualificada, garantimos serviços <strong>agéis</strong>, <strong>seguros</strong> e realizados com <strong>transparência, experiência e agilidade</strong>, atendendo às necessidades de nossos clientes no comércio internacional. <br> Com o objetivo de ser uma referência no mercado global, a <strong>Fast</strong> constrói relações de confiança e oferece <strong>soluções logísticas</strong> inovadoras, superando as expectativas e facilitando a internacionalização dos negócios.";

    //services
    title_service.textContent = "Nossos Serviços";
    service_consulting.textContent = "Consultoria";
    service_import.textContent = "Importação";
    service_export.textContent = "Exportação";
    service_customs.textContent = "Despacho Aduaneiro";
    service_description.textContent = "Selecione um serviço para ver a descrição.";

      services = {
      consulting: "Consultoria é o serviço oferecido por profissionais especializados que fornecem orientações e soluções personalizadas para empresas ou indivíduos em áreas específicas, como negócios, estratégia, finanças, marketing, entre outras. O objetivo é ajudar a otimizar processos, melhorar o desempenho e tomar decisões mais assertivas, levando em consideração as necessidades e objetivos do cliente.",
      import: "Importação é o processo de trazer produtos ou serviços de outro país para o mercado local. Esse processo envolve a negociação com fornecedores internacionais, o cumprimento de regulamentações legais e fiscais, e o transporte de mercadorias através das fronteiras. A importação pode ser realizada por empresas de diferentes setores que buscam acesso a novos produtos ou materiais para seus negócios.",
      export: "Exportação é a ação de enviar produtos ou serviços para outros países, visando expandir o alcance do mercado e aumentar a competitividade internacional. O processo de exportação envolve a adaptação de produtos às exigências dos mercados externos, além da documentação e logística necessárias para garantir a entrega segura e eficiente.",
      customs: "Despacho aduaneiro é o conjunto de procedimentos legais e burocráticos necessários para a liberação de mercadorias nas aduanas de um país, tanto na importação quanto na exportação. Esse processo envolve a classificação fiscal das mercadorias, o pagamento de impostos e taxas, e a conformidade com as normas internacionais e locais de comércio. O despacho aduaneiro visa garantir que as mercadorias cumpram todas as exigências legais para circulação no mercado."
    };


    why_choose_us_title.textContent = "Por que a Fast é a melhor escolha?";
    why_choose_us_card_1.textContent = "Otimização de Custo";
    why_choose_us_card_2.textContent = "Consultoria";
    why_choose_us_card_3.textContent = "ISO 9001";
    why_choose_us_card_4.textContent = "Grande índice de parametrização de canal verde";
    why_choose_us_card_5.textContent = "Entendimento de tributos";


    //Footer Contact
    footer_title_1.textContent = "Informações de Contato";
    footer_subtitle_1.textContent = "Endereço";
    footer_title_2.textContent = "Contato Comercial";
    footer_subtitle_2.textContent = "Telefone";
    footer_title_3.textContent = "Contato Financeiro";
    footer_subtitle_3.textContent = "Telefone";
    copyright_txt.textContent = "© 2024 - Fast Trading - Todos os direitos reservados.";
    




  } else if (language === 'English') {

    //Navbar
    companies_nav.textContent = " Companises";
    services_nav.textContent = "Services";
    contact_nav.textContent = "Contact";

    //Banner pag 1
    banner_title_1.textContent = "Speed ​​and Reliability in Ideal Proportion.";
    banner_subtitle_1.textContent = "We offer the perfect solution for your operation.";
    banner_button_1.textContent = "Request a quote";

    //Banner pag 2
    banner_title_2.textContent = "Modern Equipment for Your Needs.";
    banner_subtitle_2.textContent = "ncrease productivity with advanced technology.";
    banner_button_2.textContent = "Learn more";

    //Banner pag 3
    banner_title_3.textContent = "Fast and Secure Delivery.";
    banner_subtitle_3.textContent = "We arrived at your destination on time.";
    banner_button_3.textContent = "Check out our solutions";

    //About
    About_title.innerHTML = "What is<br><span class=fast >FAST?</span>";

    text_about.innerHTML = "<strong>Fast</strong> specializes in <strong>import and export</strong>, offering efficient and personalized logistics solutions. With a qualified team, we guarantee <strong>agile</strong>, <strong>safe</strong> services carried out with <strong>transparency, experience and agility</strong>, meeting the needs of our customers in international trade. <br> With the aim of being a reference in the global market, <strong>Fast</strong> builds relationships of trust and offers innovative <strong>logistics solutions</strong>, exceeding expectations and facilitating the internationalization of business.";

    //services
    title_service.textContent = "Our Services";
    service_consulting.textContent = "Consulting";
    service_import.textContent = "Import";
    service_export.textContent = "Export";
    service_customs.textContent = "Customs Clearance";
    service_description.textContent = "Select a service to see the description.";

     services = {

      consulting: "Consultancy is the service offered by specialized professionals who provide personalized guidance and solutions to companies or individuals in specific areas, such as business, strategy, finance, marketing, among others. The objective is to help improve processes, improve performance and take more assertive, taking into account the client's needs and objectives.",

      import: "Importation is the process of bringing products or services from another country to the local market. This process involves negotiating with international suppliers, complying with legal and tax regulations, and transporting goods across borders. Importation can be carried out by companies from different sectors seeking access to new products or materials for their businesses.",

      export: "Export is the action of sending products or services to other countries, aiming to expand market reach and increase international competitiveness. The export process involves adapting products to the requirements of foreign markets, in addition to the documentation and logistics necessary to ensure safe and efficient delivery.",

      customs: "Customs clearance is the set of legal and bureaucratic procedures necessary for the release of goods through a country's customs, both for import and export. This process involves the fiscal classification of goods, the payment of taxes and fees, and the compliance with international and local trade standards. Customs clearance aims to ensure that goods comply with all legal requirements for circulation in the market."
    };

    //why choose us
    why_choose_us_title.textContent = "Why is Fast the best choice?";
    why_choose_us_card_1.textContent = "Cost Optimization";
    why_choose_us_card_2.textContent = "Consulting";
    why_choose_us_card_3.textContent = "ISO 9001";
    why_choose_us_card_4.textContent = "Large green channel parameterization index";
    why_choose_us_card_5.textContent = "Understanding taxes";

    //Footer Contact
        //Footer Contact
        footer_title_1.textContent = "Contact Information";
        footer_subtitle_1.textContent = "Address";
        footer_title_2.textContent = "Business Contact";
        footer_subtitle_2.textContent = "Phone";
        footer_title_3.textContent = "Financial Contact";
        footer_subtitle_3.textContent = "Phone";
        copyright_txt.textContent = "© 2024 - Fast Trading - All rights reserved.";



  }

  // Fecha o menu e ajusta a seta
  const options = document.getElementById('language-options');
  options.style.display = 'none';
  arrowLanguage.classList.remove('open');
}

// Fechar o menu ao clicar fora
document.addEventListener('click', function (event) {
  const options = document.getElementById('language-options');
  const button = document.querySelector('.language-button');
  const arrowLanguage = document.getElementById('arrow-language');

  if (!button.contains(event.target) && !options.contains(event.target)) {
    options.style.display = 'none';
    arrowLanguage.classList.remove('open');
  }
});