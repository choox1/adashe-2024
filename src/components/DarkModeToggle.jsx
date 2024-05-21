import React, { useState } from 'react'

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      // Implement logic to switch between light and dark mode here
      // You may toggle CSS classes, change theme variables, or apply other changes based on the mode
    };
  return (
    <button onClick={toggleDarkMode} aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
    {isDarkMode ? (
  

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
<circle cx="17.5874" cy="19.8431" r="17.1519" fill="white"/>
<path d="M16.546 4.89756C19.1357 5.96106 21.3474 7.776 22.8959 10.1083C27.2326 16.6274 25.406 25.4659 18.8156 29.8501C16.6635 31.2875 14.1633 32.1171 11.5789 32.2514C16.2739 34.9008 22.286 34.8638 27.1215 31.647C33.9516 27.1034 35.8448 17.9434 31.3502 11.1871C28.0283 6.19349 22.1463 3.91478 16.546 4.89756Z" fill="#393939"/>
</svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
        <circle cx="17.5879" cy="19.8431" r="17.1519" fill="#393939"/>
        <path d="M16.546 4.89756C19.1357 5.96106 21.3474 7.776 22.8959 10.1083C27.2326 16.6274 25.406 25.4659 18.8156 29.8501C16.6635 31.2875 14.1633 32.1171 11.5789 32.2514C16.2739 34.9008 22.286 34.8638 27.1215 31.647C33.9516 27.1034 35.8448 17.9434 31.3502 11.1871C28.0283 6.19349 22.1463 3.91478 16.546 4.89756Z" fill="#F1F3F4"/>
      </svg>
    )}
  </button>
  )
}

export default DarkModeToggle