import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

describe('useForm', () => {
  test('Inicializa com estado inicial correto', () => {
    const initialState = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    };
    const { result } = renderHook(() => useForm(initialState));

    expect(result.current.formData).toEqual(initialState);
  });

  test('Atualiza selectedPreferences corretamente', () => {
    const initialState = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    };
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('selectedPreferences', ['Integração com chatbots']);
    });

    expect(result.current.formData.selectedPreferences).toEqual(['Integração com chatbots']);
  });

  test('Atualiza selectedRecommendationType corretamente', () => {
    const initialState = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    };
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('selectedRecommendationType', 'SingleProduct');
    });

    expect(result.current.formData.selectedRecommendationType).toBe('SingleProduct');
  });
});
