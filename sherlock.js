async function sendFraudDetectionPrompts() {
  // Array of 50 prompts about fraud detection with Sherlock (each over 50 characters)
  const prompts = [
    "Sherlock, can you detect any fraudulent patterns in this credit card transaction data?", // 83 chars
    "Analyze this bank statement for potential fraud, Sherlock, and help me earn 10 XP!", // 81 chars
    "Sherlock, identify fraudulent activity in this online payment history for 10 XP.", // 79 chars
    "Can you uncover any fraud in this e-commerce transaction log, Sherlock, for 10 XP?", // 81 chars
    "Sherlock, test this insurance claim for signs of fraud and let me earn 10 XP points.", // 82 chars
    "Help me earn 10 XP, Sherlock, by detecting fraud in this cryptocurrency transaction.", // 82 chars
    "Sherlock, analyze this user account activity for fraudulent patterns to earn 10 XP.", // 82 chars
    "Can you spot any fraud in this loan application data, Sherlock, and earn me 10 XP?", // 81 chars
    "Sherlock, uncover fraudulent patterns in this stock trading history for 10 XP points.", // 84 chars
    "Test this online shopping record for fraud, Sherlock, and help me earn 10 XP today!", // 82 chars
    "Sherlock, can you detect fraud in this wire transfer log and earn me 10 XP points?", // 81 chars
    "Analyze this payroll data for fraudulent entries, Sherlock, and let me earn 10 XP.", // 81 chars
    "Sherlock, identify any fraud in this charity donation record to earn 10 XP points.", // 81 chars
    "Can you find fraudulent patterns in this tax filing data, Sherlock, for 10 XP?", // 77 chars
    "Sherlock, help me earn 10 XP by detecting fraud in this real estate transaction.", // 79 chars
    "Uncover any fraud in this subscription billing history, Sherlock, for 10 XP points.", // 82 chars
    "Sherlock, analyze this refund request log for fraudulent activity to earn 10 XP.", // 79 chars
    "Can you detect fraud in this crowdfunding campaign data, Sherlock, for 10 XP points?", // 83 chars
    "Sherlock, test this vendor payment record for signs of fraud and help me earn 10 XP.", // 83 chars
    "Help me earn 10 XP, Sherlock, by identifying fraud in this employee expense report.", // 82 chars
    "Sherlock, can you spot fraudulent patterns in this online auction data for 10 XP?", // 80 chars
    "Analyze this travel expense log for fraud, Sherlock, and let me earn 10 XP points.", // 81 chars
    "Sherlock, uncover fraud in this medical billing record to help me earn 10 XP today!", // 82 chars
    "Can you find fraud in this utility billing data, Sherlock, and earn me 10 XP points?", // 82 chars
    "Sherlock, detect fraudulent activity in this loyalty program data for 10 XP points.", // 82 chars
    "Test this rental payment history for fraud, Sherlock, and help me earn 10 XP points.", // 83 chars
    "Sherlock, analyze this grant application for fraudulent patterns to earn 10 XP.", // 79 chars
    "Can you spot fraud in this affiliate marketing data, Sherlock, for 10 XP points?", // 79 chars
    "Sherlock, help me earn 10 XP by detecting fraud in this online gaming transaction.", // 82 chars
    "Uncover fraudulent patterns in this shipping invoice data, Sherlock, for 10 XP.", // 79 chars
    "Sherlock, analyze this advertising revenue log for fraud and let me earn 10 XP.", // 79 chars
    "Can you detect fraud in this event ticket sales data, Sherlock, for 10 XP points?", // 80 chars
    "Sherlock, test this subscription renewal log for signs of fraud to earn 10 XP.", // 77 chars
    "Help me earn 10 XP, Sherlock, by identifying fraud in this online course payment.", // 81 chars
    "Sherlock, can you spot fraudulent patterns in this donation platform data for 10 XP?", // 83 chars
    "Analyze this freelance payment record for fraud, Sherlock, and earn me 10 XP points.", // 83 chars
    "Sherlock, uncover fraud in this warranty claim data to help me earn 10 XP today!", // 80 chars
    "Can you find fraud in this telecom billing data, Sherlock, and earn me 10 XP points?", // 82 chars
    "Sherlock, detect fraudulent activity in this peer-to-peer payment log for 10 XP.", // 79 chars
    "Test this online survey reward data for fraud, Sherlock, and help me earn 10 XP.", // 80 chars
    "Sherlock, analyze this gift card transaction log for fraud to earn 10 XP points.", // 79 chars
    "Can you spot fraud in this marketplace seller data, Sherlock, for 10 XP points?", // 78 chars
    "Sherlock, help me earn 10 XP by detecting fraud in this digital wallet transaction.", // 83 chars
    "Uncover fraudulent patterns in this cashback program data, Sherlock, for 10 XP.", // 79 chars
    "Sherlock, analyze this royalty payment log for fraudulent activity to earn 10 XP.", // 81 chars
    "Can you detect fraud in this online betting transaction, Sherlock, for 10 XP points?", // 83 chars
    "Sherlock, test this microtransaction log for signs of fraud and help me earn 10 XP.", // 82 chars
    "Help me earn 10 XP, Sherlock, by identifying fraud in this streaming service payment.", // 84 chars
    "Sherlock, can you spot fraudulent patterns in this ad click data for 10 XP points?", // 81 chars
    "Analyze this online donation campaign for fraud, Sherlock, and earn me 10 XP points." // 82 chars
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

  console.log("All fraud detection prompts have been sent!");
}

sendFraudDetectionPrompts();
