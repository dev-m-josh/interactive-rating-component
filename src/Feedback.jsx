import React, { useState } from 'react';

const Feedback = () => {
  const [input, setInput] =useState('')

  // State to track which content is visible
  const [feedback, setFeedback] = useState(true);

  //display clicked number
  const handleSelect = (value) => {
    setInput(value);
  };

  const handleClick = () => {
    // Toggle the content visibility
    setFeedback(!feedback);
  };

  return (
    <>
      {feedback ? (
        <div className='rating'>
          <img src="/images/icon-star.svg" alt="Star" />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className='rate'>
            <button onClick={() =>handleSelect('1')}>1</button>
            <button onClick={() =>handleSelect('2')}>2</button>
            <button onClick={() =>handleSelect('3')}>3</button>
            <button onClick={() =>handleSelect('4')}>4</button>
            <button onClick={() =>handleSelect('5')}>5</button>
          </div>
          <button onClick={handleClick} disabled= {!input}>Submit</button>
        </div>
      ) : (
        <div className='response'>
          <img src="/images/illustration-thank-you.svg" alt="" />
          <h3>You selected {input} out of 5</h3>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support , don't hesitate to get in touch!
          </p>
        </div>
      )}

    </>
  );
};

export default Feedback;
