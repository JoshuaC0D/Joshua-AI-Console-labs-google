// 1. Initialize with the required outputLanguage
const session = await LanguageModel.create({
  outputLanguage: 'en' 
});

// 2. Send the prompt
const result = await session.prompt("I'm Joshua, a CS student at Christ University. I just activated Gemini Nano! Give me a quick celebratory message.");

console.log(result);
// 1. Initialize with the required outputLanguage
const session = await LanguageModel.create({
  outputLanguage: 'en' 
});

// 2. Send the prompt
const result = await session.prompt("I'm Joshua, a CS student at Christ University. I just activated Gemini Nano! Give me a quick celebratory message.");

console.log(result);
// 1. Initialize with a monitor to see the 4GB download progress
const session = await LanguageModel.create({
  outputLanguage: 'en',
  monitor(m) {
    m.addEventListener('downloadprogress', (e) => {
      console.log(`Gemini Nano Download: ${Math.round((e.loaded / e.total) * 100)}%`);
    });
  }
});

// 2. Once it hits 100%, this will run
console.log("Model ready! Sending prompt...");
const result = await session.prompt("Hi! I'm Joshua from Christ University. Give me a 1-sentence welcome message.");
console.log(result);
