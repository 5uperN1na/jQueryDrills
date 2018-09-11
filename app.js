//event handler
$(document).ready(function () {



    // $("#submitButton").click(function () {
    // $("#submitButton").prop('enabled', true);
    // let fName = $('#firstName').val();
    // alert(fName);

    // });



    $("<div><h2>Hello</h2></div>").appendTo("body")

    $('<div></div>').appendTo('body');
    $('<h2></h2>').appendTo('div');
    $('sdkljflsdjkf').appendTo('h2');

    //$('<ul></ul>').appendTo('div');

    $(function () {

        //disable the submit button
        $('#btnInput').prop('disabled', true);

        //check to see if input text value is not blank, enable button when text value entered then display value in alert.
        $('#txtInput').keyup(function () {
            if ($(this).val() != '') {

                $('#btnInput').prop('disabled', false);

                $('#btnInput').click(function () {

                    let word = $('#txtInput').val();
                    alert(word);

                 

                   


                });


            }




        });


        $("<div><h2>Hello</h2></div>").appendTo("body")


    })












});

