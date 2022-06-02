// função para enviar o formulário preenchido ao backend
export const enviarSolicitacao = async (data) => {
    const response = await fetch("https://pokeapi.co/api/v2/type/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok){
        return response.json();
    } else {
        throw new Error("Error ao enviar o formulário");
    }
    
}