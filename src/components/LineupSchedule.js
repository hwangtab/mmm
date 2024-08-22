import React from 'react';
import { motion } from 'framer-motion';

const artists = [
  { id: 1, name: "DJ 냉장고", time: "16:00 - 16:15", description: "냉장고 문 여닫는 소리로 만든 비트" },
  { id: 2, name: "MC 변비", time: "16:45 - 17:00", description: "화장실 음향으로 만든 힙합" },
  { id: 3, name: "밴드 '분리수거'", time: "17:45 - 18:00", description: "재활용품으로 만든 악기 연주" },
  { id: 4, name: "일렉트로닉 듀오 '키보디스트'", time: "18:15 - 18:30", description: "타자 소리로 만든 일렉트로닉 음악" },
  { id: 5, name: "앙상블 '도로공사'", time: "19:45 - 19:00", description: "도로 공사 소음으로 만든 심포니" },
  { id: 6, name: "포크 트리오 '잘못된 만남'", time: "19:15 - 19:30", description: "난 널 믿었던만큼 내 친구도 믿었기에..." }
];

function LineupSchedule() {
  return (
    <section id="lineup" className="py-20 bg-retro-orange">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-purple-haze"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎵 라인업 & 일정 🕒
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <motion.div 
              key={artist.id} 
              className="bg-acid-green bg-opacity-20 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: artist.id * 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-subtitle mb-2 text-white">{artist.name}</h3>
              <p className="text-electric-blue mb-4">{artist.time}</p>
              <p className="text-acid-green">{artist.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="mt-12 text-center text-xl text-purple-haze"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          ⚠️ 주의: 이 라인업은 모두 가짜입니다! 공연 시간과 출연진은 아티스트의 기분에 따라 갑자기 바뀔 수 있습니다! ⚠️
        </motion.p>
      </div>
    </section>
  );
}

export default LineupSchedule;