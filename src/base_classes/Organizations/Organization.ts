import { Polity } from "../Polities";

class Organization {
  name: string;
  polity: Polity;

  constructor(name: string, polity: Polity){
    this.name = name;
    this.polity = polity;
  }
}

export default Organization