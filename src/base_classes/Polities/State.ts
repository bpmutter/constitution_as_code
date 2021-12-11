import Polity from './Polity';
import NationalGovernment from './NationalGovernment';

class State extends Polity {
  constructor(name: string, parent: NationalGovernment){
    super(name, parent)
  }
}

export default State