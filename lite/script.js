const playlist = [
    { title: "Camarada", artist: "Casaca", src: "../audio/casaca/camarada.mp3", cover: "img/casaca1.png" },
    { title: "O Menino Que Sobe a Ladeira (Part. Rapadura)", artist: "Casaca", src: "../audio/casaca/meninoladeira.mp3", cover: "img/casaca3.png" },
    { title: "Anjo Samile", artist: "Casaca", src: "../audio/casaca/anjosamile.mp3", cover: "img/casaca2.png" },
    { title: "Noite Fria", artist: "Casaca", src: "../audio/casaca/noitefria.mp3", cover: "img/casaca2.png" },
    { title: "Garças de Jacarenema", artist: "Casaca", src: "../audio/casaca/garcas.mp3", cover: "img/casaca1.png" },
    { title: "Clima de Rodeio", artist: "Dallas Company", src: "../audio/dallascompany/climaderodeio.mp3", cover: "img/dallas.png" },
    { title: "Saudade", artist: "Dallas Company", src: "../audio/dallascompany/saudade.mp3", cover: "img/dallas.png" },
    { title: "Black Mu", artist: "Dallas Company", src: "../audio/dallascompany/blackmu.mp3", cover: "img/dallas.png" },
    { title: "Dança de Cowboy", artist: "Dallas Company", src: "../audio/dallascompany/dancadecowboy.mp3", cover: "img/dallas.png" },
    { title: "Além do Mar", artist: "Macucos", src: "../audio/macucos/alemdomar.mp3", cover: "img/macucos.png" },
    { title: "Haverá", artist: "Macucos", src: "../audio/macucos/havera.mp3", cover: "img/macucos.png" },
    //{ title: "Depende de Nós", artist: "Moxuara", src: "../audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
    { title: "Os Meninos da Baía de Vitória", artist: "Moxuara", src: "../audio/moxuara/dependedenos.mp3", cover: "img/moxuara.png" },
    { title: "Quero Ver Você Feliz", artist: "Paulo Sérgio", src: "../audio/paulosergio/querovervcfeliz.mp3", cover: "img/paulosergio.png" },
    { title: "Não Creio em Mais Nada", artist: "Paulo Sérgio", src: "../audio/paulosergio/naocreioemmaisnada.mp3", cover: "img/paulosergio.png" },
    { title: "Pro Diabo os Conselhos de Vocês", artist: "Paulo Sérgio", src: "../audio/paulosergio/paraodiaboosconselhos.mp3", cover: "img/paulosergio.png" },
    { title: "Minhas Qualidades, Meus Defeitos", artist: "Paulo Sérgio", src: "../audio/paulosergio/qualidadesdefeitos.mp3", cover: "img/paulosergio.png" },
    { title: "Última Canção", artist: "Paulo Sérgio", src: "../audio/paulosergio/ultimacancao.mp3", cover: "img/paulosergio.png" },
    { title: "Você Vai Me Perder", artist: "Paulo Sérgio", src: "../audio/paulosergio/vcvaimeperder.mp3", cover: "img/paulosergio2.png" },
    { title: "Eu Te Amo, Eu Te Venero", artist: "Paulo Sérgio", src: "../audio/paulosergio/euteamoeutevenero.mp3", cover: "img/paulosergio2.png" },
    { title: "Selvageria", artist: "Rastaclone", src: "../audio/rastaclone/selvageria.mp3", cover: "img/rastaclone.png" },
    { title: "Perfume de Flor", artist: "Rastaclone", src: "../audio/rastaclone/perfumedeflor.mp3", cover: "img/rastaclone.png" },
    { title: "Sereia", artist: "Rastaclone", src: "../audio/rastaclone/sereia.mp3", cover: "img/rastaclone2.png" },
    { title: "Forte", artist: "Rastaclone", src: "../audio/rastaclone/forte.mp3", cover: "img/rastaclone3.png" },
    { title: "Esse Cara Sou Eu", artist: "Roberto Carlos", src: "../audio/robertocarlos/essecarasoueu.mp3", cover: "img/rc5.png" },
    { title: "Jesus Cristo", artist: "Roberto Carlos", src: "../audio/robertocarlos/jesuscristo.mp3", cover: "img/rc4.png" },
    { title: "Chegastes", artist: "Roberto Carlos", src: "../audio/robertocarlos/chegastes.mp3", cover: "img/rc7.png" },
    { title: "Amigo", artist: "Roberto Carlos", src: "../audio/robertocarlos/amigo.mp3", cover: "img/rc6.png" },
    { title: "Como é Grande Meu Amor Por Você", artist: "Roberto Carlos", src: "../audio/robertocarlos/comoegrande.mp3", cover: "img/rc8.png" },
    { title: "Parei na Contra Mão", artist: "Roberto Carlos", src: "../audio/robertocarlos/contramao.mp3", cover: "img/rc2.png" },
    { title: "Splish Splash", artist: "Roberto Carlos", src: "../audio/robertocarlos/splishsplash.mp3", cover: "img/rc2.png" },
    { title: "A Namoradinha do Amigo Meu", artist: "Roberto Carlos", src: "../audio/robertocarlos/namoradinha.mp3", cover: "img/rc3.png" },
    { title: "Bloco na Rua", artist: "Sérgio Sampaio", src: "../audio/sergiosampaio/bloconarua.mp3", cover: "img/sergiosampaio.png" },
    { title: "Viajei de Trem", artist: "Sérgio Sampaio", src: "../audio/sergiosampaio/viajeidetrem.mp3", cover: "img/sergiosampaio.png" },
    { title: "A Cor É Rosa", artist: "Silva", src: "../audio/silva/acorerosa.mp3", cover: "img/silva.png" },
    { title: "Amianto", artist: "Supercombo", src: "../audio/supercombo/amianto.mp3", cover: "img/supercombo1.png" },
    { title: "Piloto Automático", artist: "Supercombo", src: "../audio/supercombo/pilotoautomatico.mp3", cover: "img/supercombo1.png" },
    { title: "Beijo Matador", artist: "Forró Bemtivi", src: "../audio/bemtivi/beijomatador.mp3", cover: "img/bemtivi1.png" },
    { title: "Nosso Forró", artist: "Forró Bemtivi", src: "../audio/bemtivi/nossoforro.mp3", cover: "img/bemtivi1.png" },
    { title: "Forró de Itaúnas", artist: "Chama Chuva", src: "../audio/chamachuva/forrodeitaunas.mp3", cover: "img/chamachuva1.png" },
    { title: "Samarina", artist: "Chama Chuva", src: "../audio/chamachuva/samarina.mp3", cover: "img/chamachuva1.png" },
    { title: "Um Pouquinho de Você", artist: "Chama Chuva", src: "../audio/chamachuva/umpouquinhodevc.mp3", cover: "img/chamachuva1.png" },
    { title: "Castigo (Versão)", artist: "Trio Chapahall's", src: "../audio/chapahalls/castigoversao.mp3", cover: "img/chapahalls1.png" },
    { title: "Sonhos (Versão)", artist: "Trio Chapahall's", src: "../audio/chapahalls/sonhos.mp3", cover: "img/chapahalls2.png" },
    { title: "Ritmo Quente", artist: "Trio Chapahall's", src: "../audio/chapahalls/ritmoquente.mp3", cover: "img/chapahalls2.png" },
    { title: "A Deriva", artist: "Cidade do Reggae", src: "../audio/cidadedoreggae/aderiva.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Feito Um Carrossel", artist: "Cidade do Reggae", src: "../audio/cidadedoreggae/feitoumcarrossel.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "A Fé", artist: "Cidade do Reggae", src: "../audio/cidadedoreggae/afe.mp3", cover: "img/cidadedoreggae2.png" },
    { title: "Amor de Verão", artist: "Cidade do Reggae", src: "../audio/cidadedoreggae/amordeverao.mp3", cover: "img/cidadedoreggae2.png" },
    { title: "Te Vejo na Jamaíca (Part. Janaína Pereira)", artist: "Cidade do Reggae", src: "../audio/cidadedoreggae/tevejonajamaica.mp3", cover: "img/cidadedoreggae1.png" },
    { title: "Na Puxada de Rede", artist: "Manimal", src: "../audio/manimal/napuxadaderede.mp3", cover: "img/manimal1.png" },
    { title: "Promessa", artist: "Manimal", src: "../audio/manimal/promessa.mp3", cover: "img/manimal1.png" },
    { title: "Valeu a Pena", artist: "Manimal", src: "../audio/manimal/valeuapena.mp3", cover: "img/manimal1.png" },
    { title: "Anjo", artist: "Forró Raiz", src: "../audio/raiz/anjo.mp3", cover: "img/raiz1.png" },
    { title: "Deixa Chover", artist: "Forró Raiz", src: "../audio/raiz/deixachover.mp3", cover: "img/raiz1.png" },
    { title: "Lembranças", artist: "Forró Raiz", src: "../audio/raiz/lembrancas.mp3", cover: "img/raiz1.png" },
    { title: "Saudade Grande", artist: "Forró Raiz", src: "../audio/raiz/saudadegrande.mp3", cover: "img/raiz1.png" },
    { title: "Peito Aberto", artist: "Budah", src: "../audio/budah/peitoaberto.mp3", cover: "img/budah1.png" },  
    { title: "Fiorino", artist: "Gabriel Gava", src: "../audio/gabrielgava/fiorino.mp3", cover: "img/gg1.png" },  
    { title: "Você", artist: "Dead Fish", src: "../audio/deadfish/voce.mp3", cover: "img/df1.png" },  
    { title: "Deus Caprichou", artist: "Daniel Caon", src: "../audio/danielcaon/deuscaprichou.mp3", cover: "img/dc1.png" },  
    { title: "Então Deixa", artist: "Nick Cruz", src: "../audio/nickcruz/entaodeixa.mp3", cover: "img/nc2.png" },  
    { title: "Até de Manhã", artist: "Nick Cruz", src: "../audio/nickcruz/atedemanha.mp3", cover: "img/nc1.png" },  
    { title: "Sou Igualzinho a Você", artist: "Elias Wagner", src: "../audio/eliaswagner/souigualzinhoavoce.mp3", cover: "img/ew1.png" },  
    { title: "A Dor Um Dia Vai Passar", artist: "Elias Wagner", src: "../audio/eliaswagner/adorumdiavaipassar.mp3", cover: "img/ew1.png" },   
    { title: "Sai Dessa Coração", artist: "Alemão do Forró", src: "../audio/alemao/saidessacoracao.mp3", cover: "img/alemao1.png" },    
    { title: "Fica Amor", artist: "Alemão do Forró", src: "../audio/alemao/ficaamor.mp3", cover: "img/alemao2.png" },
    { title: "Tudo Que Você Fizer", artist: "SalvAÇÃO", src: "../audio/salvacao/tudoquevcfizer.mp3", cover: "img/salvacao1.png" },    
    { title: "Carametade", artist: "SalvAÇÃO", src: "../audio/salvacao/carametade.mp3", cover: "img/salvacao2.png" },    
    { title: "Como Vai Você", artist: "SalvAÇÃO", src: "../audio/salvacao/comovaivc.mp3", cover: "img/salvacao2.png" },    
    { title: "Os Dias", artist: "SalvAÇÃO", src: "../audio/salvacao/osdias.mp3", cover: "img/salvacao2.png" },    
    { title: "Pode Crer", artist: "SalvAÇÃO", src: "../audio/salvacao/podecrer.mp3", cover: "img/salvacao2.png" }    
];

const audioPlayer = document.getElementById('audio-player');
const infoMusica = document.getElementById('info-musica');

let indicesMisturados = [];
let indiceAtual = 0;

// Função para embaralhar o array (Fisher-Yates)
function embaralhar(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Prepara a lista de reprodução aleatória
function iniciarPlaylist() {
    indicesMisturados = Array.from(Array(playlist.length).keys());
    embaralhar(indicesMisturados);
    indiceAtual = 0;
}

// Toca a música atual
function tocarProxima() {
    if (indicesMisturados.length === 0) return;

    const indexMusica = indicesMisturados[indiceAtual];
    const caminhoArquivo = playlist[indexMusica];

    audioPlayer.src = caminhoArquivo;
    
    // Extrai o nome do arquivo para exibir na faixa
    const nomeExibicao = caminhoArquivo.split('/').pop().replace(/\.[^/.]+$/, "");
    infoMusica.textContent = "Tocando: " + decodeURIComponent(nomeExibicao);

    // Tenta iniciar automaticamente
    audioPlayer.play().catch(error => {
        console.log("Reprodução automática bloqueada pelo navegador. Aguardando interação.", error);
        infoMusica.textContent = "Toque em qualquer lugar para iniciar";
        
        // Dispara no primeiro clique caso o navegador bloqueie o autoplay puro
        document.body.addEventListener('click', () => {
            audioPlayer.play();
        }, { once: true });
    });

    // Avança para a próxima música de forma cíclica
    indiceAtual = (indiceAtual + 1) % indicesMisturados.length;
}

// Evento disparado quando a música acaba para tocar a próxima da fila
audioPlayer.addEventListener('ended', tocarProxima);

// Inicialização ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if (playlist.length > 0) {
        iniciarPlaylist();
        tocarProxima();
    } else {
        infoMusica.textContent = "Nenhuma música encontrada.";
    }
});