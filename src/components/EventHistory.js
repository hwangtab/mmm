// src/components/EventHistory.js
import React from 'react';
import { motion } from 'framer-motion';

const pastEvents = [
  {
    id: 1,
    year: 2015,
    name: "레코드폐허",
    description: "🚮 망반, 똥반, 실패작의 천국. 여기 '레코드폐허'에서는 모든 것이 허용됩니다! 당신의 서랍 깊숙이 숨겨둔 그 부끄러운 데모테이프, 취중에 녹음한 그 황당한 노래, 심지어 당신의 할머니가 들으면 기절할 것 같은 그 음악까지!",
    highlight: "💸 돈 벌 기회? (아마도?) 혹시 아나요? 당신의 '망작'이 누군가에겐 '명작'일지. 미래의 콜렉터들이 당신의 음반을 찾아 헤매게 될지도 모릅니다. 30년 후 경매장에서 몇 억에 팔릴 수도 있다고요! (물론 그 가능성은 복권 당첨 확률보다 낮겠지만요) 👥 관객? 무슨 관객? 작년에는 무려 3명의 관객이 감동의 눈물을 흘렸답니다... 물론 그들이 왜 울었는지는 아무도 모릅니다. 음악의 감동? 아니면 고통? 올해는 5명까지 늘릴 수 있을까요? 도전해보세요!",
    imageSrc: "https://mblogthumb-phinf.pstatic.net/20150623_295/kssmadang_1435070113758p2qfS_JPEG/20150614_150322.jpg?type=w420",
    link: "https://blog.naver.com/kssmadang/220401066887"
  },
  {
    id: 2,
    year: 2013,
    name: "최후의 시장",
    description: "🚔 아무거나 팔다가 잡혀가도 나는 몰라..! 불법 복제 음반? 음... 우리는 아무것도 몰라요. 정체불명의 믹스테이프? 누가 만들었는지 묻지 마세요. 수상한 중고 악기? 어디서 구했는지 궁금해하지 마세요.",
    highlight: "소음 민원으로 출동한 경찰관이 음반을 사 갔다는 소문이 있어요! 올해는 어떤 놀라운 일이 벌어질까요? 경찰서에서 단체 관람을 올 수도 있겠네요! 🎭 무법자의 노래방: 저작권? 그게 뭐죠, 먹는 건가요? 미스터리 믹스테이프 교환: 받으면 후회할 수도 있어요! 즉석 밴드 결성: 처음 본 사람들과 즉석에서 밴드를 만들어 공연하세요! 음악적 탈옥: 장르의 경계를 무너뜨리는 크로스오버 공연..! 수상한 악기 경매: 출처를 묻지 마세요. 단, 구매 후 악기에서 수상한 소리가 들려도 책임지지 않습니다.",
    imageSrc: "https://ifh.cc/g/98qgN7.jpg",
    link: "https://www.tumblr.com/lastmarket"
  },
];

function EventHistory() {
  return (
    <section id="history" className="py-20 bg-electric-blue">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-neon-pink font-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          이벤트 히스토리
        </motion.h2>
        <div className="space-y-12">
          {pastEvents.map((event) => (
            <motion.div 
              key={event.id} 
              className="flex flex-col md:flex-row bg-purple-haze bg-opacity-20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: event.id * 0.2, duration: 0.5 }}
            >
              <div className="md:w-1/3 relative overflow-hidden group">
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={event.imageSrc} 
                    alt={event.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-subtitle text-lg">자세히 보기</span>
                  </div>
                </a>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyber-yellow font-subtitle">{event.year}: {event.name}</h3>
                <p className="text-acid-green mb-4 font-body">{event.description}</p>
                <p className="text-retro-orange italic font-body">{event.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHistory;