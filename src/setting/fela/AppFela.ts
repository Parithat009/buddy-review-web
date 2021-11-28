import {createRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

export class AppFela {
  static readonly render = createRenderer({
    mediaQueryOrder: [
      '(min-width: 768px)',
      '(min-width: 1024px)',
    ],
    plugins: [...presetWeb],
  })
}
