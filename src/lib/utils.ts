export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function getCourseStatus(
  startDate: string,
  duration: number,
  durationType: "weeks" | "days"
): string {
  const start = new Date(startDate);
  const now = new Date();

  // Calculate end date
  const end = new Date(start);
  if (durationType === "weeks") {
    end.setDate(start.getDate() + duration * 7);
  } else {
    end.setDate(start.getDate() + duration);
  }

  if (now < start) {
    const diffDays = Math.ceil(
      (start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    return `${diffDays} day${diffDays > 1 ? "s" : ""} left`;
} else if (now >= start && now <= end) {
    return "Ongoing";
  } else {
    return "Completed";
  }
}

export function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
