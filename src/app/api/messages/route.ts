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

export async function GET() {
    try {
        //get data
        const messages = {}
        return new Response(JSON.stringify({ messages }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to fetch messages' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
