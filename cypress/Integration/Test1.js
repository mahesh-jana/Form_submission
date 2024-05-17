describe('Form submission',()=>{

    it('Form submission should success',()=>{

        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform");
        cy.get("input[type='text']").type("Jana Mahesh");
        cy.get("div[id='i12'] div[class='vd3tt']").click();
        cy.get(".MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R").click();
        cy.get("body > div:nth-child(8) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)").click();
        cy.get("div[class='uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd'] span[class='NPEfkd RveJvd snByac']").click();
        cy.url().should('include', 'https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/formResponse');
  
        
    });
});
