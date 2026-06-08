import React, { useState, useMemo } from 'react';
import { FiActivity, FiZap, FiAlertCircle } from 'react-icons/fi';
import { calculateStressReductionAPI } from '../../lib/api';

const activities = [
  { value: 'reading', label: 'Reading', rate: 0.2, cap: 12 },
  { value: 'journaling', label: 'Journaling', rate: 0.4, cap: 12 },
  { value: 'exercise', label: 'Exercise', rate: 0.4, cap: 20 },
];

const StressReductionForm = ({ currentStress, onStressUpdate }) => {
  const [activity, setActivity] = useState(activities[0].value);
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const durationMinutes = Number(duration);
  const selectedActivity = activities.find(a => a.value === activity);

  // Check if we're already at the minimum for reading
  const isReadingAtFloor = activity === 'reading' && currentStress <= 5;

  const { reduction, isCapped, isFloored, flooredResult } = useMemo(() => {
    if (!durationMinutes || durationMinutes <= 0 || !selectedActivity) {
      return { reduction: 0, isCapped: false, isFloored: false, flooredResult: currentStress };
    }
    
    const rawReduction = durationMinutes * selectedActivity.rate;
    let finalReduction = rawReduction;
    let capped = false;
    
    if (selectedActivity.cap && rawReduction > selectedActivity.cap) {
      finalReduction = selectedActivity.cap;
      capped = true;
    }
    
    let result = currentStress - finalReduction;
    let floored = false;
    
    if (selectedActivity.value === 'reading' && result < 5) {
      result = Math.max(5, currentStress); // Ensure it doesn't jump up if already < 5
      if (currentStress > 5) {
          result = 5;
      }
      floored = true;
    } else if (result < 0) {
      result = 0;
    }
    
    return { reduction: finalReduction, isCapped: capped, isFloored: floored, flooredResult: result };
  }, [durationMinutes, selectedActivity, currentStress]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!durationMinutes || durationMinutes <= 0) {
      setError("Please enter a positive duration.");
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const response = await calculateStressReductionAPI({
        currentStress: Number(currentStress),
        activity,
        durationMinutes
      });
      if (response.success && response.payload) {
        onStressUpdate(response.payload.newStress);
        setDuration('');
      } else {
        setError(response.message || "Failed to update stress");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-[#1E293B]">
        <FiZap className="text-amber-400" size={20} />
        Quick Activity Entry
      </h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Activity</label>
            <select 
              className="rounded-lg border border-slate-300 p-2.5 outline-none focus:border-amber-400"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              {activities.map(a => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Duration (minutes)</label>
            <input 
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 20"
              className="rounded-lg border border-slate-300 p-2.5 outline-none focus:border-amber-400 disabled:bg-slate-100"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              disabled={isReadingAtFloor}
            />
          </div>
          <button 
            type="submit"
            disabled={loading || durationMinutes <= 0 || isReadingAtFloor}
            className="mt-4 rounded-lg bg-[#1E293B] px-6 py-2.5 font-bold text-white transition hover:bg-slate-700 disabled:opacity-50 md:mt-0"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {isReadingAtFloor && (
          <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 border border-amber-200 flex items-center gap-2 font-medium">
            <FiAlertCircle size={16} />
            Stress is already at the minimum (5%). Reading will not reduce it further.
          </div>
        )}

        {durationMinutes > 0 && !isReadingAtFloor && (
          <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600 border border-slate-100">
            <p className="font-semibold text-slate-800">
              Preview: {selectedActivity.label} for {durationMinutes} min will reduce stress by {reduction.toFixed(1)}%. Resulting stress: {flooredResult.toFixed(1)}%
            </p>
            {isCapped && (
              <p className="text-amber-600 mt-1 flex items-center gap-1">
                <FiActivity size={14} />
                {selectedActivity.label} is capped at {selectedActivity.cap}% reduction
              </p>
            )}
            {isFloored && (
              <p className="text-amber-600 mt-1 flex items-center gap-1">
                <FiActivity size={14} />
                Result reached the minimum 5% floor for Reading.
              </p>
            )}
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm font-medium">
            {error}
          </div>
        )}
      </form>
    </section>
  );
};

export default StressReductionForm;
