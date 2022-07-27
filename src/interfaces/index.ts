import { Coordinates2D } from '../types';

export interface WeaponObject {
  name: string;
  sfx: string[];
  sprites: { cursor: string; particles: string[]; staticParticles: string[] };
}

export interface Sprite {
  spawn: Function;
  spriteRenderer: HTMLDivElement;
  viewFrame: HTMLDivElement;
}

export interface Game {
  parent: {
    clientWidth: number;
  };
  mousePos: Coordinates2D;
  particleLayer: HTMLDivElement;
  drawingCTX: CanvasRenderingContext2D | null;
  pageHealth: number;
  onDamage: Function;
  // onDamage: (pageHealth?: number) => {};
}
