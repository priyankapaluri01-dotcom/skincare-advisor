import React, { useState } from 'react';
import './skin.css';

const SkinQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMainType, setSelectedMainType] = useState('');
  const [finalSkinType, setFinalSkinType] = useState(null);
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

  const startwork = () => setCurrentStep(2);

  const clickmemory = (type) => {
    setSelectedMainType(type);
    setCurrentStep(3);
  };

  const lookup = (resultType) => {
    setFinalSkinType(recommendations[resultType]);
    setCurrentStep(4);
  };

  const goback = () => {
    setCurrentStep(1);
    setSelectedMainType('');
    setFinalSkinType(null);
  };

  return (
    <div className="skin-container">
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
      {currentStep === 2 && (
        <div className="quiz-section content-fade-in">
          <h1 className="quiz-title">How does your face look?</h1>
          <div className="options-wrapper">
            <div className="quiz-card shape-rectangle pastel-yellow" onClick={() => clickmemory('Red & Irritated')}>
              <span className="quiz-text">Red & Irritated</span>
            </div>
            <div className="quiz-card shape-circle pastel-pink" onClick={() => clickmemory('Shiny & Greasy')}>
              <span className="quiz-text">Shiny & Greasy</span>
            </div>
            <div className="quiz-card shape-rhombus pastel-teal" onClick={() => clickmemory('Partly Greasy')}>
              <span className="quiz-text inner-text">Partly Greasy</span>
            </div>
            <div className="quiz-card shape-square pastel-blue" onClick={() => clickmemory('Normal')}>
              <span className="quiz-text">Normal</span>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="quiz-section content-fade-in">
          <h2 className="sub-heading">Examine and touch your skin.</h2>
          <h1 className="quiz-title">How does it look and feel?</h1>
          <div className="options-wrapper">
            {deepDiveQuestions[selectedMainType].map((option, index) => (
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
          <span className={`dot ${currentStep === 1 ? 'active' : ''}`}></span>
          <span className={`dot ${currentStep === 2 ? 'active' : ''}`}></span>
          <span className={`dot ${currentStep === 3 ? 'active' : ''}`}></span>
        </div>
      )}
    </div>
  );
};

export default SkinQuiz;