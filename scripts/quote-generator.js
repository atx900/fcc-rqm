$(document).ready(function () {

  var quote;
  var author;

  function getNewQuote() {                                // forismatic API = random quote generator
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
          $('#author').text('By ' + author);
        } else {
          $('#author').text('-- Unknown');
        }
      }
    });
  }

  getNewQuote();                                            // generates random quote on page load / reload
  $('.getQuote').on('click', function(event) {              // generates random quote on 'get quote' button click
    event.preventDefault();
    getNewQuote();
  });

  $('.tweetQuote').on('click', function(event) {            // shares generated quote on twitter
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
  });

});
