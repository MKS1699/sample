type PersonProps = {
  id: string;
  name: string;
  age: number;
  address: string;
};

const Person = ({ id, name, age, address }: PersonProps) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{address}</div>
    </div>
  );
};

export default Person;
