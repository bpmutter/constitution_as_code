import Person from './Person';

class Citizen extends Person {
  citizen_of: string;
  natural_born_citizen: boolean;
  date_of_citizenship: Date
  
  constructor(name: string, date_of_birth: Date, location_of_birth: City, citizen_of: string, date_of_citizenship?: Date) {
    super(name, date_of_birth, location_of_birth);
    this.citizen_of = citizen_of;
    this.natural_born_citizen = location_of_birth.country === citizen_of;
    if(this.natural_born_citizen === true){
      this.date_of_citizenship = this.date_of_birth;
    } else {
      if(!date_of_citizenship) {
        throw new Error("date_of_citizenship must be provided for non-natural born citizens");
      }
      this.date_of_citizenship = date_of_citizenship;
    }
  }
}

export default Citizen;