let Person = (props) => {
  const { name, age, hobbies } = props;
  return (
    <div>
      <p>Learn some information about this person</p>
      {age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}
      {name.length > 6 ? <p>name: {name.substring(0,6)}</p> : <p>name: {name}</p>}
      <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
    </div>
  );
}
