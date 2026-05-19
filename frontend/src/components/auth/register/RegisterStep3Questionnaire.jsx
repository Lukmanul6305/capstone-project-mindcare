const RegisterStep3Questionnaire = ({
  question,
  questionIndex,
  totalQuestions,
  answer,
  onChoiceChange,
  onNumberChange,
}) => {
  const progress = Math.round(((questionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="inline-block rounded-full border-2 border-amber-400/40 bg-amber-300/20 px-4 py-1 text-sm font-bold text-[#1E293B]">
          Kuesioner Baseline
        </div>
        <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#1E293B]">Kuesioner Tingkat Stres</h1>
        <p className="mt-1 text-sm font-medium text-[#64748B]">Pertanyaan disamakan dengan halaman Cek Stress</p>
      </div>

      <div className="flex items-center justify-between text-xs font-bold text-[#64748B]">
        <span>
          Pertanyaan {questionIndex + 1}/{totalQuestions}
        </span>
        <span className="text-[#8B5CF6]">{progress}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full border border-[#1E293B]/30 bg-[#F1F5F9]">
        <div className="h-full bg-[#8B5CF6] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-3 rounded-2xl border border-[#D5DBE6] bg-[#F7F8FB] p-4">
        <p className="flex gap-2 text-sm font-bold text-[#1E293B]">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6] text-xs text-white">
            {questionIndex + 1}
          </span>
          {question.q}
        </p>

        {question.type === "number" ? (
          <div className="space-y-2">
            <input
              type="number"
              min={question.min}
              max={question.max}
              placeholder={question.placeholder}
              value={answer ?? ""}
              onChange={(event) => onNumberChange(event.target.value)}
              className="w-full rounded-2xl border-2 border-[#1E293B] bg-white px-4 py-3 font-medium text-[#1E293B] focus:outline-none focus:border-[#8B5CF6] focus:shadow-[4px_4px_0px_0px_#8B5CF6]"
            />
            <p className="text-xs text-[#64748B]">
              Rentang usia: {question.min} - {question.max} tahun.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {question.opts.map((option, index) => {
              const value = index + 1;
              const checked = answer === value;
              return (
                <label key={option} className="block cursor-pointer">
                  <input
                    type="radio"
                    name="sq-current"
                    value={value}
                    checked={checked}
                    onChange={() => onChoiceChange(value)}
                    className="sr-only"
                  />
                  <div
                    className={`rounded-xl border-2 p-3 text-sm transition-all ${
                      checked
                        ? "border-[#8B5CF6] bg-[#F5F3FF] shadow-[4px_4px_0px_0px_#8B5CF6]"
                        : "border-[#CBD5E1] bg-white hover:bg-slate-50"
                    }`}
                  >
                    {option}
                  </div>
                </label>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterStep3Questionnaire;
