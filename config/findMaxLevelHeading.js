export function findMaxLevelHeading(htmlContent) {
  if (!htmlContent) return 1; // fallback
  if (htmlContent.includes('<h6>') || htmlContent.includes('<h6 ')) return 6;
  if (htmlContent.includes('<h5>') || htmlContent.includes('<h5 ')) return 5;
  if (htmlContent.includes('<h4>') || htmlContent.includes('<h4 ')) return 4;
  if (htmlContent.includes('<h3>') || htmlContent.includes('<h3 ')) return 3;
  if (htmlContent.includes('<h2>') || htmlContent.includes('<h2 ')) return 2;
  return 1;
}
