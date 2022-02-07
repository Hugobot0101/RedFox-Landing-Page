/// <reference types="cypress" />

describe('Testing the RedFox landing page', () => {
    beforeEach(() => {
        Cypress.config('defaultCommandTimeout', 10000)
        cy.viewport(1920,1080)
        cy.clearCookies()
        cy.clearLocalStorage()
    });

    it('RedFox Lanfing Page', () => {
        cy.visit('/')
        cy.contains('https://redfox.tech/wp-content/uploads/2021/10/logo.png').should('be.visible')
        cy.get('.jet-menu').contains('Home')
        cy.get('.jet-menu').contains('Serviços')
        cy.get('.jet-menu').contains('Carreiras')
        cy.get('.jet-menu').contains('Blog')
        
        cy.get('.elementor-element-1047dbb4 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link')
        .click()
        .log('Quero iniciar a jornada')
        
        cy.get('#form-field-name').should('have.value', '').type('Guilherme Manzano')  
        cy.get('#form-field-email').should('have.value', '').type('guilherme.manzano@redfox.tech')  
        cy.get('#form-field-field_e16b752').should('have.value', '').type('Assunto')  
        cy.get('#form-field-field_3239a2f').should('have.value', '').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        cy.get('#EMAIL61f4847f30de2').should('have.value', '').type('guilherme.manzano@redfox.tech').log('Newsletter')

        cy.get('.elementor-element-6cad4eef > .elementor-widget-wrap')
        .scrollIntoView()
        .contains('Consultoria estratégica de desenvolvimento de projetos de inovação e tecnologia para transformar a experiência de produtos e serviços, físicos ou digitais.')
        .log('Experience')

        cy.get('.elementor-element-5a69478a > .elementor-widget-wrap')
        .contains('Dados que geram insights. Estruturamos a jornada de inteligência da sua empresa. Entendemos os seus desafios de negócios, e transformamos os seus dados em oportunidades.')
        .log('Data Lab')
       
        cy.get('.elementor-element-3ca5119e > .elementor-widget-wrap')
        .contains('Transformamos negócios com tecnologia, design e dados. Planejamos e executamos projetos de tecnologia para alavancar resultados.')
        .log('Digital Delivery')

        cy.get('.elementor-element-4ffc3a3 > .elementor-widget-wrap')
        .scrollIntoView()
        .contains('Marketplace de soluções digitais “plug and play” e customizadas para acelerar a transformação.')
        .log('Growin')

        cy.get('.elementor-element-65bf7be7 > .elementor-widget-wrap')
        .contains('Escola de futuro com cursos personalizados de transformação digital, inovação e mindset ágil para empoderar pessoas e transformar negócios.')
        .log('Hello Future Academy')

        cy.get('#jet-tabs-content-2511 > .elementor > .elementor-section-wrap > .elementor-element-6eef35e8 > .elementor-container > .elementor-element-4046c112 > .elementor-widget-wrap')
        .scrollIntoView()
        .should('be.visible')

        cy.get('#jet-tabs-control-2512 > .jet-tabs__control-inner').click({force:true})
        
        cy.get('#jet-tabs-content-2512 > .elementor > .elementor-section-wrap > .elementor-element-3251c576 > .elementor-container > .elementor-element-1f7f854 > .elementor-widget-wrap')
        .should('be.visible')

        cy.get('#jet-tabs-control-2513 > .jet-tabs__control-inner').click({force:true})
        
        cy.get('#jet-tabs-content-2513 > .elementor > .elementor-section-wrap > .elementor-element-6a0d1aa1 > .elementor-container > .elementor-element-1c142165 > .elementor-widget-wrap')
        .should('be.visible')

        cy.get('#jet-tabs-control-2514 > .jet-tabs__control-inner').click({force:true})
        
        cy.get('#jet-tabs-content-2514 > .elementor > .elementor-section-wrap > .elementor-element-449de89a > .elementor-container > .elementor-element-7926cdd8 > .elementor-widget-wrap')
        .should('be.visible')

        cy.get('.elementor-element-61300b16 > .elementor-container > .elementor-column > .elementor-widget-wrap')
        .scrollIntoView()
        .contains('CONHEÇA ALGUMAS DE NOSSAS TRANSFORMAÇÕES')

        cy.get('.jet-portfolio__list')
        .contains('https://redfox.tech/wp-content/uploads/2021/10/2a401-case-dralper-telemedicina-redfox.png')
        .log('Case Alper')

        cy.get('.jet-portfolio__list')
        .contains('https://redfox.tech/wp-content/uploads/2021/10/3a40b-case-dasa-gestaodeprodutos-1-1024x576.png')
        .log('Case Dasa')

        cy.get('.elementor-element-a3a2f2 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link')
        .click()
        .log('Conheça nossos cases')

        
        cy.get('#form-field-name').should('have.value', 'Guilherme Manzano').clear()
        cy.get('#form-field-email').should('have.value', 'guilherme.manzano@redfox.tech').clear()
        cy.get('#form-field-field_e16b752').should('have.value', 'Assunto').clear()
        cy.get('#form-field-field_3239a2f').should('have.value', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.').clear()
        cy.get('#EMAIL61f4847f30de2').should('have.value', 'guilherme.manzano@redfox.tech').clear().log('Newsletter')

        cy.get('.elementor-element-19e01149 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Instagram')
        cy.get('.elementor-element-19e01149 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Linkedin')
        cy.get('.elementor-element-19e01149 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Facebook-f')
        cy.get('.elementor-element-19e01149 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Youtube')
        cy.get('.elementor-element-19e01149 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Telegram')

        cy.get('#contact-trigger').click({force:true}).log('ícone do Whatsapp')
        cy.get('.twwr-content-header').contains('Olá!')
        cy.get('.available').contains('Diego')
        cy.get('.twwr-content-footer > p').contains('Fale com um de nossos consultores')
        cy.get('.close-chat').click({force:true}) 
    });


});

