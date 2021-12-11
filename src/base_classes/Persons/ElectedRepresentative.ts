import { Organization } from "../Organizations";
import { Polity } from "../Polities";


class ElectedRepresentative{
  title: string;
  organization: Organization;
  termDurationYears: number;
  termLimit: number | null;
  representingPolity: Polity;
  numberOfVotes: number;

  constructor(
    title: string, organization: Organization, termDurationYears: number, 
    representingPolity: Polity, numberOfVotes: number, termLimit?: number){
    this.title = title;
    this.organization = organization;
    this.termDurationYears = termDurationYears;
    this.representingPolity = representingPolity;
    this.numberOfVotes = numberOfVotes;
    if(termLimit){
      this.termLimit = termLimit;
    } else {
      this.termLimit = null;
    }
  }
}

export default ElectedRepresentative;