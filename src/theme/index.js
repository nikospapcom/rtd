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
