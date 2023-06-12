function ListGroup() {
  let item = ['new york', 'tehran', 'san franssisco', 'tokyo', 'london'];

  return (
    <>
      <h1>List</h1>
      {item.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {item.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(item) => {
              if (
                831 <= item.clientX &&
                item.clientX <= 856 &&
                237 <= item.clientY &&
                item.clientY <= 254
              ) {
                console.log('hello motherfuckers');
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
