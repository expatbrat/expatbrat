

$(() => {
    const randomEthan = ['img/ethan_laugh1.jpg', 'img/ethan_slap.gif', 'img/ethan_angry.jpg']
    // const showButton = () => {
    //     $('#button').show()
    // }

    // showButton()

    $('form').on('submit', (event) => {
        event.preventDefault();
        $.ajax(
            {
                url:'https://icanhazdadjoke.com/slack',
            }
        ).then(
            (data) => {
                console.log(data.attachments[0].fallback);
                $('h3').html(data.attachments[0].fallback);
                $('#dad-bubble-image').css('display', 'block');
                $('.ethan-bubble').children().hide();
                // $('.book').css('background-image', `url('img/ethan_slap.gif')`)
                createBackgroundListner();
                console.log(createBackgroundListner);

            },
            (error) => {
                console.log(error);
            }
        )
    })


    const createBackgroundListner = () => {
      $('body').on('click', (event) => {
        $('.dad-bubble').children().hide();
        $('.book').css('background-image', `url(${randomEthan[0]})`);
        console.log($('#dad-bubble-image'))
        $('#ethan-bubble-image').attr('src', 'img/think_bubble.png');
        $('.ethan-bubble').children().show();
        $('#ethan-h1-text').html(`You're so funny dad!`);
        $('body').removeEventListener()
    })
  }





})


//PubG API Key eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OTcxNTU3MC0wM2U5LTAxMzctNjEyNy02MzUyYjZhNjU2MjYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ4NTQyNTI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNoYXJhY3Rlci1kaXNwIn0.tbUvKV237lV_xamXx2fzYkMX653HzlNNIcdA8fpaQ-k
