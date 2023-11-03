//defining a fuction to finding grade
function getResult() {
  let studentName,
    studentRollNo,
    htmlmarks,
    cssmarks,
    jsmarks,
    bsmarks,
    tot,
    avg,
    grd;

  //data collecting from input box
  studentName = stdname.value;
  studentRollNo = rollno.value;
  htmlmarks = +html.value;
  cssmarks = +css.value;
  jsmarks = +js.value;
  bsmarks = +bs.value;

  //calculation part
  tot = htmlmarks + cssmarks + jsmarks + bsmarks;
  avg = tot / 4;

  //checking pass or fail
  if (htmlmarks > 39 && cssmarks > 39 && jsmarks > 39 && bsmarks > 39) {
    //pass
    grd =
      avg >= 90
        ? "A+"
        : avg >= 80
        ? "A"
        : avg >= 70
        ? "B+"
        : avg >= 60
        ? "B"
        : avg >= 50
        ? "C"
        : "D";
  } else {
    grd = "Fail!";
  }
  studname.value = "Name :" + studentName;
  studrollno.value = "Roll No :" + studentRollNo;
  total.value = "Total Marks : " + tot;
  average.value = "Average : " + avg;
  grade.value = "Your Grade : " + grd;
}
