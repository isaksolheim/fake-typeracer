import { useState } from "react";

function App() {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(0);
  const [text, setText] = useState({
    highlighted: "",
    default: "",
  });

  const starterText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const handleInputChange = () => {
    if (score === 0) {
      setStartTime(new Date().getTime());
    }

    if (starterText.charAt(score) === " ") {
      setWords(words + 1);
    }

    setScore(score + 1);

    setText({
      highlighted: starterText.slice(0, score),
      default: starterText.slice(score, starterText.length),
    });
  };

  return (
    <main className="pt-32 bg-black h-screen text-white">
      <div className="relative max-w-2xl m-auto text-xl text-white">
        <p className="text-4xl text-white py-4">
          WPM:{" "}
          {score === 0
            ? "0"
            : (
                (words / (new Date().getTime() / 1000 - startTime / 1000)) *
                60
              ).toFixed(0)}
        </p>
        <input
          type="text"
          className="absolute opacity-0 top-0 left-0 w-full h-full z-0"
          onChange={handleInputChange}
        />

        {score === 0 ? (
          <p className="text-gray-500 z-30">{starterText}</p>
        ) : (
          <div>
            <p className="text-white inline">{text.highlighted}</p>
            <p className="text-gray-500 inline">{text.default}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
