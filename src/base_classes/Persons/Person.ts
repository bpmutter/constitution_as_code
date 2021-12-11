class Person {
  name: string
  date_of_birth: Date
  location_of_birth: City

  constructor(name: string, date_of_birth: Date, location_of_birth: City) {
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.location_of_birth = location_of_birth
  }
}

export default Person;