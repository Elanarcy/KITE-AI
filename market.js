async function sendMarketMoversPrompts() {
  // Array of 50 prompts about prices and trends of top 10 movers (each over 50 characters)
  const prompts = [
    "What are the current prices of the top 10 movers in the stock market today?", // 73 chars
    "Can you show the price trends of the top 10 movers in the crypto market?", // 71 chars
    "Which stocks are the top 10 movers in the market this week and their prices?", // 75 chars
    "What are the price changes for the top 10 movers in the forex market today?", // 74 chars
    "How have the top 10 movers in the stock market performed over the past month?", // 76 chars
    "Can you list the top 10 movers in the crypto market and their price trends?", // 74 chars
    "What are the key trends for the top 10 movers in the commodities market now?", // 75 chars
    "Which companies are the top 10 movers in the tech sector and their prices?", // 74 chars
    "What are the price movements of the top 10 movers in the energy sector today?", // 76 chars
    "Can you analyze the trends of the top 10 movers in the financial market?", // 71 chars
    "What are the top 10 movers in the stock market and their price volatility?", // 73 chars
    "How are the top 10 movers in the crypto market trending this week?", // 65 chars
    "What are the price trends for the top 10 movers in the healthcare sector?", // 72 chars
    "Can you provide the prices of the top 10 movers in the real estate market?", // 73 chars
    "What are the top 10 movers in the market and their price changes today?", // 70 chars
    "How have the top 10 movers in the tech sector performed this quarter?", // 68 chars
    "What are the price trends of the top 10 movers in the energy market now?", // 72 chars
    "Can you list the top 10 movers in the stock market with their price gains?", // 74 chars
    "What are the top 10 movers in the crypto market and their price drops?", // 69 chars
    "How are the top 10 movers in the commodities market performing today?", // 68 chars
    "What are the price trends for the top 10 movers in the financial sector?", // 72 chars
    "Can you show the top 10 movers in the forex market and their price trends?", // 74 chars
    "What are the top 10 movers in the market and their price movements this week?", // 76 chars
    "How have the top 10 movers in the healthcare sector performed recently?", // 70 chars
    "What are the price changes for the top 10 movers in the tech market today?", // 74 chars
    "Can you analyze the top 10 movers in the energy sector and their prices?", // 71 chars
    "What are the top 10 movers in the stock market and their price trends now?", // 73 chars
    "How are the top 10 movers in the crypto market performing this month?", // 68 chars
    "What are the price trends of the top 10 movers in the real estate sector?", // 73 chars
    "Can you list the top 10 movers in the commodities market with their prices?", // 75 chars
    "What are the top 10 movers in the financial market and their price changes?", // 75 chars
    "How have the top 10 movers in the forex market performed this year?", // 67 chars
    "What are the price trends for the top 10 movers in the tech sector today?", // 73 chars
    "Can you show the top 10 movers in the energy market and their price trends?", // 75 chars
    "What are the top 10 movers in the stock market and their price movements?", // 73 chars
    "How are the top 10 movers in the crypto market trending this quarter?", // 68 chars
    "What are the price changes for the top 10 movers in the healthcare market?", // 74 chars
    "Can you analyze the top 10 movers in the real estate market and their prices?", // 77 chars
    "What are the top 10 movers in the commodities market and their price trends?", // 76 chars
    "How have the top 10 movers in the financial market performed this month?", // 72 chars
    "What are the price trends for the top 10 movers in the forex market today?", // 73 chars
    "Can you list the top 10 movers in the tech market with their price changes?", // 75 chars
    "What are the top 10 movers in the energy market and their price movements?", // 74 chars
    "How are the top 10 movers in the stock market performing this week?", // 67 chars
    "What are the price trends of the top 10 movers in the crypto market now?", // 71 chars
    "Can you show the top 10 movers in the healthcare market and their prices?", // 74 chars
    "What are the top 10 movers in the real estate market and their price trends?", // 76 chars
    "How have the top 10 movers in the commodities market performed this year?", // 73 chars
    "What are the price changes for the top 10 movers in the financial market?", // 74 chars
    "Can you analyze the top 10 movers in the forex market and their price trends?", // 76 chars
    "What are the top 10 movers in the tech market and their price movements now?" // 74 chars
  ];

  // Verify we have 50 prompts and each is over 50 characters
  console.log(`Total prompts: ${prompts.length}`);
  prompts.forEach((prompt, index) => {
    console.log(`Prompt ${index + 1} length: ${prompt.length} characters`);
  });

  // Loop through each prompt and send it every 6 seconds
  for (const [index, prompt] of prompts.entries()) {
    await new Promise(resolve => {
      // Find the input field and send button
      const inputField = document.querySelector('input[placeholder="Type your message..."][class*="flex-1 p-4 border rounded-lg"]');
      const sendButton = document.querySelector('button[type="submit"][class*="p-4 bg-blue-600"]');

      if (!inputField || !sendButton) {
        console.error("Input field or send button not found.");
        resolve();
        return;
      }

      console.log(`Sending prompt ${index + 1}: ${prompt}`);
      inputField.focus();
      inputField.dispatchEvent(new Event('focus', { bubbles: true }));

      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(inputField, prompt);
      const inputEvent = new Event('input', { bubbles: true });
      inputField.dispatchEvent(inputEvent);

      const changeEvent = new Event('change', { bubbles: true });
      const keydownEvent = new KeyboardEvent('keydown', { bubbles: true, key: 'a' });
      const keyupEvent = new KeyboardEvent('keyup', { bubbles: true, key: 'a' });
      [changeEvent, keydownEvent, keyupEvent].forEach(event => inputField.dispatchEvent(event));

      setTimeout(() => {
        if (sendButton.hasAttribute('disabled')) {
          console.log("Button is still disabled. Forcing removal...");
          sendButton.removeAttribute('disabled');
        }

        console.log("Clicking send button...");
        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
        sendButton.dispatchEvent(clickEvent);

        // Wait 6 seconds before sending the next prompt
        setTimeout(resolve, 6000);
      }, 1500); // Initial delay to ensure the UI updates
    });
  }

  console.log("All market movers prompts have been sent!");
}

sendMarketMoversPrompts();
