var countDownDate = new Date("May 1, 2022 24:00:00").getTime()

var x = setInterval(function () {

    var now = new Date().getTime()
    var distance = countDownDate - now

    var months = Math.floor(distance / (1000 * 30 * 60 * 60 * 24))
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)


    if (months < 10) {
        var months = months.toString()
        months = '0' + months
    }

    if (days < 10) {
        var days = days.toString()
        days = '0' + days
    }

    if (hours < 10) {
        var hours = hours.toString()
        hours = '0' + hours
    }

    if (minutes < 10) {
        var minutes = minutes.toString()
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        var seconds = seconds.toString()
        seconds = '0' + seconds
    }

    document.getElementById("month").innerHTML = months
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds

    if (distance < 0) {
        clearInterval(x)
        $('.container h2').innerHTML = "EXPIRED"
    }
}, 1000)


$("form").submit(function (event) {
    console.log($(this).serializeArray())
    event.preventDefault()
})