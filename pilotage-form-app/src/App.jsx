import React, { useState } from 'react';
import PilotageForm from './components/PilotageForm';
import PilotageData from './components/PilotageData';
import { fetchPilotageData } from './services/api';

const App = () => {
  const [pilotageData, setPilotageData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (imo) => {
    setLoading(true);
    setError('');
    setPilotageData(null);

    try {
      const data = await fetchPilotageData(imo);
      setPilotageData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pilotage Data Lookup</h1>
      <PilotageForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pilotageData && <PilotageData data={pilotageData} />}
    </div>
  );
};

export default App;
