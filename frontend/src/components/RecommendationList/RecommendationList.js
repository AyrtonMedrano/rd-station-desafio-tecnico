import React from 'react';

function RecommendationList({ recommendations, isLoading }) {

if(isLoading){
  return(
    <div>
      <p>Carregando recomendações...</p>
    </div>
  )
}
  return (
    <div style={{border: '1px solid blue'}}>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
