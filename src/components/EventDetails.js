import React from 'react';

function EventDetails() {
  return (
    <section id="about" className="py-20 bg-neon-pink">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">🎉 Mixtape Mavericks Market: 공씨디의 역습 🎉</h2>
        <p className="text-xl mb-8 text-center text-acid-green">음악에 흥미를 잃은 당신을 위한 긴급 구제 매뉴얼 1.0</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-electric-blue bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-subtitle mb-4 text-cyber-yellow">🎭 이게 뭔 소리냐고요?</h3>
            <p className="text-white">
              "Mixtape Mavericks Market: 공씨디의 역습"은 여러분의 귀를 황홀경으로 데려갈 로파이(Lo-Fi) 음악의 향연입니다. 
              메인스트림에 질린 음악 반항아들이 휴대폰, 화장실 동굴소리, 심지어 냉장고 소리로 만든 음악들이 여러분의 지갑을 노리고 있습니다. 
              돈이 없다고요? 걱정 마세요, 귀는 공짜니까요!
            </p>
          </div>
          <div className="bg-purple-haze bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-subtitle mb-4 text-retro-orange">🎪 이날 뭐하게?</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li><strong className="text-electric-blue">기괴한 데모 음원 잼버리</strong>: 휴대폰, 휴대용 레코더, 노트북 마이크로 녹음한 원시적 데모 음악들이 모입니다.</li>
              <li><strong className="text-electric-blue">귀 폭발 라이브</strong>: 15분 동안 여러분의 고막을 책임질 용감무쌍한 아티스트들이 기다립니다.</li>
              <li><strong className="text-electric-blue">아티스트와의 미친 만남</strong>: 음악을 만든 괴짜들과 직접 대화할 기회!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;