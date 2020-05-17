

$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault();
        $.ajax(
            {
                url:'https://icanhazdadjoke.com/slack',
            }
        ).then(
            (data) => {
                console.log(data.attachments[0].fallback);
                $('#joke').html(data.attachments[0].fallback);
            },
            (error) => {
                console.log(error);
            }
        )
    })
})


//PubG API Key eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OTcxNTU3MC0wM2U5LTAxMzctNjEyNy02MzUyYjZhNjU2MjYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ4NTQyNTI4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNoYXJhY3Rlci1kaXNwIn0.tbUvKV237lV_xamXx2fzYkMX653HzlNNIcdA8fpaQ-k
