declare const pannellum: {
  viewer(container: string | HTMLElement, config: any): PannellumViewer;
};

interface PannellumViewer {
  destroy(): void;
  loadScene(sceneId: string): void;
  getScene(): string;
}