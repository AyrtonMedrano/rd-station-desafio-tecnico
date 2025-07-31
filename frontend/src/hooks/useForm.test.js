import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

describe('useForm', () => {
  test('Inicializa com estado inicial correto', () => {
    const initialState = { name: '', email: '' };
    const { result } = renderHook(() => useForm(initialState));

    expect(result.current.formData).toEqual(initialState);
  });

  test('Atualiza campo corretamente', () => {
    const initialState = { name: '', email: '' };
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('name', 'João');
    });

    expect(result.current.formData.name).toBe('João');
  });
});