import {
  GoogleGenerativeAI,
} from '@google/generative-ai';

export default class AiTip {
  constructor(question) {
    this.question = question;
  }

  static async run(inputQuestion) {
    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const genAI = new GoogleGenerativeAI('AIzaSyB0QV39FfwRybFwEsJcs9vGTEywpQc1dbQ');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `I am a quizz app.
    The app show this question: ${inputQuestion}.
    Give to me a short tip about anwser, without giving the correct answer`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  }

  static colectTip(question) {
    const inputQuestion = question;

    return this.run(inputQuestion);
  }
}
