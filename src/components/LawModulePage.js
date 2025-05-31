import SeoHead from "@/components/SeoHead";
import QuestionInput from "@/components/QuestionInput";
import SubmitButton from "@/components/SubmitButton";
import AnswerBox from "@/components/AnswerBox";
import { useState } from "react";

export default function LawModulePage({
  seo,
  heading,
  description,
  moduleTitle,
}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    debugger
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, moduleTitle }),
    });

    const data = await res.json();
    setAnswer(data.reply || "Cevap alınamadı.");
    setLoading(false);
  };

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        url={seo.url}
      />
      <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-800 font-sans">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">{heading}</h1>
          <p className="text-gray-600">{description}</p>
          <QuestionInput
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Sorunuzu yazın..."
          />
          <SubmitButton loading={loading} onClick={handleSubmit} />
          <AnswerBox answer={answer} />
        </div>
      </main>
    </>
  );
}
