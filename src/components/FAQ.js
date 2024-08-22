import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: "티켓은 어디서 구매할 수 있나요?",
    answer: "티켓은 현재 판매하지 않습니다. 우리는 '티켓 없는 축제'를 지향합니다. 그냥 오세요. 단, 귀마개는 필수입니다!"
  },
  {
    id: 2,
    question: "공연장 내 음식 반입이 가능한가요?",
    answer: "네, 가능합니다. 오히려 권장합니다! 여러분이 가져온 음식을 나눠 먹거나, 즉석에서 'Food ASMR' 세션을 진행할 예정입니다."
  },
  {
    id: 3,
    question: "드레스 코드가 있나요?",
    answer: "특별한 드레스 코드는 없습니다. 단, '소리 나는' 옷을 입고 오시면 우리 공연의 일부가 될 수 있습니다!"
  },
  {
    id: 4,
    question: "취소 및 환불 정책은 어떻게 되나요?",
    answer: "티켓이 없으니 취소할 것도, 환불할 것도 없습니다. 완벽한 정책이죠, 그렇지 않나요?"
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-acid-green">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-purple-haze"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          자주 묻는 질문
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div 
              key={faq.id} 
              className="bg-neon-pink bg-opacity-20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: faq.id * 0.1, duration: 0.5 }}
            >
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleAnswer(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-subtitle text-electric-blue">{faq.question}</h3>
                  <span className="text-2xl text-cyber-yellow">{openId === faq.id ? '−' : '+'}</span>
                </div>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div 
                    className="p-4 bg-retro-orange bg-opacity-20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.01 }}
                  >
                    <p className="text-purple-haze">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;