// src/components/ArtistProfile.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ArtistProfile({ artist, onClose }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteArtists')) || [];
    setIsFavorite(favorites.includes(artist.id));
  }, [artist.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteArtists')) || [];
    if (isFavorite) {
      const newFavorites = favorites.filter(id => id !== artist.id);
      localStorage.setItem('favoriteArtists', JSON.stringify(newFavorites));
    } else {
      favorites.push(artist.id);
      localStorage.setItem('favoriteArtists', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-background p-8 rounded-lg max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">{artist.name}</h2>
        <p className="text-accent mb-2">{artist.time}</p>
        <p className="mb-4">{artist.description}</p>
        <p className="mb-6">{artist.details}</p>
        <div className="flex justify-between">
          <button
            className="btn-primary"
            onClick={toggleFavorite}
          >
            {isFavorite ? '관심 아티스트에서 제거' : '관심 아티스트로 저장'}
          </button>
          <button
            className="btn-primary"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ArtistProfile;
