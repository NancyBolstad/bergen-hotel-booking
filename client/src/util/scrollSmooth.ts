function scrollSmooth(element: HTMLElement): void {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

export default scrollSmooth;
