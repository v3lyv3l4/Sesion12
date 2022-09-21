input.onButtonPressed(Button.A, function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("VAMOS A ESQUIAR")
    } else {
        basic.showNumber(input.temperature())
    }
    if (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("HAGAMOS UN PICNIC")
    }
    if (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("VAMOS A LA PLAYA")
    }
    if (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("MEJOR NO SALGAS")
    }
})
