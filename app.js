

$(() => {
    const randomEthan = ['img/ethan_laugh1.jpg', 'img/ethan_smile.jpg', 'img/ethan_unimpressed.jpg', 'img/laughingEthan.jpg', 'img/ethan-excited.jpg']
    const randomEthanQuote = [`Don't quit your day job.`, 'That was so cheesy!', 'Your jokes suck, loser.', 'Bahahaha! Good one dad!', 'Tell me another one!']
    const bubblePosition = ['translateY(40%) translateX(190%)', 'translateY(80%) translateX(190%)', 'translateY(80%) translateX(190%)', 'translateY(60%) translateX(190%)', 'translateY(60%) translateX(190%)'];
    const createBackgroundListner = () => {
      $('body').on('click', (event) => {
        const randomEthanIndex = Math.floor(Math.random() * randomEthan.length);
        console.log("ranomEthanIndex", randomEthanIndex);
        $('.dad-bubble').children().hide();
        $('#button').css('display', 'none');
        $('.book').css('background-image', `url(${randomEthan[randomEthanIndex]})`);
        console.log($('#dad-bubble-image'))
        $('#ethan-h1-text').css('transform', bubblePosition[randomEthanIndex])
        $('.ethan-bubble').children().show();
        $('#ethan-bubble-image').attr('src', 'img/think_bubble.png');
        $('#ethan-h1-text').html(`${randomEthanQuote[randomEthanIndex]}`);
         $('body').on('click', (event) => {
           resetPage()
         })
      })
    }


    const resetPage = () => {
      console.log('yourmom')
      $('#ethan-bubble-image').attr('src', 'img/speech_bubble_4.png');
      $('#ethan-h1-text').html(`Tell me another joke Dad!`);
      $('.book').css('background-image', `url(img/alex_ethan.jpg)`);
      $('#button').css('display', 'block');
      $('#ethan-h1-text').css('transform', 'translateY(20%) translateX(190%)');
    }

  $('form').on('submit', (event) => {
      event.preventDefault();
      $.ajax(
          {
              url:'https://icanhazdadjoke.com/slack',
          }
      ).then(
          (data) => {
            console.log(data);
             const refreshButton = () => {
               $('.dad-bubble').children().show();
               $('.ethan-bubble').children().hide();
               $('h3').html(data.attachments[0].fallback);
               createBackgroundListner();
             }
             refreshButton();
          },
          (error) => {
            console.log(error);
      })
    })
})


//PubG API Key eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OTcxNTU3MC0wM2U5LTAxMzctNjEyNy02MzUyYjZhNjU2MjYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ4NTQyNTI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNoYXJhY3Rlci1kaXNwIn0.tbUvKV237lV_xamXx2fzYkMX653HzlNNIcdA8fpaQ-k
