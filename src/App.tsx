import DateProvider from './contexts/DateContext/DateContext';
import MainPage from './pages/MainPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  return (
    <DateProvider>
      <MainPage />
    </DateProvider>
  );
}

export default App;
