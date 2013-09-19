    function generate(){
        var hash = JSON.parse($("textarea#hash").val());
        var template = Hogan.compile($("textarea#template").val());;
        var result = template.render(hash)
        $("textarea#result").val(result);
    }