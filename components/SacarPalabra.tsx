import { FunctionalComponent } from "preact/src/index.d.ts";
import { Palabra } from "../utils/type.ts";

const SacarPalabra: FunctionalComponent<Palabra> = (props) => {
  const prop: Palabra = props;
  console.log(prop);
  return (
    <div>
      <ul>
        <h1>{prop.word}</h1>
        <li>{prop.license.name}</li>
        <li>{prop.license.url}</li>
        {prop.meanings.map((e) => (
          <ul>
            {e.antonyms.map((l) => <li>{l}</li>)}
            {e.definitions.map((l) => (
              <ul>
                {l.antonyms.map((o) => <li>{o}</li>)}
                <li>{l.definition}</li>
                {l.example === undefined ? null : <li>{l.example}</li>}
                {l.synonyms.map((o) => <li>{o}</li>)}
              </ul>
            ))}
          </ul>
        ))}
        {prop.phonetics.map((e) => (
          <ul>
            {e.license === null
              ? null
              : e.license === undefined
              ? null
              : <li>{e.license?.name}</li>}
            {e.license === null
              ? null
              : e.license === undefined
              ? null
              : <li>{e.license?.url}</li>}

            <li>{e.sourceUrl}</li>
            {e.text === undefined ? null : <li>{e.text}</li>}
          </ul>
        ))}
        {prop.sourceUrls.map((e) => <li>{e}</li>)}
      </ul>
      ))
    </div>
  );
};

export default SacarPalabra;
