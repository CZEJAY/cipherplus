import { useState, useEffect } from 'react';

interface AutoTextProps {
  textArray: string[];
  speed: number;
}

const AutoText: React.FC<AutoTextProps> = ({ textArray, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(textArray);


  useEffect(() => {
    const currentText = textArray[currentIndex];
    

    const interval = setInterval(() => {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          // setCurrentIndex((prev) => prev++)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, speed / 0.9); // Adjust the delay as needed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [displayText, currentIndex, textArray, speed]);

  return <span className={"autoText !border-r-blue-500 !text-[1.5rem] sm:text-[2.95rem]"}>{displayText}</span>;
};

export default AutoText;
