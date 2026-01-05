//midleware de teste, apenas para ver se o midleware funciona
export function middleware(request: Request) {
    console.log('Middleware is working!');
    return new Response('Middleware response', { status: 200 });
}