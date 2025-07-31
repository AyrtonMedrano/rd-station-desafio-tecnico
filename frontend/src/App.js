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
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 min-h-screen flex flex-col w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold mb-6 sm:mb-8 text-center px-4">
          Recomendador de Produtos RD Station
        </h1>

        <div className="flex flex-col items-center ">
          <p className="text-sm  text-gray-800  mb-6 sm:mb-8 text-center px-4 w-[60%]">
            Bem-vindo ao Recomendador de Produtos RD Station.<br/> Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos.<br/> Use o formulário a esquerda
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>

        <div className='flex flex-col lg:grid lg:grid-cols-6 gap-6 lg:gap-8 max-w-7xl mx-auto w-full'>
          <div className='lg:col-span-2 w-full'>
            <Form recommendationsCallbackUpdate={handleRecommendationsUpdate} />
          </div>
          <div className='lg:col-span-4 w-full'>
            <RecommendationList
              recommendations={recommendations}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;
