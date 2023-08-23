import Component02 from "./Component02";

const Component01 = () => {
  return (
    <div>
      <h1> esse é o meu primeiro teste sem ajuda.</h1>
      <div>
        <Component02 />
      </div>
      {console.log("Mensagem que pode agregar comentários")}
    </div>
  );
};

export default Component01;
