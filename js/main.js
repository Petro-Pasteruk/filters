function app(){const
    filters=document.querySelectorAll(".filter"),cards=document.querySelectorAll('.card');filters.forEach(filter=>{let filterN=filter.dataset.filterName;filter.querySelectorAll("input").forEach(input=>{input.addEventListener("click",function(){filter.querySelectorAll("input").forEach(ipt=>{ipt.parentElement.classList.remove("selected")});if(this.checked){this.parentElement.classList.add("selected")}else{this.parentElement.classList.remove("selected")}})});filter.querySelectorAll(".button").forEach(btn=>{btn.addEventListener("click",function(){let btnBtn=this.querySelector("input");if(btnBtn){btnBtn.click()}
    if(this.dataset.filter==="all"){cards.forEach(card=>{card.classList.remove('hide');card.classList.remove('anime');document.querySelectorAll("input").forEach(input=>{input.checked=!1;input.parentElement.classList.remove("selected")})})}else{let checkedArray=[];document.querySelectorAll(".button").forEach(button=>{if(button.querySelector("input")){if(button.querySelector("input").checked){checkedArray.push(button.dataset.filter)}}});cards.forEach(card=>{card.classList.remove('hide');card.classList.remove('anime')});checkedArray.forEach(filterName=>{cards.forEach(card=>{let
        arrayFilters=card.dataset.filters.split(" "),counter=0;checkedArray.forEach(fltN=>{arrayFilters.forEach(flt=>{if(fltN===flt||flt===filterN){counter++}})});if(counter===checkedArray.length){card.classList.remove('hide');card.classList.remove('anime')}else{card.classList.add('hide');card.classList.add('anime')}})});console.log(checkedArray)}})})})}
app()