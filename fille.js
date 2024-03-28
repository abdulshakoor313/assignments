$(document).ready(function()
{
    $('h1').show('slow');
}

)

$(document).ready(function()
{
    $('#pic1').click(function()
    {
        alert("Why you click my picture?")
    }
    )
}
)
$(document).ready(function()
{
    $('#pic2').click(function()
    {
        $('.para,#anas').show('slow');
    }
    )
}
)

$(document).ready(function()
{
    $('#pic3').click(function()
    {
        $('.para2,#me').show('slow');
        $(function()
        {
            $('.para,#anas').hide('slow');
        })
    }
    )
}
)

$(document).ready(function()
{
    $('#pic2').click(function()
    {
        $('.para,#anas').show('slow');
        $(function()
        {
            $('.para2,#me').hide('slow');
        })
    }
    )
}
)

$(document).ready(function()
{
    $('#button').click(function()
    {
        $('#container').toggle('slow');
    }
    )
}
)

$(document).ready(function(){
    $('#button').hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });
