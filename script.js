let textbox = document.getElementById("textbox");

        let text = textbox.addEventListener("input", function(){
            let text = this.value;
            let char = text.length;
            document.getElementById("char").innerHTML = char;
        })