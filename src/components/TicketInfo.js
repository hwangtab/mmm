// src/components/TicketInfo.js
import React from 'react';
import { motion } from 'framer-motion';

function TicketInfo() {
  // 티켓 예매 링크를 여기에 추가합니다.
  const ticketLink = "https://docs.google.com/forms/d/e/1FAIpQLSeTGq__DOCwQDKDLelk3uJVPEqxlMPVJg67vwMSr_k0paCz2g/viewform?usp=sf_link";

  return (
    <section id="tickets" className="py-20 bg-neon-pink">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-cyber-yellow font-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎟️ 참가 & 위치 정보 📍
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-electric-blue bg-opacity-20 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-acid-green font-subtitle">📅 이벤트 정보</h3>
            <ul className="space-y-2 text-white font-body">
              <li><strong className="text-retro-orange">날짜:</strong> 2024년 10월 3일 (개천절)</li>
              <li><strong className="text-retro-orange">시간:</strong> 오후 4시 ~ 오후 7시</li>
              <li><strong className="text-retro-orange">장소:</strong> 롱플레이어 (수원 어딘가에 숨어있는 LP샵)</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-purple-haze font-body">* 정확한 주소는 참가 신청 후 비밀리에 알려드립니다. (아님 말고요)</p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-purple-haze bg-opacity-20 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyber-yellow font-subtitle">💰 참가 신청</h3>
            <p className="mb-4 font-body">입장료: <span className="text-2xl font-bold text-purple-haze">공짜!</span></p>
            <p className="mb-6 text-acid-green font-body">하지만 아무것도 안 사 가면 우리가 울어요 😢</p>
            <motion.a 
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon-pink text-white font-bold py-3 px-6 rounded-full hover:bg-electric-blue transition duration-300 font-subtitle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              참가 신청하기
            </motion.a>
            <p className="mt-4 text-sm text-retro-orange font-body">*  참가 신청은 귀하의 음악적 취향을 더 이상하게 만들 수 있습니다.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TicketInfo;