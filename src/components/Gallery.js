// src/components/Gallery.js
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: "https://daedamo.com/new/data/file/freestory/2038363544_haTEF3SR_fdeecf3969e994a99b8168ebdbadf296d397ed94.jpg", title: "DJ 냉장고의 열정적인 공연" },
  { id: 2, src: "https://img.khan.co.kr/mx/363030/5b0464d.jpg", title: "MC 변비의 랩배틀" },
  { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52T_DUb4QoX8EPGWp1QfyFwPICG3O9gQneQ&s", title: "밴드 '분리수거'의 리사이클 콘서트" },
  { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/0/02/Broken_keyboard.jpg", title: "일렉트로닉 듀오 '키보드'의 타자 퍼포먼스" },
  { id: 5, src: "https://blog.kakaocdn.net/dn/5pfMD/btsE94aSfT7/0iKDqOjYEMGSn4RYpJsnVK/img.jpg", title: "관객들의 열광적인 반응" },
  { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLGjWpNJQmWaOmsZPuT6gX-yQS6CepYgIzA&s", title: "앙상블 '도로공사'의 교향곡" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-purple-haze">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-acid-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📸 갤러리: 믿기 힘든 순간들 📸
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div 
              key={image.id} 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: image.id * 0.1, duration: 0.5 }}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-center bg-black bg-opacity-75 p-2 rounded">
                  {image.title}
                </p>
              </div>
              <motion.p 
                className="mt-2 text-center text-neon-pink font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: image.id * 0.1 + 0.3, duration: 0.5 }}
              >
                {image.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xl text-retro-orange">
            ⚠️ 주의: 이 링크는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 링크는 4일 안에 당신 곁을 떠나야 합니다. 이 링크를 포함해서 7개의 카톡을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다. ⚠️
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;