/// <reference types="cypress" />

context('Scenario 01 :: Purchase Order', () => {
    let productName = 'Faded Short Sleeve T-shirts'

    it('Perform a purchase order of a product', () => {
        //set cookie para ingresar logado
        cy.backgroundLogin()

        cy.visit('/');

        cy.contains(productName).trigger('mouseover')

        cy.contains(productName)
          .parent()
          .siblings('div.button-container')
          .children('a')
          .first()
          .click();
        
        //validando se o produto foi add no carrinho com sucesso
        cy.get('.icon-ok')
        .parent()
        .should('contain.text', 'Product successfully added to your shopping cart');

        cy.get('span#layer_cart_product_title').should('contain.text', productName);

        cy.get(".button-container a[href$='controller=order']").click();

        cy.get(".cart_navigation a[href$='order&step=1']").click();

        // cy.get('#email').type('semana-agilizei@mail.com');
        // cy.get('#passwd').type('12345');
        // cy.get('button#SubmitLogin').click();  

        //validando se o endereço de entrega é igual ao de cobrança        
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked');
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same');
        
        cy.get('button[name=processAddress]').click();

        cy.get('[type=checkbox]#cgv').check();

        cy.get('button[name=processCarrier]').click();

        cy.get('.bankwire').click();

        cy.get(' .cart_navigation button[type=submit]')
          .find('span')
          .contains('I confirm my order')
          .click();

        cy.get('.cheque-indent strong')
          .should('contain.text', 'Your order on My Store is complete.');

        cy.get('div.box').invoke('text').then((text) => {
            //criação e escrita de arquivo
            cy.writeFile('cypress/fixtures/order.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }` }) // Params: caminho do arquivo | conteudo do arquivo
        });

        cy.get(".cart_navigation a[href$='history']").click()

        //leitura de arquivo
        cy.readFile('cypress/fixtures/order.json').then((order) => {
            cy.get('tr.first_item .history_link a').should('contain.text', order.id)
        })

        

    });
});