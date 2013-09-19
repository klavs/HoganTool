﻿    
    var hashEditor = ace.edit("hash");
    hashEditor.getSession().setUseWorker(false);
    hashEditor.setTheme("ace/theme/textmate");
    hashEditor.getSession().setMode("ace/mode/javascript");
    
    var templateEditor = ace.edit("template");
    templateEditor.getSession().setUseWorker(false);
    templateEditor.setTheme("ace/theme/textmate");
    templateEditor.getSession().setMode("ace/mode/javascript");
    
    var resultEditor = ace.edit("result");
    resultEditor.getSession().setUseWorker(false);
    resultEditor.setTheme("ace/theme/textmate");
    resultEditor.getSession().setMode("ace/mode/javascript");

    function generate(){
        var hash = JSON.parse(hashEditor.getValue());
        var template = Hogan.compile(templateEditor.getValue());;
        resultEditor.setValue(template.render(hash));
    }
