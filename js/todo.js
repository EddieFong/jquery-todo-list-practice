$(document)
    .ready(function () {
        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }
          
        function addToDo() {
            var input = $(".input-text").val();
            $("ol").append(`<li id="` + generateUUID() + `" class="">
            <input name="done-todo" type="checkbox" class="done-todo"> ` + input + ` </li>`);
            $(".input-text").val("");
        }

        $('#button').click(function(){
            addToDo();
        });

        $('.input-text').bind("enterKey",function(e){
            addToDo();
        });

        $('.input-text').keyup(function(e){
            if(e.keyCode == 13)
            {
                addToDo();
            }
        });

        $('.done-todo').change(function() {
            if($(this).is(":checked")){
              $(this).parent().addClass("checked");
            }else{
              $(this).parent().removeClass("checked");
            }
        })

        $('li').dblclick(function() {
            $(this).attr('contentEditable', 'true');
            $(this).keypress(function(event) {
                if (event.which == '13') {
                    $(this).attr('contenteditable', 'false');
                }
            })
        });

        $("[href='#']").click(function() {
            if ($(this).attr("data-filter") == "all") {
                $('ol li').show();
            } else if ($(this).attr("data-filter") == "active") {
                $('ol li').show();
                $('ol li.checked').hide();
            } else if ($(this).attr("data-filter") == "complete") {
                $('ol li').hide();
                $('ol li.checked').show();
            }
        });

        // code to be implemented
    });