import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthError from "../../components/auth/AuthError";
import AuthLogo from "../../components/auth/AuthLogo";
import RegisterNavigation from "../../components/auth/register/RegisterNavigation";
import RegisterStep1Account from "../../components/auth/register/RegisterStep1Account";
import RegisterStep2Biodata from "../../components/auth/register/RegisterStep2Biodata";
import RegisterStep3Questionnaire from "../../components/auth/register/RegisterStep3Questionnaire";
import RegisterStep4Success from "../../components/auth/register/RegisterStep4Success";
import registerQuestions from "../../data/registerQuestions";
import { apiRequest } from "../../lib/api";

const totalSteps = 4;

const calculatePasswordStrength = (value) => {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^a-zA-Z0-9]/.test(value)) score += 1;
  return score;
};

const calculateBaselineScore = (answers) => {
  const v = (i) => Number(answers[i - 1] ?? 3);
  const scoreSleep = (ans) => [1, 2, 5, 4, 2][ans - 1];

  const scores = {
    stres: 6 - v(3),
    tidur: scoreSleep(v(6)),
    fokus: v(7),
    cemas: 6 - v(5),
    mood: Math.round((v(8) + v(9) + v(10)) / 3),
  };

  const total = Object.values(scores).reduce((acc, item) => acc + item, 0);
  const overall = Math.round((total / 25) * 100);
  return { scores, overall };
};

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [error, setError] = useState("");
  const [accountForm, setAccountForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [bioForm, setBioForm] = useState({
    nama: "",
    gender: "",
    pekerjaan: "",
  });
  const [answers, setAnswers] = useState(new Array(registerQuestions.length).fill(null));

  const passwordStrength = useMemo(
    () => calculatePasswordStrength(accountForm.password),
    [accountForm.password],
  );
  const scoreData = useMemo(() => calculateBaselineScore(answers), [answers]);

  const handleAccountChange = (event) => {
    setError("");
    const { name, value } = event.target;
    setAccountForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBioChange = (event) => {
    setError("");
    const { name, value } = event.target;
    setBioForm((prev) => ({ ...prev, [name]: value }));
  };

  const setQuizChoiceAnswer = (value) => {
    setError("");
    setAnswers((prev) => {
      const next = [...prev];
      next[quizIndex] = Number(value);
      return next;
    });
  };

  const setQuizNumberAnswer = (value) => {
    setError("");
    const num = Number(value);
    setAnswers((prev) => {
      const next = [...prev];
      if (Number.isNaN(num)) {
        next[quizIndex] = null;
      } else {
        const question = registerQuestions[quizIndex];
        next[quizIndex] = Math.min(question.max, Math.max(question.min, num));
      }
      return next;
    });
  };

  const validateStep1 = () => {
    if (!accountForm.email) return "Email harus diisi!";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(accountForm.email)) return "Format email tidak valid!";
    if (!accountForm.password) return "Password harus diisi!";
    if (accountForm.password.length < 8) return "Password minimal 8 karakter!";
    if (accountForm.password !== accountForm.confirmPassword) return "Password dan konfirmasi tidak cocok!";
    return "";
  };

  const validateStep2 = () => {
    if (!bioForm.nama) return "Nama harus diisi!";
    if (!bioForm.gender) return "Pilih gender!";
    if (!bioForm.pekerjaan) return "Pilih pekerjaan!";
    return "";
  };

  const validateAllQuizAnswers = () => {
    const emptyIdx = answers.findIndex((item) => item === null);
    if (emptyIdx !== -1) {
      setQuizIndex(emptyIdx);
      return `Jawab pertanyaan ${emptyIdx + 1} terlebih dahulu!`;
    }
    return "";
  };

  const handleNext = () => {
    setError("");
    if (currentStep === 1) {
      const message = validateStep1();
      if (message) return setError(message);
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      const message = validateStep2();
      if (message) return setError(message);
      setCurrentStep(3);
      return;
    }

    if (currentStep === 3) {
      if (answers[quizIndex] === null) {
        setError(`Jawab pertanyaan ${quizIndex + 1} terlebih dahulu!`);
        return;
      }
      if (quizIndex < registerQuestions.length - 1) {
        setQuizIndex((prev) => prev + 1);
        return;
      }
      const message = validateAllQuizAnswers();
      if (message) return setError(message);
      const payload = {
        name: bioForm.nama,
        email: accountForm.email,
        password: accountForm.password,
        confPassword: accountForm.confirmPassword,
      };

      apiRequest("/api/users/register", {
        method: "POST",
        auth: false,
        body: payload,
      })
        .then(() => {
          setCurrentStep(4);
        })
        .catch((err) => {
          setError(err?.message || "Registrasi gagal.");
        });
      return;
    }

    navigate("/");
  };

  const handleBack = () => {
    setError("");
    if (currentStep === 3 && quizIndex > 0) {
      setQuizIndex((prev) => prev - 1);
      return;
    }
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const currentQuestion = registerQuestions[quizIndex];
  const isQuizLastQuestion = quizIndex === registerQuestions.length - 1;

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-4 py-4 md:py-6 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <AuthCard className="rounded-[42px] bg-[#EFEFF2] p-5 md:p-7 shadow-[10px_10px_0px_0px_#CFD4DE]">
          <AuthLogo widthClass="w-48" />
          <AuthError message={error} />

          {currentStep === 1 ? (
            <RegisterStep1Account
              form={accountForm}
              passwordStrength={passwordStrength}
              onChange={handleAccountChange}
            />
          ) : null}

          {currentStep === 2 ? <RegisterStep2Biodata form={bioForm} onChange={handleBioChange} /> : null}

          {currentStep === 3 ? (
            <RegisterStep3Questionnaire
              question={currentQuestion}
              questionIndex={quizIndex}
              totalQuestions={registerQuestions.length}
              answer={answers[quizIndex]}
              onChoiceChange={setQuizChoiceAnswer}
              onNumberChange={setQuizNumberAnswer}
            />
          ) : null}

          {currentStep === 4 ? <RegisterStep4Success scoreData={scoreData} /> : null}

          <RegisterNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            isQuizLastQuestion={isQuizLastQuestion}
            onBack={handleBack}
            onNext={handleNext}
          />
        </AuthCard>

        <div className="mt-6 text-center">
          <p className="font-medium text-[#64748B]">
            Sudah punya akun?{" "}
            <Link
              to="/"
              className="font-bold text-[#8B5CF6] underline decoration-2 underline-offset-4 transition-colors hover:text-pink-400"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
