
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TestEmailSender() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        link: "https://przelewy24.pl/pay/test-link"
      })
    });

    const result = await res.json();
    if (result.success) {
      setStatus("✅ E-mail został wysłany!");
    } else {
      setStatus("❌ Błąd wysyłki: " + result.error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 border rounded mt-6">
      <h2 className="text-lg font-bold">Test: Wyślij link do płatności na e-mail</h2>
      <Input placeholder="Wpisz adres e-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <Button onClick={handleSend}>Wyślij testowy e-mail</Button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
