import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que tu archivo de estilos esté en la carpeta correcta
import App from './App';
import reportWebVitals from './reportWebVitals';

// Obtiene el contenedor raíz del HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en el contenedor raíz
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Reporta el rendimiento de la aplicación (opcional)
reportWebVitals();

