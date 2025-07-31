import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/shared/ToastContainer';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Dadas atualizações no formulário, necessário atualizar a lista de recomendações
   */

  const handleRecommendationsUpdate = (updatedRecommendations) => {
    setIsLoading(true);

    setTimeout(() => {
      setRecommendations(updatedRecommendations);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ToastProvider>
    <div className="bg-gray-100 p-8 min-h-screen flex flex-col  w-full">
      <h1 className="text-3xl text-gray-800 font-bold mb-8 text-center">
        Recomendador de Produtos RD Station
      </h1>

      {/* <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>

      </div> */}
      <div className='grid grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto'>
        <div className='flex col-span-2 '>
        <Form recommendationsCallbackUpdate={handleRecommendationsUpdate} />
      </div>
        <div className='col-span-4'>
          <RecommendationList
            recommendations={recommendations}
            isLoading={isLoading}
          />
        </div>
        </div>
    </div>
    <ToastContainer/>
    </ToastProvider>
  );
}

export default App;
