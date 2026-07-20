export const toDate = (value) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
};

export const toDayStart = (value) => {
    const date = toDate(value);
    if (!date) return null;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const toDateKey = (value) => {
    const date = toDayStart(value);
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const getEntryDate = (item) => item?.createdAt || item?.tanggal;

export const getLastNDays = (n, referenceDate = new Date()) => {
    const today = toDayStart(referenceDate) || referenceDate;
    return Array.from({ length: n }, (_, offset) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (n - 1 - offset));
        return date;
    });
};