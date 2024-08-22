import React from 'react';
import { motion } from 'framer-motion';

const interviews = [
  {
    id: 1,
    name: "DJ 냉장고",
    quote: "음악은 우리 주변 어디에나 있어요. 냉장고 문을 열 때 그 소리가 들리나요? 그게 바로 제 음악의 시작입니다.",
    fullInterview: "제 음악 여정은 어느 날 밤 배가 고파서 냉장고를 열었을 때 시작됐어요. 문이 열리는 '쉬이익' 소리와 함께 갑자기 영감이 떠올랐죠. 그 후로 주방이 제 스튜디오가 되었습니다. 믹서기, 전자레인지, 심지어 얼음 떨어지는 소리까지 - 이 모든 게 제 음악의 재료가 되었어요."
  },
  {
    id: 2,
    name: "MC 변비",
    quote: "힙합은 진실을 말하는 거예요. 그리고 화장실만큼 진실된 곳이 어디 있겠어요?",
    fullInterview: "많은 사람들이 제 무대 이름을 듣고 웃어요. 하지만 저에겐 아주 진지해요. 화장실은 우리 모두의 평등한 공간이잖아요. 거기서 우리는 가장 솔직한 모습이 되죠. 제 랩도 그래요 - 날것 그대로, 꾸밈없이 진실을 말하는 거죠."
  },
];

function ArtistInterview() {
  return (
    <section id="interviews" className="py-20 bg-cyber-yellow">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-electric-blue"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          아티스트 인터뷰
        </motion.h2>
        <div className="space-y-12">
          {interviews.map((interview) => (
            <motion.div 
              key={interview.id} 
              className="bg-purple-haze bg-opacity-20 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: interview.id * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-subtitle mb-4 text-electric-blue">{interview.name}</h3>
              <blockquote className="italic text-lg mb-4 text-cyber-yellow">"{interview.quote}"</blockquote>
              <p className="text-white">{interview.fullInterview}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtistInterview;