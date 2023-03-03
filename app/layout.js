import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>AI Pets</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
