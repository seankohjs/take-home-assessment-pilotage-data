import axios from 'axios';

export const fetchPilotageData = async (imo) => {
    try {
      const response = await axios.get(`https://uat.engineering.sgtradex.net/api/v1/pilotage/${imo}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Pilotage data not found');
    }
  };
  