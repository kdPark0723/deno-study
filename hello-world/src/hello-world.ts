const hostname = "0.0.0.0";
const port = 8080;

const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);

function addressToInfo(address: Deno.Addr) {
    return `{ hostname: ${address.hostname}, port: ${address.port}, transport: ${address.transport} }`
}

function stringToArray(str: string): number[] {
    return str.split('').map((value => value.charCodeAt(0)))
}

for await (const conn of listener) {
    console.log(`localAddr: ${addressToInfo(conn.localAddr)}, remoteAddr: ${addressToInfo(conn.localAddr)}, rid: ${conn.rid}`);
}
