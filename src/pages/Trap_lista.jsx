import React, { useState, useEffect } from "react";
import "./Trap_lista.css";

function Trap_lista({discos}) {
  // Estado para armazenar a lista de CDs e os favoritos
  const [cds, setCds] = useState([
    { id: 1, titulo: "Paz Terrivel" },
    { id: 2, titulo: "Meu Nome Não é Igor" },
    { id: 3, titulo: "Maturidade" },
    { id: 4, titulo: "Magic Show" },
    { id: 5, titulo: "Depois das 5" },
    { id: 6, titulo: "Vagabundo de Luxo" }
  ]);
  const [favoritos, setFavoritos] = useState([]);

  // Efeito para carregar os favoritos do localStorage
  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  // Função para alternar o favorito
  const toggleFavorito = (id) => {
    let novosFavoritos = [...favoritos];
    if (novosFavoritos.includes(id)) {
      // Remover do favorito
      novosFavoritos = novosFavoritos.filter(favId => favId !== id);
    } else {
      // Adicionar ao favorito
      novosFavoritos.push(id);
    }
    setFavoritos(novosFavoritos);
    // Salvar no localStorage
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  return (
    <div className="lista">
      <h2 className="T-list">CDs</h2>
      <div className="cds-list">
        {discos.map((cd, index) => (
          <div key={index} className="cd-item">
            <span>{cd.artista}</span>
            <button
              className={`favorito-btn ${favoritos.includes(index) ? "favoritado" : ""}`}
              onClick={() => toggleFavorito(index)}
            >
              {favoritos.includes(index) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trap_lista;
