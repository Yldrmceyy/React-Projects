/* eslint-disable react/prop-types */
export default  function StartScreen({numQuestions}) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to tet your React mastery</h3>
      <button className="btn btn-ui">Lets Start!</button>
    </div>
  );
}

