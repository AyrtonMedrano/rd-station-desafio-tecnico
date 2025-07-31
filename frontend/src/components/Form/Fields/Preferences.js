// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences)

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  const handleCleanPreferences = () => {
    setCurrentPreferences([]);
    onPreferenceChange([]);
  };


  return (
    <div className="mb-4">
      <div className='flex justify-end'>
        <button type='button' onClick={handleCleanPreferences} className='text-red-500 hover:text-red-700 text-sm font-medium'>Limpar</button>
      </div>
      {/* <h2 className="text-lg font-bold mb-2">Preferências:</h2> */}
      <ul>
        {preferences.map((preference, index) => (
          <li  onChange={() => handlePreferenceChange(preference)} key={index} className="mb-2 min-h-[40px] flex items-center flex-nowrap pl-2 p-3 hover:bg-gray-100 hover:shadow-md cursor-pointer "  >
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="text-blue-500 "
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
