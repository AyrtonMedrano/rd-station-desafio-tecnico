// Form.js

import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({recommendationsCallbackUpdate}) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 24:28 Validar se o usuário selecionou um tipo de recomendação
    if(!formData.selectedRecommendationType) {
      //Exibir erro em tela
      console.warn('Por favor selecione o tipo de recomendação')
      return;
    }

    //30:36 Validar se o usuário selecionou uma preferência ou uma funcionalidade
    if(formData.selectedPreferences.length === 0&&formData.selectedFeatures.length === 0) {
      //Exibir erro em tela
      console.warn(
        'Por favor selecione ao menos uma preferência ou uma funcionalidade!')
      return;
    }

    const dataRecommendations = getRecommendations(formData);

    recommendationsCallbackUpdate(dataRecommendations)

  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
      style={{border: '1px solid red'}}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
