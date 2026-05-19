import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const StressQuizPanel = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onPrev,
  onNext,
}) => {
  const progress = Math.round(((questionIndex + 1) / totalQuestions) * 100);
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <div className="max-w-3xl overflow-hidden rounded-3xl border-2 border-[#1E293B] bg-white shadow-[6px_6px_0px_0px_#CBD5E1]">
      <div className="border-b border-gray-200 p-6">
        <div className="mb-3 flex justify-between text-sm font-bold">
          <span>
            Pertanyaan {questionIndex + 1}/{totalQuestions}
          </span>
          <span className="text-[#9333EA]">{progress}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-[#9333EA] transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <span className="text-2xl font-extrabold">{question.q}</span>
        </div>
        <div className="space-y-3">
          {question.type === "input" ? (
            <input
              type={question.inputType || "text"}
              placeholder={question.placeholder || ""}
              value={selectedAnswer || ""}
              onChange={(e) => onSelectAnswer(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 p-4 font-medium text-[#1E293B] outline-none focus:border-[#9333EA]"
            />
          ) : (
            question.opts.map((option, index) => {
              const checked = selectedAnswer === index;
              return (
                <label key={option} className="block cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${questionIndex}`}
                    value={index}
                    checked={checked}
                    onChange={() => onSelectAnswer(index)}
                    className="sr-only"
                  />
                  <div
                    className={`flex items-center gap-4 rounded-xl border-2 p-4 transition-all duration-200 ${
                      checked ? "border-[#A855F7] bg-[#F3E8FF]" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`relative h-5 w-5 shrink-0 rounded-full border-2 ${
                        checked ? "border-[#A855F7] bg-[#A855F7]" : "border-gray-300"
                      }`}
                    >
                      {checked ? <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /> : null}
                    </div>
                    <span className="font-medium text-[#1E293B]">{option}</span>
                  </div>
                </label>
              );
            })
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-6">
        <button
          onClick={onPrev}
          disabled={questionIndex === 0}
          className="flex items-center gap-2 text-sm font-bold text-[#64748B] transition-colors hover:text-[#1E293B] disabled:opacity-40"
        >
          <FiArrowLeft size={16} />
          Kembali
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 rounded-xl border-2 border-[#1E293B] bg-[#9333EA] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5"
        >
          {isLast ? (
            <>
              <FiCheckCircle size={16} /> Selesai
            </>
          ) : (
            <>
              Selanjutnya <FiArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default StressQuizPanel;
