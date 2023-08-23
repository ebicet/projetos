const Calculation = () => {
  const valor1 = 10;
  const valor2 = 40;

  const handleyMyClick = (e) => {
    console.log(e);
  };

  const printEvenOdd = (number) => {
    if (number % 2 == 0) {
      return <h4>O número é par</h4>;
    } else {
      return <h4>O número é impar</h4>;
    }
  };

  return (
    <div>
      Meus calculos
      <div>
        <p>Valor 1: {valor1}</p>
        <p>Valor 2: {valor2}</p>
      </div>
      <div className="buttoncss">
        <button onClick={handleyMyClick}>Clique aqui nesse botão!!</button>
      </div>
      <div className="buttoncss">
        {" "}
        <button
          onClick={() => {
            console.log(valor1 + valor2);
          }}
        >
          Mostrar o resultado do claculos
        </button>
        <div>
          {printEvenOdd(3)}
          {printEvenOdd(4)}
        </div>
      </div>
    </div>
  );
};

export default Calculation;
