let times = [
    {
        nome: "Fc Span",
        goleiro: "Henrique",
        alaDireita: "Gabriel",
        alaEsquerda: "Pedro",
        pivo: "Nicolas",
        fixo: "João",
        tecnico: "Yuri",
        vitorias: 22,
        derrotas: 55
    },
    {
        nome: "Raios",
        goleiro: "Miguel",
        alaDireita: "Rafael",
        alaEsquerda: "Samuel",
        pivo: "Gael",
        fixo: "Gustavo",
        tecnico: "Noah",
        vitorias: 15,
        derrotas: 6
    },
    {
        nome: " Ases da Chuteira FC",
        goleiro: "Ravi",
        alaDireita: "Lorenzo",
        alaEsquerda: "Benicio",
        pivo: "Jose",
        fixo: "Benjamim",
        tecnico: "Lucas",
        vitorias: 30,
        derrotas: 13
    },
    {
        nome: "Malfica",
        goleiro: "Arthur",
        alaDireita: "Matteo",
        alaEsquerda: "Augusto",
        pivo: "Antonio",
        fixo: "Apolo",
        tecnico: "Adrian",
        vitorias: 60,
        derrotas: 20
    },
    {
        nome: "Jaguars",
        goleiro: "Anderson",
        alaDireita: "Bernado",
        alaEsquerda: "Bento",
        pivo: "Breno",
        fixo: "Caio",
        tecnico: "Daniel",
        vitorias: 25,
        derrotas: 10
    },
]

function vertime (){
    times.forEach ((time)=>{
        console.log(time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(alaDireita)," + time.alaEsquerda + "(alaEsquerda)," + time.pivo + "(pivo)," + time.fixo + "(fixo)," + time.tecnico + "(tecnico)," + time.vitorias + "(vitorias)," + time.derrotas + "(derrotas),")
    });
}
vertime();
