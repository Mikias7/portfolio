import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesciptionPage from './components/DescriptionPage';

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Dynamic project description route */}
        <Route path="/projects/:itemsId" element={<DesciptionPage />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
