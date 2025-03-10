import {
  GoogleGenerativeAI,
} from '@google/generative-ai';

export default class AiTip {
  constructor(question) {
    this.question = question;
  }

  static async run(inputQuestion) {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

    if (!apiKey) {
      console.error('Erro: Variável de ambiente GEMINI_API_KEY não definida.');
      return 'Erro ao obter dica da IA. Chave API não configurada.'; // Retorna uma mensagem de erro
    }

    const genAI = new GoogleGenerativeAI(apiKey);
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
