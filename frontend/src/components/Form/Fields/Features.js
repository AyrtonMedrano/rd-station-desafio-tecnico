import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };


  const handleCleanFeatures = () => {
    setCurrentFeatures([]);
    onFeatureChange([]);
  };

  return (
    <div className="mb-4">
      <div className='flex justify-end'>
        <button type='button' onClick={handleCleanFeatures} className='text-red-500 hover:text-red-700 text-sm font-medium'>Limpar</button>
      </div>
      {/* <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2> */}
      <ul>
        {features.map((feature, index) => (
          <li
            onChange={() => handleFeatureChange(feature)}
            key={index}
            className="mb-2 min-h-[40px] flex items-center flex-nowrap pl-2 p-3 hover:bg-gray-100 hover:shadow-md cursor-pointer"
          >
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="text-green-500"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
