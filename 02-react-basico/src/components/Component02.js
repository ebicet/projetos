import Component03 from "./Component03";
const component02 = () => {
  return (
    <div>
      <div>
        {" "}
        <h3> Aqui preciso chamar um outro comando.</h3>
        {console.log("Mensagem que pode agregar comentários")}
        <h2>Yeah!</h2>
        <Component03 />
      </div>
    </div>
  );
};

export default component02;
