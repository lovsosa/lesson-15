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

// console.log(mainForm);
// console.log(formClass);


$(`.form`).on(`submit`, function (e) {
  e.preventDefault(e);
  let formInputCountry = $(`#form__country`);
  let formInputdate = $(`.form__date`);
  let formInputTextarea = $(`.review__massage`);
  let div = $(`<div>`).addClass(`sidebar__content`);

  let spanInputCountry = $(`<span></span>`).text(formInputCountry.val()); // Место
  let spanInputdate = $(`<span></span>`).text(formInputdate.val()); // Дата
  let divInputTextarea = $(`<div></div>`).text(formInputTextarea.val()); // Massage

  div.append(spanInputCountry)
  div.append(spanInputdate)
  div.append(divInputTextarea)
  $(`div.sidebar`).append(div)
});
// let formVal = $(`.content__notes>form`).on(`submit`, function (e) {
//   e.preventDefault();
//   let formVal = document.forms
//   console.log(formVal);
// })