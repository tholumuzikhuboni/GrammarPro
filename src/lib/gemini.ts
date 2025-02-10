import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAFXwPQyVi0i_MVXsfrqUxGqi-w29zrZG4");

export async function checkGrammar(text: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please proofread and correct the following text, providing detailed suggestions for grammar, style, and clarity improvements. Format the response in markdown:

${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in grammar check:', error);
    throw new Error('Failed to check grammar. Please try again.');
  }
}