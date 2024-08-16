/* eslint-disable react/prop-types */
export default function TabButton({children}) {
  function handleClick()
  {
    console.log('Hello')
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
