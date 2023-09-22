class RailwayForm {
  constructor(name, trainNo, address) {
    this.name = name;
    this.trainNo = trainNo;
    this.address = address;
  }
  preview() {
    alert(
      `${this.name}'s form is for train no. ${this.trainNo} and address ${this.address}`
    );
  }

  submit() {
    alert(
      `${this.name}'s form has been submitted! with train no. ${this.trainNo} and address ${this.address}`
    );
  }
  cancel() {
    alert(
      `${this.name}'s form has been cancelled! with train no. ${this.trainNo}`
    );
    this.trainNo = 0;
  }
}

let raahimForm = new RailwayForm(
  "Raahim",
  "01146",
  "32nd Street, Pacific Ocean, Ocean"
);

raahimForm.preview();
raahimForm.submit();
raahimForm.cancel();
raahimForm.preview();
