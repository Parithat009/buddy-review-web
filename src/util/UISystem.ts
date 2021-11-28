
class _UIColor {
  readonly Blue = '#007AFF';
  readonly Green = '#34C759';
  readonly Indigo = '#5856D6';
  readonly Orange = '#FF9500';
  readonly Pink = '#FF2D55';
  readonly Purple = '#AF52DE';
  readonly Red = '#FF3B30';
  readonly RedDark = '#1E0A0A';
  readonly Teal = '#2DD4BF';
  readonly Yellow = '#FFCC00';
  readonly Black = '#000000';
  readonly White = '#FFFFFF';
  readonly Transparent = '#0000';
  readonly Primary = '#F7DFD5';
  readonly PrimaryLight = '#EBE2D5';
  readonly PrimaryDark = '#CFB697';
  readonly Gray50 = '#AEAEB2';
  readonly Gray100 = '#838388';
  readonly Gray200 = '#58585B';
  readonly Gray300 = '#3F3F41';
  readonly Gray400 = '#333334';
  readonly Gray500 = '#272729';
  readonly Gray600 = '#1A1A1C';
  readonly HoverOverlay = '#FFFFFF11';
  readonly HoverOverlayDark = '#00000033';
}

class _UIResponesive {
  readonly minWidthIPad = '@media (min-width: 768px)';
  readonly minWidthIPadPro = '@media (min-width: 1024px)';
  readonly minWidthIDesktop = '@media (min-width: 1280px)';
}

export const UIColor = new _UIColor()
export const UIResponesive = new _UIResponesive()
