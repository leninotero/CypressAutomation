// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'P7Kc4TcNog6mDRClNOEM1Oea6FbevBbx8VFq3TNiaJLM1BIEGxvhsRtUTm%2BeZ%2Bq2oQbuNFzTJNxfwmRq6ekMf6XvAwm9RQHQiQhr%2F7pyCrIM2ATwiBFIjBjAAyCweDC5mvv0Fq52wpGaP4gTS9IVuMGZ1amQiXAIs2BwKLKCF0nX4C4Krn35VHNtl4OI%2Bs2GCk1tDiMWf7YgpVc2uTf0xYTeav9gaMl%2BHWQPeRJur%2FPZz5MTRTTyjtMXplqmgzD8zy%2FOOAY%2F9vcViqqpKKHyidQxQDRK6jLpNc6LGfhknv%2Bdo5FTyFu919hI92JHW4ymxBTLYjdh9XbfuBSBPvBLcb%2B%2FnNNFIQrK8bc%2B1L48xgWbNYY1ulOaFNmAqH3gp9LuRz%2BU9e291pt3L1uR1IB7lSW6xw2M9CeHv57%2BQ5A3CC5jCePKuQ0QdqfX%2BqzPZPI7sAYtpgz5UsixVbwmUssolLKtZ8spztLg3sPv%2FQ%2FWV90%3D000367'
    )
})