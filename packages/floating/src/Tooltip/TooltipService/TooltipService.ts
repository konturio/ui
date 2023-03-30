import { nanoid } from 'nanoid';
import { OverlayService } from '../../OverlayService/OverlayService';
import type { TooltipSettings } from '..';
import type { Position, TooltipProps } from './types';

export class Tooltip {
  key: string;
  isOpen = true;
  private position: Position | Element | null = null;
  private content: string | null = null;

  constructor(
    private settings: TooltipSettings = { size: 'default', placement: 'bottom', offset: 0 },
    private onChange: () => void,
  ) {
    this.key = nanoid(4);
  }

  show(position: Position | Element, content: string) {
    this.isOpen = true;
    this.position = position;
    this.content = content;

    this.onChange();
  }

  close() {
    this.isOpen = false;
    this.onChange();
  }

  get props(): TooltipProps {
    if (this.isOpen && this.position && this.content) {
      return {
        isOpen: true,
        settings: this.settings,
        position: this.position,
        content: this.content,
      };
    }

    return {
      isOpen: false,
      settings: this.settings,
      position: null,
      content: null,
    };
  }
}

export class TooltipService extends OverlayService<Tooltip> {
  createTooltip(settings?: TooltipSettings): Tooltip {
    const tooltip = new Tooltip(settings, () => this.notifySubscribers());
    return this.add(tooltip);
  }
}
