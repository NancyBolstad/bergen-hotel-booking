function getTimeOfDay(): string {
  const hour = new Date().getHours();

  switch (hour) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'Morning';
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      return 'Afternoon';
    default:
      return 'Evening';
  }
}

export default getTimeOfDay;
