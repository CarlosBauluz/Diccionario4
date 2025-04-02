import SacarPalabra from "../components/sacarPalabra.tsx";
import { APIDiccionario } from "../utils/api.ts";
import { Palabra } from "../utils/type.ts";

export default async function Home() {
  const props: Palabra[] = await APIDiccionario("man");
  // console.log(props);
  return (
    <div>
      <p>hola buenas</p>
      {props.map((em) => (
        <div>
          <SacarPalabra {...em} />
        </div>
      ))}
    </div>
  );
}
