// 파일을 쪼갰을 때 필수로 작성해야함 1
const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = userState('변승훈');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = uesRef(null);

const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      value('');
      setState
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    } 
  };
  
const  onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input className="클래스입니다" ref={inputRef} value={value} onChange={onChangeInput} />
        <button >클릭!!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

// 파일을 쪼갰을 때 필수로 작성해야함 2, client.jsx에서 불러올 수 있음
module.exports = WordRelay;