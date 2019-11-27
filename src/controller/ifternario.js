module.exports = {

    "falso": (req,res) => {

        const a = 1
        const b = 2
        const vdd = "Verdadeiro!"
        const fals = "Falso!"

        return res.send(a === b ? vdd : fals)

    },

    "verdadeiro": (req,res) => {

        const a = 1
        const b = 1
        const vdd = "Verdadeiro!"
        const fals = "Falso!"

        return res.send(a === b ? vdd : fals)
        
    }

}