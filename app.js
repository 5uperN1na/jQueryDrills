//event handler
$(document).ready(function () {

    $(function () {

        //disable the submit button
        $('#btnInput').prop('disabled', true);

        //check to see if input text value is not blank, enable button when text value entered then display value in alert.
        $('#txtInput').keyup(function () {
            if ($(this).val() != '') {

                //disable button so user cannot click
                $('#btnInput').prop('disabled', false);

                //function to grab value from html form.
                $('#btnInput').click(function () {

                    //assign value to a variable.
                    let $txt = $('#txtInput').val();

                    //display value in alert message
                    //alert($txt);

                    //testing different way to display value with other string.
                    //alert("Entered: " + $("#txtInput").val());

                    //appending value to h2 tag and h2 tag in a div tag and then to body.
                    //$('<div><h2>' + $('#txtInput').val()+ '</h2></div>').appendTo("body");

                    //using variable and appending value to h2 tag and h2 tag in a div tag and then to body.
                    //$('<div><h2>' + $txt + '</h2></div>').appendTo('body');

                    //testing moveover function with div tags
                    // $('div').mouseover(function () {
                    // $('div').css('background-color', 'yellow');
                    //  });
                    // $('div').mouseout(function () {
                    // $('div').css('background-color', 'lightgray');
                    // });


                    //using moveover function, to apply background color and border radius to div.
                    //$('div').mouseover(function () {
                        //var styles = {
                           // backgroundColor: 'lightgray',
                           // border: '1px solid black',
                      //  };

                       // $(this).css(styles);
                    //});






                });

            }

        });







    })












});

