// Função para formatar CPF
export function formatCPF(input: string): string {
    // Remover caracteres não numéricos usando a expressão regular /\D/g
    var cpfLimpo = input.replace(/\D/g, "").substring(0, 11);

    // Dividir a string em um array de caracteres individuais
    var cpfArray = cpfLimpo.split("");

    // Criar a variável para receber o CPF formatado
    var cpfFormatado = "";

    // Acessa o IF quando a quantidade de números é maior do que zero
    if (cpfArray.length > 0) {
        // Formatar o CPF e concatenar o valor
        cpfFormatado += `${cpfArray.slice(0, 3).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que três
    if (cpfArray.length > 3) {
        // Formatar o CPF e concatenar o valor
        cpfFormatado += `.${cpfArray.slice(3, 6).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que seis
    if (cpfArray.length > 6) {
        // Formatar o CPF e concatenar o valor
        cpfFormatado += `.${cpfArray.slice(6, 9).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que nove
    if (cpfArray.length > 9) {
        // Formatar o CPF e concatenar o valor
        cpfFormatado += `-${cpfArray.slice(9, 11).join("")}`;
    }

    // Enviar para o campo o CPF formatado
    return cpfFormatado;
    //const campoCPF = document.getElementById("cpf");
}