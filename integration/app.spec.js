describe('Init', () => {
    // Navegamos a la página
    beforeEach(async () => {
      await page.goto('http://localhost:8080');
    });
  
    it("should display the title", async () => {
      await expect(page).toMatchElement('h1', { text: 'REACTIFY' });
    });
  
    it("should update the name after submit", async () => {
      const name = "Prueba";
      await expect(page).toFill('#user', name);
      await expect(page).toFill('#password', name);
      await expect(page).toClick('button');
      await expect(page).toMatchElement('nav .user .name', { text: name });
    });
  });
  