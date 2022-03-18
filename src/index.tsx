import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {ThemeProvider} from "./theme/chakra";
import {LanguageProvider} from "./i18n";
import {ReduxProvider} from "./reducers/provider";

ReactDOM.render(
    <React.StrictMode>
       <ReduxProvider >
           <LanguageProvider>
               <ThemeProvider>
                   <App />
               </ThemeProvider>
           </LanguageProvider>
       </ReduxProvider>
    </React.StrictMode>,

  document.getElementById('root')
);
