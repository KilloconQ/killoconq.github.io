import { describe, it, expect } from 'vitest';
import { PROJECTS } from './projects';

describe('PROJECTS data', () => {
  it('should be an array', () => {
    expect(Array.isArray(PROJECTS)).toBe(true);
  });

  it('should have at least one project', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('should have required fields', () => {
    for (const project of PROJECTS) {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('img');
      expect(project.img).toBeDefined();
      expect(project).toHaveProperty('tags');
      expect(Array.isArray(project.tags)).toBe(true);
    }
  });
});
