export const getLinkStyles = (type: string | null = null, params: string | undefined) => {
  let styles = 'inline-flex gap-2 py-2 px-6 rounded-full';

  if (type === params) {
    styles += ' bg-darkCoral text-white';
  } else {
    styles += ' bg-gray-200';
  }

  return styles;
};
