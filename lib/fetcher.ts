
export async function Fetcher<T>(url: string,
    options?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        ...options,
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error(`HTTP Error:${res.status}`)
    }
    return res.json()
} 