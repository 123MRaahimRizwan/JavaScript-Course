class RailwayForm {
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
  fill(name, trainNo) {
    this.name = name;
    this.trainNo = trainNo;
  }
}

RaahimForm = new RailwayForm();
RaahimForm.fill("Raahim", 12345);
RaahimForm.submit();

MariamForm = new RailwayForm();
MariamForm.fill("Mariam", 67890);
MariamForm.submit();
