import response from "../utils/response.js";

function calculateStressReduction(activity, durationMinutes) {
  switch (activity) {
    case 'reading':
      return Math.min(durationMinutes * 0.2, 12);
    case 'journaling':
      return Math.min(durationMinutes * 0.4, 12);
    case 'exercise':
      return Math.min(durationMinutes * 0.4, 20);
    default:
      return 0;
  }
}

function updateStress(currentStress, activity, durationMinutes) {
  const reduction = calculateStressReduction(activity, durationMinutes);
  const floor = activity === 'reading' ? 5 : 0;
  return Math.max(floor, currentStress - reduction);
}

const stressUpdateController = {
  async updateStress(req, res, next) {
    try {
      const { currentStress, activity, durationMinutes } = req.body;
      
      if (typeof currentStress !== 'number' || typeof durationMinutes !== 'number' || !activity) {
        return response.error(res, 400, "Invalid payload. 'currentStress', 'activity', and 'durationMinutes' are required.");
      }
      
      if (durationMinutes <= 0) {
         return response.error(res, 400, "durationMinutes must be positive.");
      }

      const reduction = calculateStressReduction(activity, durationMinutes);
      const newStress = updateStress(currentStress, activity, durationMinutes);

      return response.success(res, 200, "Stress updated successfully.", {
        newStress,
        reduction
      });
    } catch (error) {
      next(error);
    }
  }
};

export default stressUpdateController;
