// Utilidad para calcular el tiempo restante hasta una fecha
export function calcularTiempoRestante(fechaFin: string) {
    const fechaFinal = new Date(fechaFin);
    const ahora = new Date();
    const diferencia = fechaFinal.getTime() - ahora.getTime();

    if (diferencia <= 0) return "Cerrada";

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    let resultado = "";
    if (dias > 0) resultado += `${dias}d `;
    if (horas > 0) resultado += `${horas}h `;
    resultado += `${minutos}m`;

    return resultado;
}