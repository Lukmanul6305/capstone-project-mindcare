const TITLE_BY_STATUS = {
  updated: "Stress diperbarui",
  missing_baseline: "Aktivitas tersimpan",
  at_minimum: "Stress stabil",
  no_effect: "Aktivitas tersimpan",
};

const TYPE_BY_STATUS = {
  updated: "success",
  missing_baseline: "info",
  at_minimum: "success",
  no_effect: "info",
};

export const getStressProgressAlert = (stressProgress, fallbackMessage, fallbackTitle = "Berhasil") => {
  const effect = stressProgress?.effect;

  if (!effect?.message) {
    return {
      message: fallbackMessage,
      options: { type: "success", title: fallbackTitle },
    };
  }

  return {
    message: effect.message,
    options: {
      type: TYPE_BY_STATUS[effect.status] || "info",
      title: TITLE_BY_STATUS[effect.status] || fallbackTitle,
    },
  };
};
