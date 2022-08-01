import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from 'features/navigation';
import { FC, useState } from 'react';
import Page3 from 'pages/Page3';
import Page2 from 'pages/Page2';
import { store } from 'store/store';
import Page1 from 'pages/Page1';
import { LanguageComponent } from 'features/language';
import { TrackingProvider } from 'features/tracking/tracking.context';
import Languages from 'features/language/language.types';
import esTranslations from 'data/i18n.es';
import enTranslations from 'data/i18n.en';
import ptTranslations from 'data/i18n.pt';

const App: FC = () => {
  const [language, setLanguage] = useState<Languages>('ENGLISH' as Languages);

  const translate = (key: string) => {
    if (language === 'SPANISH') {
      return esTranslations[key];
    } else if (language === 'ENGLISH') {
      return enTranslations[key];
    } else if (language === 'PORTUGUESE') {
      return ptTranslations[key];
    }
    return key;
  };

  return (
    <Provider store={store}>
      <TrackingProvider>
        <LanguageComponent language={language} setLanguage={setLanguage} t={translate} />
        <Navbar t={translate} />
        <Routes>
          <Route path="/" element={<Page3 />} />
          <Route path="/location/:id" element={<Page2 />} />
          <Route path="/following" element={<Page1 />} />
        </Routes>
      </TrackingProvider>
    </Provider>
  );
};

export default App;
