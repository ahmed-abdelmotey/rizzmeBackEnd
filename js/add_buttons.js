$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $("#sections"); //Fields wrapper
    var add_section     = $("#add_section"); //Add button ID
    var add_lecture     = $(".add_lecture"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_section).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append(
            '<div class="container-fluid"><div class="form-group"><label class="col-md-2 control-label" for="sec'+x+'">Name</label><div class="col-md-5"><input id="sec'+x+'" name="sec'+x+'" type="text" placeholder="Enter Section name" class="form-control input-md" required=""></div><a href="#" class="btn btn-default remove_field"><i class="glyphicon glyphicon-trash"></i></a> <button class="btn btn-primary add_lecture">Add Lecture</button> <hr class="featurette-divider"></div></div>'); //add input box
        }
    });
    var lectureDiv = '<div style="margin-top: 15px;"><label class="col-md-2 control-label" for="lec">Lecture Name</label><div class="col-md-5"><input id="lec" name="lec" type="text" placeholder="Enter Lecture name" class="form-control input-md" required=""></div><a href="#" class="btn btn-default rem_lec"><i class="glyphicon glyphicon-trash"></i></a><a href="#" class="btn btn-default add_lec"><i class="glyphicon glyphicon-plus"></i></a></div>';

    var qNo = 2;
function createQuestion(n) {
    return '<div class="question"><div class="form-group"><label class="col-md-2 control-label" for="lect_no">Question '+ n +'</label><div class="col-md-5"><input id="course_name" name="course_name" type="text" placeholder="Enter Question body" class="form-control input-md" required=""></div><a href="#" class="btn btn-default rem_question"><i class="glyphicon glyphicon-trash"></i></a> <a href="#" class="btn btn-default add_question"><i class="glyphicon glyphicon-plus"></i></a></div><div class="form-group"><label class="col-md-2 control-label" for="details">Answer</label><div class="col-md-5"><textarea class="form-control" id="details" name="details">detailed answer</textarea></div></div><hr class="featurette-divider"></div>'
}
var prcGrp = '<div class="pricegrp"><div class="form-group"><label class="col-md-2 control-label" for="grp">Group Name</label><div class="col-md-5"><input id="grp" name="grp" type="text" placeholder="Enter Group Name" class="form-control input-md" required=""></div><a href="#" class="btn btn-default rem_prcgrp"><i class="glyphicon glyphicon-trash"></i></a> <a href="#" class="btn btn-default add_prcgrp"><i class="glyphicon glyphicon-plus"></i></a></div><div class="form-group"><label class="col-md-2 control-label" for="prc">Price</label><div class="col-md-5"><input id="prc" name="prc" type="text" placeholder="Enter Price" class="form-control input-md" required=""></div></div><div class="form-group"><label class="col-md-2 control-label" for="frm">From</label><div class="col-md-5"><input id="frm" name="frm" placeholder="DD/MM/YYYY" type="text" class="form-control input-md" required=""></div></div><div class="form-group"><label class="col-md-2 control-label" for="to">To</label><div class="col-md-5"><input id="to" name="to" placeholder="DD/MM/YYYY" type="text" class="form-control input-md" required=""></div></div></div><hr class="featurette-divider">';

// lecture
    $(document).on('click', '.add_lecture', function(e){
        e.preventDefault();
        $(this).parent('div').find("hr").before(lectureDiv);
        $(this).remove();
    });

    $(document).on('click', '.add_lec', function(e){
        e.preventDefault();
        $(this).parent('div').parent('div').parent('div').find("hr").before(lectureDiv);
        $(this).remove();   
    });

// price
    $(document).on('click', '.add_prcgrp', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().append(prcGrp);
        // $(this).remove();
    });

    $(document).on('click', '.rem_prcgrp', function(e){
        e.preventDefault(); 
        if ($(this).parent().parent().parent().children('div').length > 1) {
            $(this).parent('div').parent('div').remove();
        }
        // console.log($(this).parent().parent().parent().children('div').length)

    });

// question
    $(document).on('click', '.add_question', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().append(createQuestion(qNo));
        qNo += 1;
        // $(this).remove();
    });

    $(document).on('click', '.rem_question', function(e){
        e.preventDefault(); 
        if ($(this).parent().parent().parent().children('div').length > 1) {
            $(this).parent('div').parent('div').remove();
            qNo -= 1;
        }
        // console.log($(this).parent().parent().parent().children('div').length)

    });

    $(document).on('click', '.rem_lec', function(e){
        e.preventDefault();
  /*      var x = $(this).parent('div').parent('div').find('div').length === 3;
        console.log(x);*/
        if ($(this).parent('div').parent('div').find('div').length === 3) {$(this).parent('div').parent('div').find("hr").before(' <button class="btn btn-primary add_lecture">Add Lecture</button> ');}
        if ($(this).parent('div').next()[0].tagName === 'HR') {$(this).parent('div').prev().append(' <a href="#" class="btn btn-default add_lec"><i class="glyphicon glyphicon-plus"></i></a></div>')}
        // console.log($(this).parent('div').next()[0].tagName === 'HR');
        $(this).parent('div').remove();

    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })




});