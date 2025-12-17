import {Box3, Color, Matrix4, Vector3} from 'three';

export enum ClipMode {
  DISABLED = 0,
  CLIP_OUTSIDE = 1,
  CLIP_INSIDE = 2,
  HIGHLIGHT_INSIDE = 3,
}

export interface IClipBox {
  box: Box3;
  inverse: Matrix4;
  matrix: Matrix4;
  position: Vector3;
}

/**
 * Color box definition used to override point colors inside oriented boxes.
 * The `inverse` matrix should transform world coordinates to a normalized
 * box space where the box extents are within [-0.5, 0.5] on each axis.
 */
export interface IColorBox extends IClipBox {
  color: Color;
}
