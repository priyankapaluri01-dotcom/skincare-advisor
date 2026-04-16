import { createSlice } from '@reduxjs/toolkit';

const skinSlice = createSlice({
  name: 'skin',
  initialState: {
    currentStep: 0,
    quizResults: {},    
    finalSkinType: '',   
    recommendations: []    
  },
  reducers: {
    // Action to save an individual answer
    saveAnswer: (state, action) => {
      const { question, answer } = action.payload;
      state.quizResults[question] = answer;
    },
    // Action to set the final result
    setFinalType: (state, action) => {
      state.finalSkinType = action.payload;
    },
    // Action to move between quiz steps
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    // Action to clear everything and start over
    resetQuiz: (state) => {
      state.currentStep = 0;
      state.quizResults = {};
      state.finalSkinType = '';
    }
  }
});
export const { saveAnswer, setFinalType, setStep, resetQuiz } = skinSlice.actions;
export default skinSlice.reducer;