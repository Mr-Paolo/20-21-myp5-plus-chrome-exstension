$('h1.type--h2').html('NEW TITLE!')

$('h1.type--h2').after('<button class="btn-under-title"> Click me</button>')

const button = $('.btn-under-title')
button.click(() => {
    alert("button clicked")
})

