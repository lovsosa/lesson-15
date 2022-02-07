// подсказки поиска
const options = {
  url: "https://restcountries.com/v2/all?fields=name,flag,capital,population",
  getValue: "name",
  list: {
    match: {
      enabled: true
    }
  },
  template: {
    type: "custom",
    method: function (value, item) {
      return `
      <span style="color: gray">${value}</span>
      <span style="color: gray">${item.capital}</span>
      `;
    }
  }
};
$('.form__country').easyAutocomplete(options);
let data = [];
// событие формы
$(`.form`).on(`submit`, function (e) {
  e.preventDefault(e);
  let formInputCountry = $(`.form__country`);
  let formInputdate = $(`.form__date`);
  let formInputTextarea = $(`.review__massage`);
  

  let item = {
    counrty: formInputCountry.val(),
    date: formInputdate.val(),
    text: formInputTextarea.val()
  }
  data.push(item);
  add(item, data.length)

});
$(`.sidebar`).on(`click`, function (event) {
  if (event.target.classList.contains(`cross`)) {
    event.target.parentElement.parentElement.remove()
    
  }
});
function add(item, count) {
  let cross = $(`<img src="../img/cross.png" alt="#">`).addClass(`cross`)
  let spanText = $(`<p></p>`).text(`Удалить запись`).addClass(`del--notes`)
  let divsidebar = $(`<div>`).addClass(`sidebar__content`);
  let div = $(`<div>`).addClass(`content__item`)
  let topick = $(`<div>`).addClass(`content__topick`);

  
  let spanInputCountry = $(`<span></span>`).addClass(`country__text`).text(`Место пробывание: ` + item.counrty); // Место
  let spanInputdate = $(`<span></span>`).addClass(`date__text`).text(item.date); // Дата
  let divInputTextarea = $(`<div></div>`).addClass(`textarea__text`).text(item.text); // Massage

  topick.prepend(`Запись #` + count)
  topick.append(spanInputdate)
  topick.append(spanInputCountry)
  topick.append(spanText)
  topick.append(cross)
  div.append(divInputTextarea)
  divsidebar.append(topick)
  divsidebar.append(div)
  $(`div.sidebar`).append(divsidebar)
  
}

// фокус
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormInputPlaceholder = mainFormInput.placeholder;
mainFormInput.addEventListener("focus", function () {
  mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function () {
mainFormInput.placeholder = mainFormInputPlaceholder;
});
