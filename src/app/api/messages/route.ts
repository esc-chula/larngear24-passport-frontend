export async function POST(request:Request): Promise<Response> {
    try {
        const {message} = await request.json() as { message: string };
        return new Response(JSON.stringify({ status: "success", message }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return new Response(JSON.stringify({ status: "failed", error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}