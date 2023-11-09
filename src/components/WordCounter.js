import React, { useState } from 'react';
function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    const words = newText.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  return (
  <>
  <div className="container text-center mt-4 mb-3">
  <h1 className='mb-4'>Responsive Paragraph Word Counter</h1>
  <div className="mb-3">
      <textarea className="form-control" value={text}  onChange={handleTextChange}id="myBox" rows="8"></textarea>
  </div>
  </div>
  
  <p className="container text-center mt-4 mb-3">Word Count:{wordCount}</p>
  </>
  )
}

export default WordCounter;

