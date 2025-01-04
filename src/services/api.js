const API_BASE_URL = 'http://localhost:8080/api';

export const analyzeResume = async (file, functionalArea, designation) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('functionalArea', functionalArea);
  formData.append('designation', designation);

  try {
    const response = await fetch(`${API_BASE_URL}/analysis`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Analysis failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error analyzing resume:', error);
    throw error;
  }
}; 