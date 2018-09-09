//event handler
$(document).ready(function () {



    // $("#submitButton").click(function () {
    // $("#submitButton").prop('enabled', true);
    // let fName = $('#firstName').val();
    // alert(fName);

    // });




    $(function () {


        //disable the submit button
        $('#btnInput').prop('disabled', true);

        $('#txtInput').keyup(function () {
            if ($(this).val() != '') {

                $('#btnInput').prop('disabled', false);

                $('#btnInput').click(function () {

                    let text = $('#txtInput').val();
                    alert(text);
                
                });
            }



        });



    })












});

