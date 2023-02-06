import { GENTLEMEN } from "../../mocks/gentlemen";
import { Gentleman } from "../gentleman/gentleman";

export function Info() {
  return (
    <ul className="gentlemen">
      {GENTLEMEN.map((item) => (
        <Gentleman
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          profession={item.profession}
          twitter={item.twitter}
          picture={item.picture}
          alternativeText={item.alternativeText}
          selected={item.selected}
        ></Gentleman>
      ))}
    </ul>
  );
}
