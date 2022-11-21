import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from 'features/navigation';
import { FC } from 'react';
import Page3 from 'pages/Page3';
import Page2 from 'pages/Page2';
import { store } from 'store/store';
import Page1 from 'pages/Page1';
import { LanguageComponent, LanguageProvider } from 'features/language';
import { TrackingProvider } from 'features/tracking/tracking.context';

const App: FC = () => (
  <Provider store={store}>
    <TrackingProvider>
      <LanguageProvider>
        <LanguageComponent />
        <Navbar />
        <Routes>
          <Route path="/" element={<Page3 />} />
          <Route path="/location/:id" element={<Page2 />} />
          <Route path="/following" element={<Page1 />} />
        </Routes>
      </LanguageProvider>
    </TrackingProvider>
  </Provider>
);

export default App;
