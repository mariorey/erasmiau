// app/page.tsx
import client from "@/tina/__generated__/client";
import HomeView from "./home-view"; // Importamos el componente de cliente

export default async function Page() {
    // 1. Pedimos los datos a Tina desde el servidor
    const res = await client.queries.page({ relativePath: "home.json" });

    // 2. Se los pasamos al componente de cliente
    return (
        <HomeView
            data={res.data}
            query={res.query}
            variables={res.variables}
        />
    );
}