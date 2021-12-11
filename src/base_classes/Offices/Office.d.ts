import { Organization } from "../Organizations";
import { Person } from "../Persons";
import { Polity } from "../Polities";

interface Office {
  title: string;
  polityServing: Polity;
  polityRepresenting: Polity;
  organization: Organization;
  occupant: Person;
}