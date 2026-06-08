export const getActivityDurationMinutesFromSeconds = (seconds, options = {}) => {
  const value = Number(seconds);
  const maxMinutes = Number(options.maxMinutes);

  if (!Number.isFinite(value) || value <= 0) return 1;

  const minutes = Math.max(1, Math.round(value / 60));

  return Number.isFinite(maxMinutes) && maxMinutes > 0
    ? Math.min(maxMinutes, minutes)
    : minutes;
};
