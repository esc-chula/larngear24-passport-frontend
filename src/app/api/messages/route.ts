// export async function POST(request:Request): Promise<Response> {
//     try {
//         const {message} = await request.json() as { message: string };
//         return new Response(JSON.stringify({ status: "success", message }), {
//             status: 201,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         console.error("Error processing POST request:", error);
//         return new Response(JSON.stringify({ status: "failed", error: "Internal Server Error" }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }

// export async function GET() {
//     try {
//         //get data
//         const messages = [
//             { "username": "User1", "baan": 1, "message_id": "1", "message": "Comment 1" },
//             { "username": "User2", "baan": 2, "message_id": "2", "message": "Comment 2" },
//             { "username": "User3", "baan": 1, "message_id": "3", "message": "Comment 3" },
//             { "username": "User4", "baan": 2, "message_id": "4", "message": "Comment 4" },
//             { "username": "User5", "baan": 1, "message_id": "5", "message": "Comment 5" },
//             { "username": "User6", "baan": 2, "message_id": "6", "message": "Comment 6" },
//             { "username": "User7", "baan": 1, "message_id": "7", "message": "Comment 7" },
//             { "username": "User8", "baan": 2, "message_id": "8", "message": "Comment 8" },
//             { "username": "User9", "baan": 1, "message_id": "9", "message": "Comment 9" },
//             { "username": "User10", "baan": 2, "message_id": "10", "message": "Comment 10" }
//           ]
//         return new Response(JSON.stringify({ messages }), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error("Error fetching messages:", error);
//         return new Response(JSON.stringify({ success: false, error: 'Failed to fetch messages' }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }
