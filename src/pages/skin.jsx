import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, saveAnswer, setFinalType, resetQuiz } from '../utils/skinSlice';
import './skin.css';

const SkinQuiz = () => {
  const dispatch = useDispatch();
  
  
  const skinState = useSelector((state) => state.skin) || {};
  const currentStep = skinState.currentStep || 1;
  const finalSkinTypeKey = skinState.finalSkinType || '';

  const [selectedMainType, setSelectedMainType] = useState('');

  const recommendations = {
    'Dry': {
      title: 'Dry Skin',
      desc: 'Your skin feels tight and may have flaky patches. It needs deep hydration.',
      ingredients: 'Ceramides, Glycerin, Hyaluronic Acid',
      avoid: 'Hot water, Harsh scrubs, Alcohol-based toners',
      colorClass: 'pastel-blue'
    },
    'Oily': {
      title: 'Oily Skin',
      desc: 'Your skin has excess sebum, often leading to shine and larger pores.',
      ingredients: 'Niacinamide, Salicylic Acid (BHA), Retinol',
      avoid: 'Heavy oils, Coconut oil, Over-washing',
      colorClass: 'pastel-pink'
    },
    'Sensitive': {
      title: 'Sensitive Skin',
      desc: 'Your skin reacts easily to products, often appearing red or irritated.',
      ingredients: 'Centella Asiatica, Aloe Vera, Squalane',
      avoid: 'Added Fragrance, Essential oils, Chemical exfoliants',
      colorClass: 'pastel-red'
    },
    'Combination': {
      title: 'Combination Skin',
      desc: 'You have an oily T-zone (forehead, nose, chin) but dry or normal cheeks.',
      ingredients: 'Hyaluronic Acid, Vitamin C, Light AHAs',
      avoid: 'Heavy creams on the T-zone',
      colorClass: 'pastel-teal'
    },
    'Normal': {
      title: 'Normal Skin',
      desc: 'Your skin is well-balanced—not too dry and not too oily. Keep it healthy!',
      ingredients: 'Antioxidants, Vitamin E, Niacinamide',
      avoid: 'Using too many active ingredients at once',
      colorClass: 'pastel-green'
    }
  };

  const deepDiveQuestions = {
    'Red & Irritated': [
      { label: 'Dry and Rough', result: 'Dry' },
      { label: 'Oily and Red', result: 'Sensitive' },
      { label: 'Moist but Irritated', result: 'Sensitive' }
    ],
    'Shiny & Greasy': [
      { label: 'Shiny all over', result: 'Oily' },
      { label: 'Only in T-Zone', result: 'Combination' }
    ],
    'Partly Greasy': [
      { label: 'Oily all over', result: 'Oily' },
      { label: 'Only T-Zone is greasy', result: 'Combination' }
    ],
    'Normal': [
      { label: 'Baby skin everywhere', result: 'Normal' },
      { label: 'Only T-Zone is smooth', result: 'Combination' }
    ]
  };

  const finalSkinType = recommendations[finalSkinTypeKey] || null;

  const startwork = () => dispatch(setStep(2));

  const clickmemory = (type) => {
    setSelectedMainType(type);
    dispatch(saveAnswer({ question: 'mainConcern', answer: type }));
    dispatch(setStep(3));
  };

  const lookup = (resultType) => {
    dispatch(setFinalType(resultType));
    dispatch(setStep(4));
  };

  const goback = () => {
    dispatch(resetQuiz());
    setSelectedMainType('');
  };

  return (
    <div className="skin-container">
      {/* STEP 1 */}
      {currentStep === 1 && (
        <div className="content-fade-in main-layout">
          <h1 className="main-heading">Determining your skin type <br/> can be done with a simple test.</h1>
          <div className="steps-wrapper">
            <div className="step-card pastel-blue">
              <div className="icon-badge">💧</div>
              <h2 className="step-number">Step 1</h2>
              <p className="step-text">Wash your face with a gentle cleanser to remove all makeup, oil, and dirt.</p>
            </div>
            <div className="step-card pastel-green">
              <div className="icon-badge">🧼</div>
              <h2 className="step-number">Step 2</h2>
              <p className="step-text">Pat your face dry with a soft towel. Don’t apply anything else!</p>
            </div>
            <div className="step-card pastel-red">
              <div className="icon-badge">⏰</div>
              <h2 className="step-number">Step 3</h2>
              <p className="step-text">Wait one hour, then come back. During this time, don’t touch your face.</p>
            </div>
            <div className="step-card pastel-yellow clickable-card" onClick={startwork}>
              <div className="final-content">
                <h2 className="final-text">It's been <br/> an hour!</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {currentStep === 2 && (
        <div className="quiz-section content-fade-in">
          <h1 className="quiz-title">How does your face look?</h1>
          <div className="options-wrapper">
            {Object.keys(deepDiveQuestions).map((key) => (
              <div 
                key={key}
                className="quiz-card shape-rectangle pastel-yellow" 
                onClick={() => clickmemory(key)}
              >
                <span className="quiz-text">{key}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3 - Added Safety Check for selectedMainType */}
      {currentStep === 3 && selectedMainType && (
        <div className="quiz-section content-fade-in">
          <h2 className="sub-heading">Examine and touch your skin.</h2>
          <h1 className="quiz-title">How does it look and feel?</h1>
          <div className="options-wrapper">
            {deepDiveQuestions[selectedMainType]?.map((option, index) => (
              <div 
                key={index} 
                className={`quiz-card shape-square ${index % 2 === 0 ? 'pastel-green' : 'pastel-yellow'}`}
                onClick={() => lookup(option.result)}
              >
                <span className="quiz-text">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentStep === 4 && finalSkinType && (
        <div className="result-container content-fade-in">
          <h2 className="sub-heading">Analysis Complete</h2>
          <h1 className="result-title">Your Skin: <span className="highlight">{finalSkinType.title}</span></h1>
          <p className="result-description">{finalSkinType.desc}</p>
          
          <div className="recommendation-grid">
            <div className={`info-box ${finalSkinType.colorClass}`}>
              <h3>Look for these:</h3>
              <p>{finalSkinType.ingredients}</p>
            </div>
            <div className="info-box pastel-red">
              <h3>Avoid:</h3>
              <p>{finalSkinType.avoid}</p>
            </div>
          </div>
          
          <button className="reset-btn" onClick={goback}>Retake Quiz</button>
        </div>
      )}

    
      {currentStep < 4 && (
        <div className="pagination">
          {[1, 2, 3].map((dot) => (
            <span key={dot} className={`dot ${currentStep === dot ? 'active' : ''}`}></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkinQuiz;