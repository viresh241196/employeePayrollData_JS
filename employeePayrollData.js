class EmployeePayrollData {
  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }
  //getter and setter method
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegx = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegx.test(name)) this._name = name;
    else throw "invalid name";
  }

  get profilePic() {
    return this._profilePic;
  }
  set profilePic(profilePic) {
    this._profilePic = profilePic;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    let salaryRegx = RegExp("^[1-9]{1}([0-9])*$");
    if (salaryRegx.test(salary)) this._salary = salary;
    else throw "invalid salary";
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    let genderRegx = RegExp("[M|F]{1}");
    if (genderRegx.test(gender)) this._gender = gender;
    else throw "invalid gender";
  }

  get note(){return this._note}
  set note(note){
      this._note=note;
  }
  get startDate(){ return this._startDate}
  set startDate(startDate){
      this._startDate=startDate;
  }

  //method
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options);
    return (
      "id=" +
      this.id +
      ",name= " +
      this.name +
      ",salary=" +
      this.salary +
      ",gender=" +
      this.gender +
      ",startDate =" +
      empDate
    );
  }
}
