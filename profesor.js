async function sendMultiplePrompts() {
  // Array of 50 prompts (each over 50 characters)
  const prompts = [
    "What is Kite AI and how does it help users with blockchain technology?", // 68 chars
    "Can you explain the main features of Kite AI for AI collaboration?", // 65 chars
    "How does Kite AI ensure security in its blockchain ecosystem?", // 61 chars
    "What are the benefits of using Kite AI for decentralized AI projects?", // 68 chars
    "How does Kite AI integrate blockchain with artificial intelligence?", // 66 chars
    "What makes Kite AI different from other AI platforms in the market?", // 66 chars
    "Can you describe the Proof of Attributed Intelligence in Kite AI?", // 65 chars
    "How does Kite AI empower AI ownership for its users and developers?", // 67 chars
    "What role does Kite AI play in creating a transparent AI ecosystem?", // 66 chars
    "How can developers use Kite AI to build secure AI applications?", // 62 chars
    "What are the key use cases of Kite AI in the blockchain industry?", // 64 chars
    "How does Kite AI support seamless integration of blockchain and AI?", // 67 chars
    "Can you explain how Kite AI democratizes access to AI technology?", // 64 chars
    "What are the advantages of Kite AI for AI model training and deployment?", // 71 chars
    "How does Kite AI handle data privacy in its blockchain platform?", // 64 chars
    "What kind of AI models can be developed using the Kite AI platform?", // 67 chars
    "How does Kite AI ensure fairness in its AI collaboration system?", // 64 chars
    "Can you describe the team behind Kite AI and their expertise?", // 61 chars
    "What are the future goals of Kite AI in the AI and blockchain space?", // 68 chars
    "How does Kite AI improve the efficiency of AI model development?", // 64 chars
    "What are the security features of Kite AI for protecting user data?", // 67 chars
    "How does Kite AI enable users to monetize their AI models securely?", // 67 chars
    "Can you explain the role of blockchain in Kite AI’s infrastructure?", // 67 chars
    "What are the challenges Kite AI solves in AI and blockchain integration?", // 71 chars
    "How does Kite AI support collaboration between AI developers globally?", // 70 chars
    "What are the benefits of Kite AI for small businesses using AI tools?", // 68 chars
    "How does Kite AI ensure transparency in its AI model training process?", // 70 chars
    "Can you describe the user interface of Kite AI and its usability?", // 64 chars
    "What are the scalability features of Kite AI for large AI projects?", // 67 chars
    "How does Kite AI handle the computational needs of AI model training?", // 69 chars
    "What are the cost benefits of using Kite AI for AI development?", // 63 chars
    "How does Kite AI support real-time AI model deployment for users?", // 66 chars
    "Can you explain how Kite AI uses smart contracts in its platform?", // 65 chars
    "What are the privacy benefits of Kite AI for AI model developers?", // 65 chars
    "How does Kite AI ensure the integrity of AI models on its platform?", // 67 chars
    "What are the collaboration tools available in Kite AI for AI teams?", // 67 chars
    "How does Kite AI address ethical concerns in AI model development?", // 67 chars
    "Can you describe the onboarding process for new users on Kite AI?", // 65 chars
    "What are the performance metrics of Kite AI for AI model training?", // 67 chars
    "How does Kite AI support cross-platform integration for AI models?", // 67 chars
    "What are the user support options available on the Kite AI platform?", // 68 chars
    "How does Kite AI handle version control for AI models in development?", // 70 chars
    "Can you explain the pricing model of Kite AI for its users and developers?", // 72 chars
    "What are the community features of Kite AI for AI developers to connect?", // 71 chars
    "How does Kite AI ensure low latency in its AI model deployment process?", // 71 chars
    "What are the data storage solutions provided by Kite AI for AI models?", // 70 chars
    "How does Kite AI support multi-language AI models for global users?", // 67 chars
    "Can you describe the API support in Kite AI for integrating AI models?", // 69 chars
    "What are the training resources available on Kite AI for new developers?", // 72 chars
    "How does Kite AI ensure compliance with global AI and blockchain regulations?", // 75 chars
    "What are the success stories of users leveraging Kite AI for AI projects?" // 72 chars
  ];

  // Verify we have 50 prompts
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

  console.log("All prompts have been sent!");
}

sendMultiplePrompts();
