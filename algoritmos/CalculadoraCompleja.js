export const CalculadoraCompleja = (list) =>
    list.map((e) => {
        if (e >= 20) {
            return Math.round(2 + e * 0.1)
        } else if (e >= 10 && e <= 20) {
            return Math.round(2 + e * 0.05)
        } return 2
    })

