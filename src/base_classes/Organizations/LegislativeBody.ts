import { ElectedRepresentative } from "../Persons";
import Organization from "./Organization";

class LegislativeBody extends Organization {
  name: string;
  members: ElectedRepresentative[];
}

export default LegislativeBody;