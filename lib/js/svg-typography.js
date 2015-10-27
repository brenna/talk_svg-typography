    $(document).ready(function() {
      $('#makeItGo').on('click', function() {
        $('#yes-no').find('animate').each(function() {
          this.beginElement();
        });
      });
    });