const Tempo = (props) => {
  console.log("Passando pelo Frontend");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estatico - com delay de 5 segundos)</div>
    </div>
  );
};

export async function getStaticProps() {
  console.log("Passando pelo getStaticProps");
  console.log("Adicionando delay de 5 segundos")
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  await delay(5000);

  return {
    props: {
      staticDateString,
    },
    revalidate: 1
  };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default Tempo;
