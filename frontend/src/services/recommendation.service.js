// getRecommendations.js

const RECOMENDATION_TYPES = {
  SINGLE_PRODUCT: 'SingleProduct',
  MULTIPLE_PRODUCTS: 'MultipleProducts',
};

const SCORE_WEIGHTS = {
  PREFERENCE: 1,
  FEATURE: 1,
};

// 13:24 -  Função para produto único
const getSingleProductRecommendation = (orderedProducts) => {
  if (orderedProducts.length === 0) return [];

  const maxScore = orderedProducts[0].initialScore;
  const topProducts = orderedProducts.filter(
    (product) => product.initialScore === maxScore
  );

  // Em caso de empate, retorna o último produto (conforme sua regra de negócio)
  return [topProducts[topProducts.length - 1]];
};

// 26:29 - Função para múltiplos produtos
const getMultipleProductsRecommendation = (orderedProducts) => {
  return orderedProducts;
};

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products = []
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;

  // 42:61 - Função para calcular score dos produtos
  const scoredProducts = products?.map((product) => {
    let initialScore = 0;

    // Score baseado nas preferencias do usuário
    selectedPreferences.forEach((preference) => {
      if (product?.preferences?.includes(preference)) {
        initialScore += SCORE_WEIGHTS.PREFERENCE;
      }
    });

    // Score baseado nas funcionalidades desejadas pelo usuário
    selectedFeatures.forEach((feature) => {
      if (product?.features?.includes(feature)) {
        initialScore += SCORE_WEIGHTS.FEATURE;
      }
    });

    return { ...product, initialScore };
  });

  // Função para filtrar produtos com score > 0
  const validProducts = scoredProducts.filter(
    (product) => product.initialScore > 0
  );

  // Ordenação por score partindo do maior
  const orderedProducts = validProducts.sort(
    (a, b) => b.initialScore - a.initialScore
  );

  // Retorno dos produtos recomendados baseado no tipo selecionado pelo usuário (verificar a necessidade de switch case)
  switch (selectedRecommendationType) {
    case RECOMENDATION_TYPES.SINGLE_PRODUCT:
      return getSingleProductRecommendation(orderedProducts);

    case RECOMENDATION_TYPES.MULTIPLE_PRODUCTS:
      return getMultipleProductsRecommendation(orderedProducts);

    default:
      console.warn(
        'Tipo de recomendação não reconhecido:',
        selectedRecommendationType
      );
      return [];
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getRecommendations, RECOMENDATION_TYPES, SCORE_WEIGHTS };
