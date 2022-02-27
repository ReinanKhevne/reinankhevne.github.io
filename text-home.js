var bntHome = document.querySelector('#bnt-home')

bntHome.addEventListener('click', leiaMais)

    function leiaMais() {
        var pontos = document.querySelector('#pontos')
        var mais = document.querySelector('#mais')
        var redes = document.querySelector('.redes')

        if (pontos.style.display === 'none') {
            pontos.style.display = 'inline'
            mais.style.display = 'none'
            redes.style.display = 'flex'
            bntHome.innerHTML = 'Leia Mais'
        }
        else {
            pontos.style.display = 'none'
            mais.style.display = 'inline'
            redes.style.display = 'none'
            bntHome.innerHTML = 'Leia Menos'
        }
    }