  function alterarTema(){
            //DOM -> document object model
            const tema = document.body.getAttribute("data-theme");
            const novoTema = tema == 'dark' ? 'light' : 'dark';
           /* let novoTema = '';
            if(tema == 'dark'){
                novoTema = 'light';
            }else{
                novoTema = 'dark';
            }*/
            document.body.setAttribute("data-theme", novoTema); 
            
            const btAlterarTema = document.getElementById("btAlterarTema");
            btAlterarTema.textContent = novoTema == 'dark' ? 'Light' : 'Dark';
        }