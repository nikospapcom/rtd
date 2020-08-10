import { alertVariant, alertSize, alertHrBg } from './alert';
import {
  avatarRadius,
  avatarSize,
  avatarVariant,
  avatarStatus,
  avatarStatusPosition,
  avatarGroupMargin
} from './avatar';

import { breadcrumbsAlign, breadcrumbsSize } from './breadcrumbs';

import { badgeVariant, badgePill, badgeSize } from './badge';

import { buttonVariant, hoverButtonVariant, buttonSize } from './button';

import { typographyVariant } from './typography';

export const alert = {
  variant: alertVariant,
  size: alertSize,
  hrBg: alertHrBg
};

export const avatar = {
  radius: avatarRadius,
  size: avatarSize,
  variant: avatarVariant,
  status: avatarStatus,
  statusPosition: avatarStatusPosition,
  groupMargin: avatarGroupMargin
};

export const breadcrumbs = {
  align: breadcrumbsAlign,
  size: breadcrumbsSize
};

export const badge = {
  variant: badgeVariant,
  pill: badgePill,
  size: badgeSize
};

export const button = {
  variant: buttonVariant,
  hoverVariant: hoverButtonVariant,
  size: buttonSize
};

export const typography = {
  variant: typographyVariant
};
