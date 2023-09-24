
function CommaSeparatedList({ s }:{s: string}) {
  const valuesArray = s.split(',').map(value => value.trim());

  if (valuesArray.length === 1) {
    return <p className='text-muted px-3'>{valuesArray[0]}</p>;
  }

  return (
      <div>
        <ol className='text-muted'>
          {valuesArray.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ol>
      </div>
  );
}

export default CommaSeparatedList;
