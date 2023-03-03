"use client";
import { useState } from "react";
import styles from "./home.module.css";

export default function Home() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("/api/pets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ animal: animalInput }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw (
                    data.error ||
                    new Error(`Request failed with status ${response.status}`)
                );
            }

            setResult(data.result);
            setAnimalInput("");
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
        }
    }

    return (
        <main className={styles.main}>
            <h3>Nombres para mascotas</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="animal"
                    placeholder="¿Qué animal es tu mascota?"
                    value={animalInput}
                    onChange={(e) => setAnimalInput(e.target.value)}
                />
                <input type="submit" value="Generar nombres" />
            </form>
            <div>
                <h4>Nombres sugeridos:</h4>
                <p>{result}</p>
            </div>
        </main>
    );
}
