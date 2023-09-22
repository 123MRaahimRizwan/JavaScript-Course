class RailwayForm {
  constructor(name, trainNo) {
    this.name = name;
    this.trainNo = trainNo;
  }

  submit() {
    alert(
      `${this.name}'s form has been submitted! with train no. ${this.trainNo}`
    );
  }
  reset() {
    alert(`${this.name}'s form has been reset! with train no. ${this.trainNo}`);
  }
  cancel() {
    alert(
      `${this.name}'s form has been cancelled! with train no. ${this.trainNo}`
    );
  }
}

RaahimForm = new RailwayForm("Raahim", 12345);
RaahimForm.submit();

MariamForm = new RailwayForm("Mariam", 67890);
MariamForm.submit();
