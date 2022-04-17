const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  allowHTML: true,
});

ymaps.ready(function () {
  var newMap = new ymaps.Map(
      "mymap",
      {
        center: [48.872185, 2.354224],
        zoom: 12,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      newMap.getCenter(),
      {
        hintContent:
          "Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54",
        balloonContent:
          "Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "image/Subtract.gif",
        // Размеры метки.
        iconImageSize: [28, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );
  newMap.geoObjects.add(myPlacemark);
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate("#form");
  var selector = document.querySelector("#phone");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField("#name", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Вы не ввели имя",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Вы не ввели имя",
      },
      {
        rule: "required",
        errorMessage: "Введите Ваше имя",
      },
    ])
    .addField("#phone", [
      {
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: "Введите Ваш телефон",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите Ваш Email",
      },
      {
        rule: "email",
        errorMessage: "Вы не ввели Email",
      },
    ]);
});

$(function () {
  $(".marker").tooltip({
    items: "span.marker",
    content: "Глава 2, страница 176",
    show: "fold",
    position: {
      my: "center bottom",
      at: "center top-10",
      collision: "none",
    },
    close: function (event, ui) {
      ui.tooltip.hover(
        function () {
          $(this).stop(true).fadeTo(500, 1);
        },
        function () {
          $(this).fadeOut("500", function () {
            $(this).remove();
          });
        }
      );
    },
  });
});
