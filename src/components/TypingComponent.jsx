import { useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

const TypingComponent = ({sentences, delay=100}) => {
  const elRef = useRef(null);

  const typeSentence = useCallback(async (sentence, elRef) => {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      elRef.current.append(letters[i]);
      i++;
    }
  }, [delay]);

  const deleteSentence = useCallback(async (elRef) => {
    const sentence = elRef.current.innerHTML;
    const letters = sentence.split("");
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      elRef.current.innerHTML = letters.join("");
    }
  }, []);

  const waitForMs = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const carousel = async () => {
      let i = 0;
      let isActive = true;
      while (isActive) {
        await typeSentence(sentences[i], elRef);
        await waitForMs(1500);
        await deleteSentence(elRef);
        await waitForMs(500);
        i++;
        if (i >= sentences.length) {
          i = 0;
        }
      }
    };

    carousel();
  }, [sentences, deleteSentence, typeSentence]);

  return (
    <div className="typing-wrapper">
      <p className="text" ref={elRef}></p>
      <div className="cursor"></div>
    </div>
  )
}

TypingComponent.propTypes = {
  sentences: PropTypes.array, 
  delay: PropTypes.number
}

export default TypingComponent;