export function cpfValidation (cpf: string): boolean {
    // Remover caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais, o que invalida o CPF
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcular o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    // Verificar o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Calcular o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verificar o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // Se todas as verificações passaram, o CPF é válido
    return true;
}