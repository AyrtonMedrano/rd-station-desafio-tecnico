import React from 'react';

function RecommendationList({ recommendations, isLoading }) {

if(isLoading){
  return(
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando recomendações...</p>
      </div>
    </div>
  )
}

console.log(recommendations)

  return (
    <div className="w-full p-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 ">Recomendações:</h2>

      {recommendations.length === 0 && (
        <div className="text-center p-8">
          <p className="text-gray-500">Nenhuma recomendação encontrada.</p>
        </div>
      )}

      <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
        {recommendations.map((recommendation) => (
          <li onClick={() => window.open(recommendation?.link)} key={recommendation?.id} className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex cursor-pointer">

            {/* Imagem pequena no lado esquerdo, pode ser trocada por logo do produto */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#7af0ff] rounded-lg flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4">
              <div className="text-gray-800 text-lg sm:text-xl font-bold">
                {recommendation?.category?.charAt(0) || 'RD'}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h4 className='text-base sm:text-lg text-gray-600 font-bold mb-1 sm:mb-0 truncate sm:flex-1 sm:mr-2'>
                  {recommendation.name}
                </h4>
                <p className='text-xs sm:text-sm text-gray-500 flex-shrink-0'>
                  {recommendation.category}
                </p>
              </div>

              <div className="space-y-1">
                {recommendation?.preferences?.map((preference, index) => (
                  <p className='text-xs sm:text-sm text-gray-500 leading-relaxed' key={index}>
                    • {preference}
                  </p>
                ))}
                {recommendation?.features?.map((feature, index) => (
                  <p className='text-xs sm:text-sm text-gray-500 leading-relaxed' key={index}>
                    • {feature}
                  </p>
                ))}
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
