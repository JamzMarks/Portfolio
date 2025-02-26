export async function fetchData(dataUrl){
    const baseURL = "/data/"
    try {
        const response = await fetch(baseURL + dataUrl);
        if (!response.ok) {
            throw new Error(`Erro ao carregar JSON: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}