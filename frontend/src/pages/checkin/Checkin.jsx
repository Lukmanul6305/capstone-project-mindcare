import { useEffect, useMemo, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";

import CheckinAnalyzingPanel from "../../components/checkin/CheckinAnalyzingPanel";
import CheckinCameraPanel from "../../components/checkin/CheckinCameraPanel";
import CheckinPreviewPanel from "../../components/checkin/CheckinPreviewPanel";
import CheckinResultPanel from "../../components/checkin/CheckinResultPanel";
import AppSidebar from "../../components/layout/AppSidebar";
import { readAppData, writeAppData } from "../../lib/storage";

const moodDictionary = {
  happy: {
    emoji: "😊",
    label: "Happy",
    title: "Hari ini Anda terlihat Senang!",
    desc: "Mood positif terdeteksi. Tetap jaga semangatmu!",
    color: "#34D399",
  },
  neutral: {
    emoji: "😐",
    label: "Neutral",
    title: "Mood Anda terlihat Netral",
    desc: "Kondisi stabil. Coba lakukan aktivitas yang menyenangkan!",
    color: "#8B5CF6",
  },
  sad: {
    emoji: "😢",
    label: "Sad",
    title: "Anda terlihat sedikit Sedih",
    desc: "Tidak apa-apa. Coba journaling atau olahraga ringan.",
    color: "#F472B6",
  },
  surprised: {
    emoji: "😲",
    label: "Surprised",
    title: "Ekspresi Anda terlihat Terkejut!",
    desc: "Ekspresi unik terdeteksi. Semoga harimu menyenangkan!",
    color: "#FBBF24",
  },
  angry: {
    emoji: "😠",
    label: "Angry",
    title: "Anda terlihat Kesal",
    desc: "Tarik napas dalam. Coba meditasi atau journaling.",
    color: "#EF4444",
  },
};

const Checkin = () => {
  const getSavedTodayMood = () => {
    const moods = readAppData("moods", []);
    const today = new Date().toDateString();
    return moods.find((item) => new Date(item.date).toDateString() === today) || null;
  };

  const savedTodayMood = getSavedTodayMood();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const detectTimerRef = useRef(null);
  const countdownRef = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [panel, setPanel] = useState(savedTodayMood ? "result" : "camera");
  const [cameraStarted, setCameraStarted] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [captureDisabled, setCaptureDisabled] = useState(true);
  const [autoCaptureMessage, setAutoCaptureMessage] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const [resultMood, setResultMood] = useState(savedTodayMood?.mood || "happy");
  const [resultConfidence, setResultConfidence] = useState(savedTodayMood?.confidence || 92);

  const result = useMemo(() => {
    const base = moodDictionary[resultMood] || moodDictionary.happy;
    return { ...base, confidence: resultConfidence };
  }, [resultMood, resultConfidence]);

  const clearTimers = () => {
    if (detectTimerRef.current) clearTimeout(detectTimerRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    detectTimerRef.current = null;
    countdownRef.current = null;
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimers();
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      clearTimers();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraStarted(true);
      setCaptureDisabled(true);
      setFaceDetected(false);
      setAutoCaptureMessage("");
      setPanel("camera");

      detectTimerRef.current = setTimeout(() => {
        setFaceDetected(true);
        setCaptureDisabled(false);

        let count = 3;
        setAutoCaptureMessage(`Auto-capture dalam ${count} detik...`);
        countdownRef.current = setInterval(() => {
          count -= 1;
          if (count <= 0) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
            setAutoCaptureMessage("");
            capturePhoto();
          } else {
            setAutoCaptureMessage(`Auto-capture dalam ${count} detik...`);
          }
        }, 1000);
      }, 2000);
    } catch (error) {
      alert("Tidak dapat mengakses kamera. Pastikan izin kamera diberikan.");
      console.error(error);
    }
  };

  const capturePhoto = () => {
    clearTimers();
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    const image = canvas.toDataURL("image/jpeg", 0.8);
    setCapturedImage(image);

    stopCamera();
    setPanel("preview");
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setCameraStarted(false);
    setFaceDetected(false);
    setCaptureDisabled(true);
    setAutoCaptureMessage("");
    setPanel("camera");
    startCamera();
  };

  const showResult = (mood, confidence) => {
    const moodsData = readAppData("moods", []);
    const today = new Date().toDateString();
    const idx = moodsData.findIndex((item) => new Date(item.date).toDateString() === today);
    const entry = { date: new Date().toISOString(), mood, confidence };
    if (idx >= 0) moodsData[idx] = entry;
    else moodsData.push(entry);
    writeAppData("moods", moodsData);

    setResultMood(mood);
    setResultConfidence(confidence);
    setPanel("result");
  };

  const confirmPhoto = () => {
    setPanel("analyzing");
    setTimeout(() => {
      const moods = ["happy", "neutral", "sad", "surprised"];
      const weights = [0.45, 0.3, 0.15, 0.1];
      const random = Math.random();
      let cumulative = 0;
      let selectedMood = "happy";

      for (let i = 0; i < moods.length; i += 1) {
        cumulative += weights[i];
        if (random <= cumulative) {
          selectedMood = moods[i];
          break;
        }
      }
      const confidence = Math.floor(Math.random() * 15 + 80);
      showResult(selectedMood, confidence);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F9] text-[#1E293B]">
      <style>{`@keyframes scanline{0%{top:0}100%{top:100%}}`}</style>
      <div className="flex min-h-screen">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeMenu="Daily Check-in" />

        <main className="relative min-h-screen flex-1">
          <div className="p-4 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1E293B] bg-white"
            >
              <FiMenu size={20} />
            </button>
          </div>

          <header className="hidden items-center gap-4 px-8 pt-10 pb-6 lg:flex">
            <div>
              <h1 className="mb-1 text-3xl font-extrabold text-[#1E293B]">Daily Check-in</h1>
              <p className="font-medium text-[#64748B]">Deteksi mood harianmu dengan kamera</p>
            </div>
          </header>

          <div className="mx-auto max-w-4xl p-8 lg:p-12">
            {panel === "camera" ? (
              <CheckinCameraPanel
                videoRef={videoRef}
                canvasRef={canvasRef}
                cameraStarted={cameraStarted}
                faceDetected={faceDetected}
                autoCaptureMessage={autoCaptureMessage}
                captureDisabled={captureDisabled}
                onStartCamera={startCamera}
                onCapture={capturePhoto}
              />
            ) : null}

            {panel === "preview" ? (
              <CheckinPreviewPanel imageSrc={capturedImage} onRetake={retakePhoto} onConfirm={confirmPhoto} />
            ) : null}

            {panel === "analyzing" ? <CheckinAnalyzingPanel /> : null}

            {panel === "result" ? <CheckinResultPanel result={result} /> : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Checkin;
