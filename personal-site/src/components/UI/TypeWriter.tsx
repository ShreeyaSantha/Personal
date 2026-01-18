
import { useState, useEffect } from 'react';

export const useTypewriter = (text:string[], speed: number = 25) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
     let i = 0; //array index
     let j = -1; // character index
     let backwords = false;
    const typingInterval = setInterval(() => {
      if (i < text.length && j < text[i].length && !backwords) {
        setDisplayText(text[i].substring(0, j + 1))
        j++;
        console.log("Adding char:", j);

      } else if (i < text.length - 1 && (j === text[i].length || backwords)) {
        console.log("Deleting char:", j);

        backwords = true;
        setDisplayText(prevText => prevText.slice(0, -1));
        j--;
        if (j === 0) {
          backwords = false;
          i = (i + 1);
        }
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      setIsTyping(false);
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return [displayText, isTyping] as const;
};
