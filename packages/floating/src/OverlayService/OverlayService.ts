export abstract class OverlayService<T> {
  overlays: T[] = [];
  private subscribers: ((overlays: T[]) => void)[] = [];

  add(item: T) {
    this.overlays.push(item);
    this.notifySubscribers();
    return item;
  }

  subscribe(listener: (overlays: T[]) => void): () => void {
    this.subscribers.push(listener);
    return () => this.unsubscribe(listener);
  }

  unsubscribe(listener: (overlays: T[]) => void): void {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== listener);
  }

  protected notifySubscribers(): void {
    for (const subscriber of this.subscribers) {
      subscriber([...this.overlays]);
    }
  }
}
