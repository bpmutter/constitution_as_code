class Polity {
  name: string;
  parent: Polity | null;

  constructor(name: string, parent: Polity | null){
    this.name = name;
    this.parent = parent;
  }

}

export default Polity;