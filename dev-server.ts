#!/usr/bin/env bun
import { serve } from "bun";
import { existsSync } from "fs";
import path from "path";

const PORT = process.env.PORT || 3000;

console.log(`🚀 Starting development server on http://localhost:${PORT}`);

serve({
    port: PORT,
    async fetch(req) {
        const url = new URL(req.url);
        let filePath = url.pathname;

        // Handle root path
        if (filePath === "/") {
            filePath = "/index.html";
        }

        // Construct full file path
        const fullPath = path.join(process.cwd(), "src", filePath);

        // Check if file exists
        if (existsSync(fullPath)) {
            const file = Bun.file(fullPath);

            // Set appropriate content type
            let contentType = "text/plain";
            if (filePath.endsWith(".html")) {
                contentType = "text/html";
            } else if (filePath.endsWith(".css")) {
                contentType = "text/css";
            } else if (
                filePath.endsWith(".js") ||
                filePath.endsWith(".tsx") ||
                filePath.endsWith(".ts")
            ) {
                contentType = "application/javascript";
            } else if (filePath.endsWith(".json")) {
                contentType = "application/json";
            }

            return new Response(file, {
                headers: {
                    "Content-Type": contentType,
                },
            });
        }

        // Return 404 for non-existent files
        return new Response("Not Found", { status: 404 });
    },
});
