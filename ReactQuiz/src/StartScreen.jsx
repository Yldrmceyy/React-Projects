/* eslint-disable react/prop-types */
export default  function StartScreen({numQuestions}) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <p>{numQuestions} question to tet your React mastery</p>
      <button className="btn">Lets Start!</button>
    </div>
  );
}

