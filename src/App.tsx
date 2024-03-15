import DateProvider from './contexts/DateContext/DateContext';
import MainPage from './pages/MainPage';

function App() {

  return (
    <DateProvider>
      <MainPage />
    </DateProvider>
  );
}

export default App;
