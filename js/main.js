$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function(event) {
        // Отменяет то что происходит при стандартном действии
        event.preventDefault()
        // при клилке показываем атрибут того, на что кликнули
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        //если он оранжевый убираем цвет
        $('.tabs-item-active').toggleClass('tabs-item-active');
        // присваиваем каждому кликнуту элементу класс с оранж цветом
        $(this).toggleClass('tabs-item-active');
        
        

    })

});