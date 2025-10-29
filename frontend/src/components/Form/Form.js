// Form.js
//Este componente eu deixaria no lado cliente
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import Accordion from '../shared/Accordion';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { useToast } from '../../contexts/ToastContext';

function Form({ recommendationsCallbackUpdate }) {
  const { preferences, features, products } = useProducts();
  const showToast = useToast()
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    //25:35 Validar se o usuário selecionou uma preferência ou uma funcionalidade
    
    if (
      formData.selectedPreferences.length === 0 &&
      formData.selectedFeatures.length === 0
    ) {
      //Exibir erro em tela
      showToast.error(
        'Por favor selecione ao menos uma preferência ou uma funcionalidade!'
      );
      return;
    }

    // 37:42 Validar se o usuário selecionou um tipo de recomendação
    if (!formData.selectedRecommendationType) {
      //Exibir erro em tela
      showToast.error('Por favor selecione o tipo de recomendação');
      return;
    }

    const dataRecommendations = getRecommendations(formData);

    recommendationsCallbackUpdate(dataRecommendations);
    // showToast.success('Recomendações geradas com sucesso!');
  };

  // Lista de itens renderizdos no accordion
  const accordionItems = [
    {
      title: '🎯 Preferências',
      content: (
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
      ),
    },
    {
      title: '⚙️ Funcionalidades',
      content: (
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
          handleCleanFeatures={() => handleChange('selectedFeatures', [])}
        />
      ),
    },
    {
      title: '📊 Tipo de Recomendação',
      content: (
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
          handleCleanRecommendationType={() => handleChange('selectedRecommendationType', '')}
        />
      ),
    },
  ];

  return (
    <form className="w-full max-w-md mx-auto p-4 sm:p-6 rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
          Configure suas Preferências
        </h2>
        <Accordion items={accordionItems} defaultOpenIndex={0} />
      </div>
      <div className="flex justify-end">
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
