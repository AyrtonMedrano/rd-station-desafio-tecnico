import { useToast as useToastContext } from '../contexts/ToastContext';

// Re-exporta o hook do contexto para facilitar o uso
export const useToast = () => {
  return useToastContext();
};

export default useToast;