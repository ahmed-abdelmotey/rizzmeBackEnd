$(document).ready(function(){
  var date_input1=$('input[name="frm"]'); //our date input has the name "date"
  var container1=$('#frm').parent();
  var options1={
    format: 'dd/mm/yyyy',
    container: container1,
    todayHighlight: true,
    autoclose: true,
  };
  date_input1.datepicker(options1);

  var date_input2=$('input[name="to"]'); //our date input has the name "date"
  var container2=$('#to').parent();
  var options2={
    format: 'dd/mm/yyyy',
    container: container2,
    todayHighlight: true,
    autoclose: true,
  };
  date_input2.datepicker(options2);
})