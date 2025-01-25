import React from 'react';
import { HelpCircle } from 'lucide-react';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "Como funciona o Hacker invest?",
    answer: "O Hacker Invest é um aplicativo que utiliza inteligência artificial avançada para analisar o mercado e identificar as melhores oportunidades de operação, com alta taxa de assertividade e sem uso de martingale."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não é necessário ter experiência prévia. Oferecemos um curso completo de opções binárias e todo o suporte necessário para você começar do zero."
  },
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Com o pagamento único, você terá acesso vitalício ao aplicativo."
  },
  {
    question: "Como recebo acesso após a compra?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente no e-mail e no whatsapp todas as instruções de acesso, incluindo o aplicativo e os materiais do curso."
  },
  {
    question: "Existe suporte após a compra?",
    answer: "Sim! Oferecemos suporte completo através de nossa equipe especializada, que está sempre disponível para ajudar com dúvidas técnicas e estratégicas."
  }
];

export default function FAQSection() {
  return (
    <div className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-xl text-gray-400">
            Encontre respostas para as principais dúvidas sobre o Hacker Invest
          </p>
        </div>

        <div className="bg-black/30 rounded-xl p-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}