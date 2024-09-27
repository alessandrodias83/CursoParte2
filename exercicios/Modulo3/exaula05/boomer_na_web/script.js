function qualSeuNome() {
    const nomeDaPessoa = prompt('Qual seu nome?');

    swal({
        title: "Seja bem vindo",
        text: nomeDaPessoa,
        icon: "success",
      });


}