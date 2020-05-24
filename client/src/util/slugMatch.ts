function slugMatch(slug: string, path: string, exact?: boolean): boolean {
  if (slug === 'index') {
    return path === '/';
  }

  if (exact) {
    return path.endsWith('/' + slug);
  }

  return (path + '/').includes('/' + slug + '/');
}

export default slugMatch;
