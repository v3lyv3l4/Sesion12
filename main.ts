input.onButtonPressed(Button.A, function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("VAMOS A ESQUIAR")
    } else {
        basic.showNumber(input.temperature())
    }
    if (input.temperature() == 20) {
        basic.showString("HAGAMOS UN PICNIC")
    }
    if (input.temperature() == 30) {
        basic.showString("VAMOS A LA PLAYA")
    }
    if (input.temperature() == 40) {
        basic.showString("MEJOR NO SALGAS")
    }
})
