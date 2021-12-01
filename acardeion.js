let acardeions = document.querySelectorAll(".acardeion");
// console.log(acardeion.children)
acardeions.forEach(acardeion =>{
  Array.from(acardeion.children).forEach((wrapper) => {
    if(wrapper.classList.contains("show")){
        wrapper.querySelector("div").style.maxHeight =wrapper.querySelector("div").scrollHeight + 30 + 'px';
    }
  wrapper.querySelector("span").addEventListener("click", (e) => {
    let span = e.target;
    let wrapper = span.parentElement;
    let div =span.nextElementSibling;
    // console.log(div.scrollHeight)
    wrapper.classList.toggle("show");
    if(wrapper.classList.contains("show")){
        div.style.maxHeight = div.scrollHeight + 30 + 'px';
    }else{
        div.style.maxHeight = null;
    }
    Array.from(acardeion.children).forEach(w => {
      if (w != wrapper) {
        w.classList.remove("show");
        w.querySelector('div').style.maxHeight = null;

      }
    });
  });
});
})
